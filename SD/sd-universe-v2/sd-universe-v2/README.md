# 🐾 SD Universe — Living World Engine
### SillyTavern Extension v2.0.0

> *You write the character. The AI is the world.*

---

## What This Does

This is a **collaborative fiction engine** — not a chatbot wrapper.

| Who | What they control |
|---|---|
| **You (the player)** | Your chosen character. Every word they say, every action they take, every bar they write. |
| **The AI** | Everyone and everything else. The crew. The strangers. The Kennel. The streets. Time. Consequence. |

The AI is instructed to **never**:
- Speak for your character or make decisions for them
- Write, finish, suggest, or paraphrase any song lyrics (existing or new)
- Summarise or skip over moments you're writing through

When your character would naturally respond to something, the AI stops and leaves:
```
>> [Your Character Name] —
```
Then waits for you to write.

---

## Install (2 steps)

**Step 1** — Put the folder here:
```
SillyTavern/public/scripts/extensions/third-party/sd-universe/
```

Structure should be:
```
sd-universe/
├── manifest.json
├── index.js
├── prompts.js
├── style.css
└── README.md
```

**Step 2** — Reload SillyTavern (F5 or restart server).

That's it. The extension appears in your **Extensions panel** automatically.

---

## Settings

Open the **Extensions panel** (the puzzle piece icon) and find **🐾 SD Universe — Living World**.

### Who are you writing?
Pick your playable character from the dropdown. Pre-built options:
- **Dog-Prophet (Angel Reyes)** — Oakland-born. Carries his stepfather's ghost, his mother's calls, a RICO shadow.
- **K-9** — Bisexual frontman. Fastest mouth in the Ends. Total loyalty, allergic to cages.
- **Zed Kidd (Z-Artist)** — Seven marks. Zombie eye. Chalk at the fountain.
- **Rax Kidd** — Golden retriever surface. Something underneath.
- **Dame** — She already decided. You're catching up.
- **Custom / Original Character** — Enter a name and brief description. You're someone in this world.

### MIRROR/MIRROR Arc
Toggle this on when your session involves the Kidd twins or the aftermath of the confrontation track. Injects the full context: the Matches incident, the St. Augustine's debt, the fountain mural update, Zed's first smile.

### Auto-detect from character card
If your SillyTavern character card is named "Dog-Prophet" or "Zed Kidd" etc., the extension will detect it automatically and configure itself. The status bar at the bottom of the settings panel shows what it detected.

### World Simulation Depth
- **Fully Alive** — NPCs have ongoing threads. Time passes between sessions. Rumours surface. Small things happen off-screen.
- **Reactive Only** — World responds to what you write, but doesn't move unprompted.

---

## How to Write With It

### Starting a session
Send your first message placing yourself somewhere in the world:

> *Angel stood at the back of the Kennel, watching Dame re-cable the desk for the third time that morning.*

The AI picks up from there — describes the room, Dame's mood, what's already happening — and then waits for you to act.

### When an NPC addresses your character
The AI will write up to the moment of response, then leave:
```
K-9 looked over his shoulder.

"Oi — you heard what happened at the fountain last night?"

>> Dog-Prophet —
```
You fill that in. Then keep going.

### Writing music
You can write bars in your messages any time. The AI will not touch them — but it will react to what the booth, the room, and the people feel when something is being made.

> *Angel stepped up to the mic. [Your bars here.]*

The AI responds with: what the engineer's posture did. What K-9 stopped doing across the room. Whether the silence after was the good kind.

---

## Editing the World

All lore, NPC profiles, and rules live in `prompts.js`. You can open it in any text editor and:
- Add or change NPC threads (what characters are currently dealing with)
- Add new locations
- Add new playable character presets
- Adjust any of the world details

The `CORE_RULES` block at the top contains the hard constraints — the AI's role split and the music rules. Edit carefully, but it's all plain text.

---

## The Status Bar

At the bottom of the settings drawer:
```
Writing as: Dog-Prophet (Angel Reyes) (auto-detected) · MIRROR/MIRROR arc active · World: Fully Alive
```

Tells you at a glance what the AI is operating with for the current session.
