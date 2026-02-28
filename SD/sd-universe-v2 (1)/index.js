/**
 * SD Universe — Living World Engine v2.0.0
 * SillyTavern Extension
 *
 * Install: drop the `sd-universe/` folder into
 *   SillyTavern/public/scripts/extensions/third-party/sd-universe/
 * Then reload SillyTavern. Nothing else needed.
 *
 * ROLE SPLIT:
 *   Player  → writes their chosen character exclusively
 *   AI      → is the entire world: every NPC, consequence, ambient detail
 *
 * The AI never touches the player character's dialogue, decisions, or music.
 */

import {
    extension_settings,
    getContext,
    saveSettingsDebounced,
} from '../../../extensions.js';

import {
    eventSource,
    event_types,
} from '../../../../script.js';

import {
    CORE_RULES,
    WORLD_LORE,
    NPC_PROFILES,
    MUSIC_RULES,
    LIVE_TENSIONS,
    TRACK_REFERENCE,
    SYMBOLS,
    SESSION_OPENER,
    MIRROR_MIRROR_CONTEXT,
} from './prompts.js';

// ─── Identity ─────────────────────────────────────────────────────────────────
const EXT_NAME    = 'sd_universe_v2';
const EXT_DISPLAY = 'SD Universe';

// ─── Available playable characters ───────────────────────────────────────────
const PLAYABLE_CHARACTERS = {
    dog_prophet: {
        label: 'Dog-Prophet (Angel Reyes)',
        aliases: ['dog-prophet', 'dog prophet', 'angel', 'angel reyes'],
        bio: 'Oakland-born, North Ends-adopted. Carries Dimitri\'s ghost, Lux\'s calls, a RICO shadow, and the weight of prophecy he didn\'t ask for. The booth is the only confession box that doesn\'t judge.',
    },
    k9: {
        label: 'K-9',
        aliases: ['k-9', 'k9'],
        bio: 'Bisexual frontman. Fast mouth, total loyalty, allergic to cages.',
    },
    zed: {
        label: 'Zed Kidd (Z-Artist)',
        aliases: ['zed', 'zed kidd', 'z-artist'],
        bio: 'Seven marks. Zombie eye. Chalk at the fountain. Cold precision and buried love.',
    },
    rax: {
        label: 'Rax Kidd',
        aliases: ['rax', 'rax kidd'],
        bio: 'Golden retriever surface. Predator underneath. The pitch is his cage and his release.',
    },
    dame: {
        label: 'Dame',
        aliases: ['dame'],
        bio: 'She runs the Kennel. She has already decided. You are catching up.',
    },
    custom: {
        label: 'Custom / Original Character',
        aliases: [],
        bio: 'Enter a name and brief description — you are a person in this world.',
    },
};

// ─── Default Settings ─────────────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
    enabled:            true,
    playerCharacter:    'dog_prophet',    // key from PLAYABLE_CHARACTERS
    customCharName:     '',               // used when playerCharacter === 'custom'
    customCharBio:      '',
    mirrorMirrorArc:    false,            // injects MIRROR/MIRROR context
    injectOnNewChat:    true,
    worldDepth:         'full',           // 'full' = NPCs have threads, time passes
    autoDetectFromCard: true,             // try to detect PC from character card name
};

// ─── Resolve PC name ──────────────────────────────────────────────────────────
function resolvePCName(settings) {
    if (settings.playerCharacter === 'custom') {
        return settings.customCharName || 'the protagonist';
    }
    return PLAYABLE_CHARACTERS[settings.playerCharacter]?.label ?? 'the protagonist';
}

function resolvePCBio(settings) {
    if (settings.playerCharacter === 'custom') {
        return settings.customCharBio || '';
    }
    return PLAYABLE_CHARACTERS[settings.playerCharacter]?.bio ?? '';
}

// ─── Auto-detect from character card ─────────────────────────────────────────
function autoDetectPC(settings) {
    if (!settings.autoDetectFromCard) return null;
    const ctx = getContext();
    const cardName = (ctx.characters?.[ctx.characterId]?.name ?? '').toLowerCase();
    if (!cardName) return null;

    for (const [key, char] of Object.entries(PLAYABLE_CHARACTERS)) {
        if (key === 'custom') continue;
        if (char.aliases.some(alias => cardName.includes(alias))) return key;
    }
    return null;
}

// ─── Cache for built system prompt ──────────────────────────────────────────
let cachedSystemPrompt = null;
let lastCacheKey       = null;
let cachedNPCBlock     = null;

// ─── Build full system prompt ─────────────────────────────────────────────────
function buildSystemPrompt(settings) {
    const detected = autoDetectPC(settings);
    const activeKey = detected || settings.playerCharacter;
    const pcName    = activeKey === 'custom'
        ? (settings.customCharName || 'the protagonist')
        : (PLAYABLE_CHARACTERS[activeKey]?.label ?? 'the protagonist');
    const pcBio     = activeKey === 'custom'
        ? settings.customCharBio
        : PLAYABLE_CHARACTERS[activeKey]?.bio ?? '';

    // Cache check
    const cacheKey = [
        pcName,
        pcBio,
        settings.mirrorMirrorArc,
        settings.worldDepth,
    ].join('|');

    if (cachedSystemPrompt && lastCacheKey === cacheKey) {
        return cachedSystemPrompt;
    }

    // Replace [PC_NAME] placeholder throughout
    const interpolate = (str) => str.replaceAll('[PC_NAME]', pcName);

    const parts = [
        // 1. Hard rules — first, so the model sees them before anything else
        interpolate(CORE_RULES),

        // 2. Player character declaration
        `## THE PLAYER CHARACTER\n**Name**: ${pcName}\n${pcBio ? `**Who they are**: ${pcBio}` : ''}\n\nYou are the world this character moves through. You are not them.\nWhen they would speak or act, stop and leave:\n  >> ${pcName} —\nThen wait.`,

        // 3. World lore
        WORLD_LORE,

        // 4. NPC profiles
        buildNPCBlock(),

        // 5. Music rules
        MUSIC_RULES,

        // 6. Symbols and motifs
        SYMBOLS,

        // 7. Track reference (NPC knowledge of the discography)
        TRACK_REFERENCE,

        // 8. Live narrative tensions
        LIVE_TENSIONS,

        // 9. Optional arcs
        settings.mirrorMirrorArc ? MIRROR_MIRROR_CONTEXT : '',

        // 10. World depth mode
        settings.worldDepth === 'full'
            ? `## WORLD SIMULATION DEPTH: FULL\nNPCs have ongoing lives. Time passes between sessions. Show this through ambient detail — a text arriving, a rumour surfacing, something that shifted while [PC_NAME] was elsewhere. Small proof that the world did not pause.`
            : '',

        // 11. Session opener guidance
        interpolate(SESSION_OPENER),

    ].filter(Boolean);

    cachedSystemPrompt = parts.join('\n\n---\n\n');
    lastCacheKey = cacheKey;
    return cachedSystemPrompt;
}

function buildNPCBlock() {
    if (cachedNPCBlock) return cachedNPCBlock;

    const lines = ['## NPC BEHAVIOUR PROFILES'];
    for (const [, npc] of Object.entries(NPC_PROFILES)) {
        let entry =
            `**${npc.name}** — Usually found: ${npc.default_location}\n` +
            `Personality: ${npc.personality}\n` +
            `Tells: ${npc.tells}\n` +
            `Current thread: ${npc.current_thread}`;
        if (npc.ic_critique_style) {
            entry += `\nIC critique style: ${npc.ic_critique_style}`;
        }
        lines.push(entry);
    }
    cachedNPCBlock = lines.join('\n\n');
    return cachedNPCBlock;
}

// ─── Prompt injection hook ────────────────────────────────────────────────────
function onPromptReady(data) {
    const settings = extension_settings[EXT_NAME];
    if (!settings?.enabled) return;

    const injection = buildSystemPrompt(settings);
    if (!injection.trim()) return;

    // Prepend as the very first system message so it anchors everything
    data.chat.unshift({
        role: 'system',
        content: injection.trim(),
    });
}

// ─── New chat hook (optional scene-setting opener) ────────────────────────────
function onChatCreated() {
    const settings = extension_settings[EXT_NAME];
    if (!settings?.enabled || !settings?.injectOnNewChat) return;

    // We tag the opening system context but let the player's first message
    // define where in the world they're starting.
    // The SESSION_OPENER_BASE is included in the system prompt already via buildSystemPrompt.
    // Here we could trigger a UI notification — handled by the status bar.
    updateStatusBar();
}

// ─── Settings Drawer (native ST Extensions panel) ─────────────────────────────
function addExtensionDrawer() {
    const s = extension_settings[EXT_NAME];

    const charOptions = Object.entries(PLAYABLE_CHARACTERS)
        .map(([key, ch]) => `<option value="${key}" ${s.playerCharacter === key ? 'selected' : ''}>${ch.label}</option>`)
        .join('');

    const html = `
<div id="sd_universe_v2_settings" class="extension_settings">
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>🐾 SD Universe — Living World</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content">

            <div class="sd-rule-box">
                <strong>Your role:</strong> Write your character only.<br>
                <strong>AI's role:</strong> Every other person, place, and consequence.
            </div>

            <label class="checkbox_label" title="Toggle the entire extension on or off">
                <input id="sd_v2_enabled" type="checkbox" ${s.enabled ? 'checked' : ''}>
                <span>Extension Active</span>
            </label>

            <div class="sd-section-head">Who are you writing?</div>
            <select id="sd_v2_pc" class="text_pole" title="Your playable character">
                ${charOptions}
            </select>

            <div id="sd_v2_custom_block" style="${s.playerCharacter === 'custom' ? '' : 'display:none'}">
                <input id="sd_v2_custom_name" class="text_pole" type="text"
                    placeholder="Character name..."
                    value="${s.customCharName || ''}">
                <textarea id="sd_v2_custom_bio" class="text_pole" rows="2"
                    placeholder="Brief description (who are they in the Ends)..."
                    style="margin-top:4px;resize:vertical">${s.customCharBio || ''}</textarea>
            </div>

            <div class="sd-section-head">Arcs & Context</div>
            <label class="checkbox_label" title="Loads MIRROR/MIRROR twin-confrontation context and aftermath">
                <input id="sd_v2_mirror" type="checkbox" ${s.mirrorMirrorArc ? 'checked' : ''}>
                <span>MIRROR/MIRROR Arc (Kidd Twins)</span>
            </label>
            <label class="checkbox_label" title="AI tries to infer your character from the character card name">
                <input id="sd_v2_autodetect" type="checkbox" ${s.autoDetectFromCard ? 'checked' : ''}>
                <span>Auto-detect from character card name</span>
            </label>

            <div class="sd-section-head">World Simulation</div>
            <select id="sd_v2_depth" class="text_pole">
                <option value="full" ${s.worldDepth === 'full' ? 'selected' : ''}>
                    Fully Alive — NPCs have threads, time passes
                </option>
                <option value="reactive" ${s.worldDepth === 'reactive' ? 'selected' : ''}>
                    Reactive Only — world responds, doesn't move on its own
                </option>
            </select>

            <div id="sd_v2_status" class="sd-status-bar">Loading...</div>
        </div>
    </div>
</div>`;

    $('#extensions_settings').append(html);
    syncDrawer();
    bindDrawerEvents();
}

function syncDrawer() {
    updateStatusBar();
}

function updateStatusBar() {
    const s = extension_settings[EXT_NAME];
    if (!s) return;

    const detected    = autoDetectPC(s);
    const activeKey   = detected || s.playerCharacter;
    const pcName      = activeKey === 'custom'
        ? (s.customCharName || 'Custom character')
        : (PLAYABLE_CHARACTERS[activeKey]?.label ?? '?');
    const source      = detected ? ' (auto-detected)' : '';
    const arcTag      = s.mirrorMirrorArc ? ' · MIRROR/MIRROR arc active' : '';
    const depthTag    = s.worldDepth === 'full' ? ' · World: Fully Alive' : ' · World: Reactive';

    $('#sd_v2_status').text(
        s.enabled
            ? `Writing as: ${pcName}${source}${arcTag}${depthTag}`
            : 'Extension disabled'
    );
}

function bindDrawerEvents() {
    $('#sd_v2_enabled').on('change', function () {
        extension_settings[EXT_NAME].enabled = this.checked;
        saveSettingsDebounced();
        updateStatusBar();
    });

    $('#sd_v2_pc').on('change', function () {
        extension_settings[EXT_NAME].playerCharacter = this.value;
        $('#sd_v2_custom_block').toggle(this.value === 'custom');
        saveSettingsDebounced();
        updateStatusBar();
    });

    $('#sd_v2_custom_name').on('input', function () {
        extension_settings[EXT_NAME].customCharName = this.value.trim();
        saveSettingsDebounced();
        updateStatusBar();
    });

    $('#sd_v2_custom_bio').on('input', function () {
        extension_settings[EXT_NAME].customCharBio = this.value.trim();
        saveSettingsDebounced();
    });

    $('#sd_v2_mirror').on('change', function () {
        extension_settings[EXT_NAME].mirrorMirrorArc = this.checked;
        saveSettingsDebounced();
        updateStatusBar();
    });

    $('#sd_v2_autodetect').on('change', function () {
        extension_settings[EXT_NAME].autoDetectFromCard = this.checked;
        saveSettingsDebounced();
        updateStatusBar();
    });

    $('#sd_v2_depth').on('change', function () {
        extension_settings[EXT_NAME].worldDepth = this.value;
        saveSettingsDebounced();
        updateStatusBar();
    });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
jQuery(async () => {
    // Init settings — merge defaults over any missing keys
    if (!extension_settings[EXT_NAME]) {
        extension_settings[EXT_NAME] = { ...DEFAULT_SETTINGS };
    }
    Object.keys(DEFAULT_SETTINGS).forEach(key => {
        if (extension_settings[EXT_NAME][key] === undefined) {
            extension_settings[EXT_NAME][key] = DEFAULT_SETTINGS[key];
        }
    });

    // Hook into ST's prompt pipeline
    eventSource.on(event_types.CHAT_COMPLETION_PROMPT_READY, onPromptReady);

    // Hook into new chat creation
    eventSource.on(event_types.CHAT_CREATED, onChatCreated);

    // Update status when character changes mid-session
    eventSource.on(event_types.CHAT_CHANGED, () => updateStatusBar());

    // Add settings drawer to native Extensions panel
    addExtensionDrawer();

    console.log(`[${EXT_DISPLAY}] Living World Engine loaded. The Ends are moving.`);
});
