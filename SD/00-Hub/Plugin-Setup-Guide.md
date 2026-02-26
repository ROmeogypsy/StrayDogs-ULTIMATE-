# 🔌 Plugin Setup Guide — SD Media Vault
**Tags:** #meta #setup

> Everything here is pre-configured in `.obsidian/` — but you still need to install community plugins manually. Open **Settings → Community Plugins → Browse** and search each name below.

---

## ⚡ Install Order (Do These First)

1. **Templater** → replaces core Templates
2. **Dataview** → powers the dynamic track dashboards
3. **QuickAdd** → instant capture for bar ideas
4. **Longform** → the actual writing environment
5. **Kanban** → track/project status boards

---

## 🎛️ Plugin Breakdown — What Each Does in This Vault

---

### 1. Templater
**Install name:** `Templater`
**Why it's here:** Core Templates can insert text. Templater inserts *smart* text — auto-fills dates, writer names, prompts you for track title, and can auto-link to the right WIP file.

**SD Media Setup:**
- Set template folder: `templates/`
- Enable "Trigger Templater on new file creation"
- Key shortcut: `Cmd/Ctrl + Shift + T`

**How you'll use it:**
- Hit `Cmd+Shift+T` → pick **New Track Template** → it asks for writer and title → auto-populates the file and links it to that writer's WIP note.

---

### 2. Dataview
**Install name:** `Dataview`
**Why it's here:** Dataview reads the YAML frontmatter in your track files and auto-generates live tables. Your WIP lists and Discography update automatically as you write.

**SD Media Setup:** No config needed — the queries are already written in the WIP files. Just make sure your track files include frontmatter like:
```yaml
---
writer: k9
status: WIP
started: 2026-02-20
tags: [track, k9, grime]
---
```

**Queries already in the vault:**
- Each writer's WIP page auto-lists their active tracks
- The Discography page auto-lists all `status: final` tracks
- The Collab Log auto-lists all multi-writer tracks

---

### 3. QuickAdd
**Install name:** `QuickAdd`
**Why it's here:** Bar ideas don't wait. QuickAdd is a single keystroke → type a bar → it gets filed. No context switching, no opening files.

**SD Media Setup:**
After installing, go to QuickAdd settings and create these macros:

| Macro Name | Action | Target File |
|-----------|--------|------------|
| 🎤 Capture Bar | Capture → append | `06-Techniques/Double-Meaning-Workshop.md` |
| 🐕 New Track | Template | `templates/New-Track-Template.md` |
| 📝 Session Note | Template | `templates/Collab-Session-Template.md` |

**How you'll use it:**
- K-9 spits something in the session → `Cmd+Q` → "Capture Bar" → type it → done. It lands in the workshop, dated and ready for layer analysis.

---

### 4. Longform
**Install name:** `Longform`
**Why it's here:** Built for screenwriters and novelists, but *perfect* for multi-verse tracks. Treats each section (Intro, V1, Hook, V2, Bridge) as a separate scene you can reorder by drag-and-drop. You write in scenes, it compiles to one document.

**SD Media Setup:**
- Mark any track file as a Longform project in its YAML: `longform: true`
- Set scenes to map to: Intro / Verse 1 / Hook / Verse 2 / Hook / Bridge
- Use `Cmd+Shift+L` to open the Longform sidebar

**How you'll use it:**
- Working on a K-9 track? Open Longform view → V1 is its own pane → write hot → drag the hook above V1 if it works better → compile. No copy-paste chaos.

---

### 5. Kanban
**Install name:** `Obsidian Kanban`
**Why it's here:** Visual track pipeline. See every track at a glance across: Idea → Writing → Revision → Final → Released.

**SD Media Setup:**
A pre-built Kanban board is at [[05-Collabs/Track-Pipeline]] — just open it after installing.

**Columns:**
- 💡 **Concepts** — just a title and a one-liner
- ✍️ **Writing** — actively being written
- 🔄 **Revision** — bars locked, tightening
- ✅ **Final** — done, not released
- 🚀 **Released** — on the Discography

---

### 6. Calendar
**Install name:** `Calendar`
**Why it's here:** Session logging. Each day you write, a Daily Note links to that day's session. See your writing streaks. See when you were hot.

**SD Media Setup:**
- Daily Notes folder: `08-Sessions/`
- Template: `templates/Collab-Session-Template.md`

---

### 7. Tag Wrangler
**Install name:** `Tag Wrangler`
**Why it's here:** Right-click any tag to rename it across the entire vault. When a track moves from `#wip` to `#final`, one click updates everywhere.

No setup needed — works out of the box.

---

### 8. Outliner
**Install name:** `Obsidian Outliner`
**Why it's here:** Treat bullet-pointed bar drafts like an outliner — move lines up/down with `Cmd+Shift+↑/↓`. Reorder bars without cutting and pasting.

**How you'll use it:**
- Rough-drafting a verse as bullets → use outliner controls to rearrange the bar order until the cadence lands.

---

### 9. Focus Mode
**Install name:** `Focus Mode`
**Why it's here:** When it's time to actually write, everything else disappears. Sidebar, status bar, ribbon — gone. Just you and the bar.

**Shortcut:** `Cmd+Shift+F`

---

### 10. Footnotes
**Install name:** `Obsidian Footnotes`
**Why it's here:** Add layer annotations directly in the lyric text without cluttering it. A bar with a syllabic embed gets a footnote linking to its workshop entry.

**Example:**
```
I don't move for free[^1]

[^1]: Layer 2 — not reckless. Layer 3 — Stray reference. See [[Double-Meaning-Workshop#Entry-004]]
```

---

## 🎨 Graph View Settings (Recommended)

Open Graph View (`Cmd+Shift+G`) → click the settings gear:

**Groups (color-code your nodes):**
- `tag:k9` → Red `#ff4444`
- `tag:stray` → Grey `#aaaaaa`
- `tag:z-artist` → Blue `#44aaff`
- `tag:dog-prophet` → Purple `#cc88ff`
- `tag:technique` → Yellow `#ffcc00`
- `tag:lore` → Green `#44ff88`
- `path:templates` → hide these (check "Hide")

**Filters:**
- Enable: Show orphans OFF (clean graph, no lonely nodes)
- Enable: Show attachments OFF

This gives you a visual map of the whole SD Media writing universe — watch K-9 and Z-Artist cluster together, Prophet floating connected to everything.

---

## ⌨️ Key Shortcuts (Pre-configured)

| Action | Shortcut |
|--------|----------|
| Insert template | `Cmd+Shift+T` |
| QuickAdd capture | `Cmd+Q` |
| Open Longform | `Cmd+Shift+L` |
| Focus mode | `Cmd+Shift+F` |
| Graph view | `Cmd+Shift+G` |
| Toggle sidebar | `Cmd+\` |

---

## 📦 Recommended Theme

Install **Minimal** theme (Settings → Appearance → Themes → Browse → "Minimal") and the **Minimal Theme Settings** plugin. In Minimal settings:

- Set accent color to `#cc0000` (SD Media red)
- Enable "Colorful headers"
- Set body font to system default, code font to monospace

Pairs perfectly with the `sd-media-styles.css` snippet already in the vault.

---

*Back to [[HOME]]*
