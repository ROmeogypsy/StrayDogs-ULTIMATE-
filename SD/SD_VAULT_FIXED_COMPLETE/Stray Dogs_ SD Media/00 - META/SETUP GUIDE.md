---
tags: [meta, setup, guide]
---

# OBSIDIAN VAULT SETUP GUIDE
## SD Media Universe — Complete Installation

---

## STEP 1: INSTALL OBSIDIAN

Download from [obsidian.md](https://obsidian.md) (free, available on Mac/Windows/Linux/iOS/Android).

Open the application → **"Open folder as vault"** → select the `SD_VAULT` folder.

---

## STEP 2: INSTALL COMMUNITY PLUGINS

Go to: **Settings → Community plugins → Browse**

Install these plugins (in order of importance):

### 🔴 ESSENTIAL (install first)

| Plugin | Purpose in This Vault |
|--------|----------------------|
| **Dataview** | Powers all dynamic tables (character status, track listings, tension queries) |
| **Templater** | Character/scene/track creation with auto-prompts |
| **Kanban** | The Tensions Board and Scene Writing board |
| **Canvas** | The Relationship Map — visual character web |
| **QuickAdd** | One-keystroke creation of new characters, scenes, tracks |

### 🟡 HIGHLY RECOMMENDED

| Plugin | Purpose |
|--------|---------|
| **Longform** | Structures the full narrative as a multi-scene project |
| **Tag Wrangler** | Manage the `#Fuse #Active #Detonated #Secret` tag system |
| **Breadcrumbs** | Navigate character → faction → location hierarchies |
| **Excalidraw** | Freeform visual maps, scene sketches, lyric structure diagrams |
| **Charts** | Timeline visualisations |
| **MetaEdit** | Edit frontmatter properties without opening note |

### 🟢 QUALITY OF LIFE

| Plugin | Purpose |
|--------|---------|
| **Tasks** | Track writing tasks within notes |
| **Graph Analysis** | Enhanced graph view for character relationship density |
| **Outliner** | Better list handling for lyric structures |
| **Advanced Slides** | Present character profiles / album documentation |

---

## STEP 3: ENABLE THE CSS THEME

1. Go to: **Settings → Appearance → CSS snippets**
2. The `sd-media-theme` snippet should appear automatically
3. Toggle it **ON**
4. The vault will now display in SD Media colours:
   - Dark background
   - Dark red headings
   - Gold subheadings
   - Red-bordered blockquotes for character voice
   - Colour-coded folder system in the file explorer

---

## STEP 4: CONFIGURE TEMPLATER

1. **Settings → Templater → Template folder** → set to `templates`
2. Enable **"Trigger Templater on new file creation"**
3. Enable **"Auto Jump to Cursor"**
4. Configure folder templates:
   - `01 - CHARACTERS` → `templates/Character Template.md`
   - `04 - MUSIC` → `templates/Track Template.md`
   - `06 - NARRATIVE` → `templates/Scene Template.md`

---

## STEP 5: CONFIGURE LONGFORM

1. Open `06 - NARRATIVE/Scenes` as a Longform project
2. Title: **"STRAY DOGS — Main Narrative"**
3. Add scenes in chronological order (see the scene list in plugin config)
4. Use the Longform panel to navigate scene-by-scene and track word counts

---

## STEP 6: PIN YOUR CORE VIEWS

Pin these tabs in Obsidian for permanent access:

1. `00 - META/HOME.md` — Master dashboard (pin as home tab)
2. `00 - META/RELATIONSHIP MAP.canvas` — Visual character web
3. `06 - NARRATIVE/Tensions/TENSIONS BOARD.md` — Kanban tensions
4. `06 - NARRATIVE/SCENE KANBAN.md` — Writing board

---

## STEP 7: CONFIGURE GRAPH VIEW

1. Open Graph View (**Ctrl/Cmd + G**)
2. **Filters:** Enable notes only, disable attachments
3. **Groups:** Create colour groups:
   - Path `01 - CHARACTERS` → Red
   - Path `04 - MUSIC` → Purple
   - Path `02 - LOCATIONS` → Blue
   - Path `06 - NARRATIVE` → Orange
   - Path `03 - FACTIONS` → Dark Red
4. The graph shows the web of connections across characters, music, and narrative

---

## VAULT STRUCTURE OVERVIEW

```
SD_VAULT/
├── 00 - META/           ← Dashboard, setup, relationship map
├── 01 - CHARACTERS/     ← High Command, Academy, Other
│   ├── High Command/    ← Angel, Dame, K-9, Stray, Zed, Rax, Scraps, Big 9
│   ├── Academy/         ← Nala, Alistair, Prefect Leo
│   └── Other/           ← Lux, Dmitri, Mikhail, PatoFuego
├── 02 - LOCATIONS/      ← All key locations
├── 03 - FACTIONS/       ← Stray Dogs, Ghost Town, West End, Police
├── 04 - MUSIC/          ← Albums, Tracks, SD Media Catalog
│   ├── Albums/
│   ├── Tracks/          ← One file per track, full documentation
│   └── SD Media Catalog/
├── 05 - TIMELINE/       ← Master timeline, key dates
├── 06 - NARRATIVE/      ← Scenes, secrets, tensions, drafts
│   ├── Scenes/          ← One file per scene — the actual writing
│   ├── Secrets/         ← Secrets matrix + individual secrets
│   ├── Tensions/        ← Kanban board + individual tension threads
│   └── Drafts/          ← Longform draft folder
├── 07 - WORLD/          ← Canon rules, motifs, dialect, techniques
│   ├── Dialects/
│   ├── Motifs/
│   └── Techniques/
└── templates/           ← Templater templates for each note type
```

---

## HOW TO USE DAY-TO-DAY

### Starting a session:
1. Open `00 - META/HOME.md` — read the current story state
2. Check `06 - NARRATIVE/Tensions/TENSIONS BOARD.md` — what's active
3. Open `06 - NARRATIVE/SCENE KANBAN.md` — pick a scene to write

### Adding a new character:
1. Press **Ctrl/Cmd + P** → "QuickAdd: New Character"
2. OR: Create file in `01 - CHARACTERS/[subfolder]/` — Templater auto-triggers

### Logging a new secret:
1. Press **Ctrl/Cmd + P** → "QuickAdd: Log New Secret"
2. Fill in the prompts
3. Add it to `06 - NARRATIVE/Secrets/SECRETS MATRIX.md`
4. Add a `#Fuse` card to the Tensions Board

### Writing a scene:
1. Press **Ctrl/Cmd + P** → "QuickAdd: New Scene"
2. Fill prompts (date, location, characters, stakes)
3. Write in prose. No bullet points. Show don't tell.
4. When canon, move Kanban card to CANON column

### After adding content:
- Update the character's **Current State** section
- Update `00 - META/HOME.md` story state
- Move Tensions Board cards as appropriate
- Update `05 - TIMELINE/Master Timeline.md`

---

## QUICK REFERENCE — CALLOUT TYPES

Use these in notes for visual context:

```markdown
> [!fuse] Tension name
> What is building and why

> [!secret] Secret name
> What is hidden and from whom

> [!canon] Canon fact
> This is established fact — never contradict

> [!dog-law] Commandment
> One of the 10 Commandments

> [!sin-miedo] Without Fear
> A Sin Miedo moment — courage in the face of everything
```

---

*SD Media Independent | North Ends, London | Sin Miedo*
