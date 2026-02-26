# 🔌 K-9 VAULT — Plugin Guide
> Every plugin here was chosen for how K-9 actually writes: fast, hot, reactive.

---

## 🔥 ESSENTIAL INSTALLS (do these first)

### 1. QuickAdd
**What it does:** One keystroke → capture a bar without ever opening a file. Zero friction.
**Install:** Settings → Community Plugins → Browse → "QuickAdd"

**Set up these macros:**

| Macro | Action | Target |
|-------|--------|--------|
| 🎤 Drop a Bar | Capture → Append | `Bars-Dump.md` |
| 🔥 New Track | Template | `templates/Track.md` |
| ⏱️ Log Sprint | Capture | `Word-Sprint-Log.md` |

**Shortcut:** `Cmd+Q`

> **Why K-9 needs this:** Ideas don't wait. If you have to open a file to capture a bar, you lose it. QuickAdd means the bar is saved before you even think about it.

---

### 2. Word Sprint (obsidian-word-sprint)
**What it does:** Timed writing sessions. Set a timer (5, 10, 25 min), write, see your WPM at the end. Logs the score.
**Install:** Search "Word Sprint"

**Shortcut:** `Cmd+Shift+W` → set sprint → go

**How to use it:**
- Open any track file → `Cmd+Shift+W` → 15 minutes → write V1 hot → don't stop
- Log the WPM in Sprint Log with `Cmd+Q` → "Log Sprint"
- The Heatmap picks it up automatically

> **Why K-9 needs this:** K-9's flow is built on momentum. Timed sprints force the K-9 Blast pattern — fill all the space, no breath, escalate. The pressure makes it real.

---

### 3. Typewriter Mode
**What it does:** Keeps the active line centered on screen. Your current bar is always in the middle. No scrolling while writing.
**Install:** Search "Typewriter Mode" (by @deathau)

**Settings to enable:**
- Typewriter scrolling: ON
- Highlight active line: ON (red highlight via CSS)
- Sound on keystroke: optional — try it once

> **Why K-9 needs this:** Eyes stay on the bar you're writing. Nothing above it distracts. Write forward.

---

### 4. Dynamic Highlights
**What it does:** Highlight any word or pattern across the vault. Regex support.
**Install:** Search "Dynamic Highlights"

**Set up these highlights for K-9 bars:**

| Pattern | Color | Why |
|---------|-------|-----|
| `Big 9` | Gold `#ffcc00` | Never miss a reference to him |
| `\bnitty\b` | Red | Catch overuse of K-9's go-to insult |
| `\bwaisteman\|wasteman\b` | Orange | Same |
| `#heat` | Bright red | Spots bars flagged for development |
| `\[HOOK\]` | Blue | Track structure markers |

> **Why K-9 needs this:** When you're reviewing a draft, key words light up instantly. No hunting.

---

### 5. Longform
**What it does:** Each verse is its own "scene." Drag to reorder. Compile to one document.
**Install:** Search "Longform"

**Workflow:**
- New track → add `longform: true` to frontmatter
- Scenes: `Intro` / `V1` / `Hook` / `V2` / `Hook` / `Outro`
- Write V1 hot in its own pane → compile when done

> **Why K-9 needs this:** The K-9 Blast builds — but the build order isn't always obvious until you can see the sections as moveable blocks.

---

### 6. Heatmap Tracker
**What it does:** GitHub-style contribution graph showing your writing activity. Green squares = wrote that day. Streaks visible at a glance.
**Install:** Search "Heatmap Tracker"

**Setup:** Add this to your HOME.md:
```dataviewjs
renderHeatmapCalendar(this.container, {
  year: 2026,
  entries: dv.pages('#sprint').map(p => ({date: p.file.ctime.toFormat("yyyy-MM-dd"), intensity: p['sprint-words']/500}))
})
```

> **Why K-9 needs this:** Accountability. The streak is the discipline. A missed day shows.

---

### 7. Various Complements (Autocomplete)
**What it does:** Autocomplete for words you've used before in the vault. Learns your vocabulary.
**Install:** Search "Various Complements"

**Settings:**
- Enable: Custom Dictionary — add your roadman lexicon words
- Enable: Complement automatically
- Word delimiter: space + newline

> **Why K-9 needs this:** It learns "mandem," "nitty," "pagan" — and offers them mid-bar without a dictionary lookup.

---

### 8. Linter
**What it does:** Auto-formats notes on save. Enforces frontmatter, consistent heading levels, trailing space cleanup.
**Install:** Search "Obsidian Linter"

**Rules to enable:**
- Heading levels: enforce H1 = title only
- Remove trailing whitespace
- Ensure frontmatter: `tags`, `status`, `writer`
- Consistent line breaks

> **Why K-9 needs this:** The vault stays clean without thinking about it. Focus goes to bars.

---

## ⌨️ K-9 VAULT SHORTCUTS

| Action | Key |
|--------|-----|
| Drop a bar (QuickAdd) | `Cmd+Q` |
| Start word sprint | `Cmd+Shift+W` |
| Focus mode (full screen write) | `Cmd+Shift+F` |
| Open Longform sidebar | `Cmd+Shift+L` |
| Record voice memo | `Cmd+Shift+R` |
| Graph view | `Cmd+Shift+G` |
| Toggle sidebar | `Cmd+\` |

---

## 🎨 THEME
Install **Prism** (Settings → Appearance → Themes → Browse → "Prism")
The `k9-fire.css` snippet is already enabled — it turns the accent color to `#ff3c00`, gives you the gradient H1 headers, and makes blockquotes into double-spaced lyric blocks.

---

*Back to [[HOME]]*
