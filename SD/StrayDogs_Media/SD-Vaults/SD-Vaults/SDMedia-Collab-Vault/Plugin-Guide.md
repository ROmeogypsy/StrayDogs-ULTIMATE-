# 🔌 SD MEDIA COLLAB VAULT — Plugin Guide
> The shared space. These plugins are about coordination, version history, and managing 4 voices in one track.

---

## ESSENTIAL INSTALLS

### 1. Obsidian Git
**What it does:** Full Git version control inside Obsidian. Auto-commit on a schedule. Push/pull from GitHub or a private remote.
**Install:** Search "Obsidian Git"

**Setup:**
1. Init a Git repo in the collab vault folder: `git init`
2. Connect to a private GitHub repo (SD Media Private)
3. Set auto-commit interval: 10 minutes
4. Set commit message template: `"[SD Media] {{date}} — auto"`

**Commands (via Command Palette):**
- `Obsidian Git: Commit all changes` → `Cmd+Shift+G`
- `Obsidian Git: Push` → manual when session is done
- `Obsidian Git: Show diff` → see exactly what changed
- `Obsidian Git: Open history` → scroll back to any version

**Why the Collab Vault needs this above all others:**
Multiple writers, multiple sessions, no way to track who wrote what bar without version history. Git solves this. Every session is a commit. Roll back to before a verse was rewritten if the new version was worse.

> You can also pull each writer's solo vault into branches if you want to see how solo work evolved before it became a collab.

---

### 2. Kanban
**What it does:** Visual drag-and-drop card board for project tracking.
**Install:** Search "Obsidian Kanban"

**Shortcut:** `Cmd+Shift+K` to create new board

**The SD Media Track Pipeline board is pre-built at [[Track-Pipeline]].**

**Columns:**
- 💡 **Concepts** — a writer name + one sentence
- ✍️ **Writing** — active, someone's working on it
- 🔄 **Revision** — bars locked, tightening language
- 🎧 **Production** — with Dame / waiting on beat
- ✅ **Final** — done
- 🚀 **Released** — on the Discography

**Cards contain:**
```
- Writers: K-9, Z-Artist
- Chemistry: Fire + Architecture
- Status: Writing
- Session: [[Sessions/2026-02-20]]
```

---

### 3. Timeline
**What it does:** Renders a visual chronological timeline from YAML frontmatter dates in notes.
**Install:** Search "Timeline" (by George-debug)

**How to use:**
Add frontmatter to any lore event or track completion note:
```yaml
---
tags: [timeline]
date: 2026-02-02
title: The Fountain Incident
color: "#ff3c00"
---
```

Then in the Timeline note:
```
\`\`\`timeline
[line-3, body-3]
+ 2026-02-02
+ The Fountain Incident
+ Everything changed here.
\`\`\`
```

**SD Media Timeline tracks:**
- World events (The Fountain Incident, Big 9's sentence)
- Track release dates
- Session dates
- Character development milestones

> **Why the Collab Vault specifically:** The timeline keeps everyone writing *in* the same world, at the same moment. K-9 can't write a bar that contradicts the timeline. Z-Artist's mural at the fountain was before the ball was thrown. The timeline enforces this.

---

### 4. Checklist
**What it does:** Aggregates all unchecked checkboxes from across the vault into one dashboard.
**Install:** Search "Checklist" (by delashum)

**How to use:**
Tag any task with `#todo`:
```
- [ ] Write the K-9 V2 for CYANIDE SHINE #todo
- [ ] Record the Z-Artist mural bar sequence #todo
- [ ] Get Dame's sign-off on the hook #todo
```

Open the Checklist pane → every `#todo` from every note, in one place.

> **Why collab needs this:** Four writers, multiple tracks, one session = lots of "come back to this." The checklist aggregator means nothing falls through.

---

### 5. Heatmap Tracker
**What it does:** GitHub-style activity calendar showing writing days.
**Install:** Search "Heatmap Tracker"

**Collab version — tracks writing activity per writer:**
```dataviewjs
renderHeatmapCalendar(this.container, {
  year: 2026,
  entries: dv.pages('#session').map(p => ({
    date: p['session-date'],
    intensity: 1,
    content: p.writers
  }))
})
```

> See at a glance which days had sessions. Green squares = the mandem was working.

---

### 6. Tag Wrangler
**What it does:** Right-click any tag → rename it across the entire vault instantly.
**Install:** Search "Tag Wrangler"

**SD Media use:**
- Track moves from `#wip` → `#revision` → `#final` → one click, all notes update
- Rename a character tag if naming conventions change
- Merge duplicate tags (`#k-9` and `#k9` → becomes one)

---

### 7. Dynamic Highlights (Collab Version)
**Install:** Search "Dynamic Highlights"

**Collab-specific highlights — all four writers in one vault:**

| Pattern | Color | Why |
|---------|-------|-----|
| `\[K-9\]` | Red `#ff4400` | K-9 verse markers |
| `\[Stray\]` | Grey `#aaaaaa` | Stray verse markers |
| `\[Z-Artist\]` | Blue `#4488ff` | Z-Artist verse markers |
| `\[Dog-Prophet\]` | Purple `#9966ff` | Dog-Prophet verse markers |
| `\[HOOK\]` | Yellow `#ffcc00` | Hook sections |
| `\[BRIDGE\]` | Teal `#44ccaa` | Bridge sections |
| `TODO\|FIXME\|REVISE` | Orange | Revision flags |
| `#session` | Green | Session-linked notes |

With these set, opening any collab track = instantly see which bars belong to which writer, color-coded.

---

### 8. Linter
**What it does:** Auto-formats notes on save to enforce consistent frontmatter and structure.
**Install:** Search "Obsidian Linter"

**Enforce on all collab tracks:**
```yaml
---
title: [required]
writers: [required - array]
status: [required]
session: [link to session note]
tags: [track, collab, required]
---
```

Linter warns if these are missing. No incomplete track files.

---

## ⌨️ COLLAB VAULT SHORTCUTS

| Action | Key |
|--------|-----|
| QuickAdd | `Cmd+Q` |
| New Kanban board | `Cmd+Shift+K` |
| New Canvas | `Cmd+Shift+C` |
| Commit to Git | `Cmd+Shift+G` |
| Longform | `Cmd+Shift+L` |
| Focus mode | `Cmd+Shift+F` |
| Graph view | `Cmd+G` |
| Toggle sidebar | `Cmd+\` |

---

## 🎨 THEME
Install **Cybertron** (Settings → Appearance → Themes → Browse → "Cybertron")
The `sd-collab.css` snippet adds writer-specific tag colors, collab callout blocks (`[!k9]`, `[!stray]`, `[!z-artist]`, `[!dog-prophet]`, `[!all]`), and nested blockquote coloring so multi-voice lyrics visually separate by writer.

---

## 📁 VAULT STRUCTURE

```
SDMedia-Collab-Vault/
├── HOME.md
├── Track-Pipeline.md        ← Kanban board
├── Active-Collabs.md
├── Timeline.md
├── Discography.md
├── SD-Lore-Cheatsheet.md
├── Roadman-Lexicon.md
├── Commandments.md
├── Sessions/                ← One note per collab session
│   └── YYYY-MM-DD.md
└── Tracks/                  ← All collab track files
    └── [Track-Name].md
```

---

*Back to [[HOME]]*
