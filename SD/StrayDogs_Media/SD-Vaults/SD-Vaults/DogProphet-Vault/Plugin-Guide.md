# 🔌 DOG-PROPHET VAULT — Plugin Guide
> Dog-Prophet doesn't just write bars — he weighs them. These plugins are built for depth, memory, and the long game.

---

## ESSENTIAL INSTALLS

### 1. Spaced Repetition
**What it does:** Flashcard system built into Obsidian. Mark any bar with `#flashcard` → it queues for daily review → it goes into long-term memory.
**Install:** Search "Spaced Repetition"

**Shortcut:** `Cmd+Shift+S`

**How Dog-Prophet uses it:**
Dog-Prophet's bars are commandments. They should be *known* — not looked up. Tag every final bar with `#flashcard`:

```markdown
What is spoken becomes law. The bar is the contract.
<!--SR:!2026-02-25,4,270-->
```

The plugin shows you the bar → you rate recall (Again / Hard / Good / Easy) → it reschedules.

**Setup:**
- Review deck: `#dog-prophet AND #flashcard`
- Daily review: 10 bars max. Every morning before writing.

> **Why Dog-Prophet needs this:** He speaks in commandments. A commandment that has to be read isn't a commandment — it's a draft. Memory is the difference between scripture and notes.

---

### 2. Review (spaced-review)
**What it does:** Flags notes for periodic re-reading based on tags. Different from flashcards — this is full note review, not just bar review.
**Install:** Search "Review" (by ryanjamurphy)

**Shortcut:** `Cmd+Shift+X`

**How Dog-Prophet uses it:**
- Tag any track in progress with `#review/weekly`
- Every Monday: Obsidian surfaces those tracks automatically
- Re-read last week's drafts cold. See what holds. See what doesn't.
- The Commandments that survive re-reading are real. The ones that wilt → back to draft.

> **Why Dog-Prophet needs this:** The Prophet's words have to age. A bar written hot needs to be read cold a week later. If it still carries weight, it's a commandment. If not, it was just heat.

---

### 3. Dice Roller
**What it does:** Roll dice / random generators inside notes. Can pull random items from lists.
**Install:** Search "Dice Roller" (by javalent)

**How Dog-Prophet uses it:**
This is the *oracle* plugin. Set up a random commandment pull:

In your Commandments note:
```
`dice: [[Commandments]]|commandment`
```

Before each session: roll the oracle. Let it surface a commandment at random. Write from that law.

Also use it to randomize:
- Which character's perspective to write from
- Which lore event to make a track about
- Which counter-commandment to wrestle with

> **Why Dog-Prophet needs this:** The Prophet doesn't choose what needs to be said. It arrives. The dice roller is the randomness that breaks deliberate control — and Prophet's best work comes when the topic chooses him.

---

### 4. Longform
**What it does:** Verse-by-section writing environment.
**Install:** Search "Longform"

**Dog-Prophet scene structure:**
```
OBSERVATION-1 / OBSERVATION-2 / VERDICT / SILENCE / OBSERVATION-3 / ESCALATION / FINAL-COMMANDMENT
```

The SILENCE scene is a blank note. Just whitespace. It's intentional. Don't fill it.

> **Why structure matters here:** Dog-Prophet can't ramble. The Commandment structure requires knowing exactly where the verdict falls. Longform makes that architecture visible.

---

### 5. Citations
**What it does:** Reference management for quotes and sources. Import from Zotero, CSL-JSON, etc.
**Install:** Search "Citations"

**How Dog-Prophet uses it:**
Not for academic citations — for *lyrical* citations. Build a reference library of:
- Real-world preacher cadences (Martin Luther King, Malcolm X speeches)
- UK grime commandment-style bars (JME, Giggs, Wiley)
- Biblical text passages that resonate structurally
- Dog-Prophet's own past commandments (cite yourself forward)

When a new bar echoes an older one, cite it. Build the lineage.

---

### 6. Dynamic Highlights
**What it does:** Highlight custom patterns across vault.
**Install:** Search "Dynamic Highlights"

**Dog-Prophet highlight patterns:**

| Pattern | Color | Why |
|---------|-------|-----|
| `Big 9` | Gold | The scripture. Every mention is weighted. |
| `\bdebt\|collect\|owed\b` | Orange | Core thematic vocabulary |
| `\bsilence\|silent\b` | Light grey | The pause motif |
| `prophecy\|prophesy\b` | Blue | When Prophet speaks about himself speaking |
| `#commandment` | Purple | Flag final commandments |
| `#flashcard` | Green | Bars queued for spaced repetition |
| `\bK-9\b` | Red | The foil. Impulse vs. consequence. |

---

### 7. Various Complements (Autocomplete)
**What it does:** Autocomplete from vault vocabulary.
**Install:** Search "Various Complements"

**Dog-Prophet custom dictionary additions:**
```
commandment, verdict, prophecy, consequence, covenant, testament,
mandem, pagan, ting, wasteman, bare, ends, postcode, bells
```

The vault learns the sacred and the street simultaneously. As it should.

---

### 8. Typewriter Mode
**What it does:** Active line stays centered. No scroll.
**Install:** Search "Typewriter Mode"

**For Dog-Prophet:** Set to center the cursor at 60% down the page (not exactly middle). The commandment being written is always visible above and below — you see what came before and where the silence will fall.

---

## ⌨️ DOG-PROPHET VAULT SHORTCUTS

| Action | Key |
|--------|-----|
| QuickAdd (drop a commandment) | `Cmd+Q` |
| Spaced repetition review | `Cmd+Shift+S` |
| Note review queue | `Cmd+Shift+X` |
| Longform sidebar | `Cmd+Shift+L` |
| Focus mode | `Cmd+Shift+F` |
| Toggle sidebar | `Cmd+\` |

---

## 🎨 THEME
Install **AnuPpuccin** (Settings → Appearance → Themes → Browse → "AnuPpuccin")
Set accent to `Mauve` or `Lavender`. The `prophet-scripture.css` snippet handles the rest: deep purple palette, centered H1 headers in small-caps, commandment blockquotes with top-and-bottom borders (not left-border — commandments don't come from one side), and gradient horizontal rules as altar dividers.

---

*Back to [[HOME]]*
