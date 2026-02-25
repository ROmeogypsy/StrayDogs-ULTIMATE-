---
tags: [meta, setup, tutorial]
---

# OBSIDIAN SETUP — COMPLETE GUIDE

> Step-by-step instructions to get the SD Media vault fully operational

---

## 📥 STEP 1: INSTALL OBSIDIAN

### Download Obsidian
1. Go to **https://obsidian.md**
2. Click "Download" (it's free)
3. Choose your platform:
   - **Mac:** Download .dmg file
   - **Windows:** Download .exe file
   - **Linux:** Download AppImage or use `snap install obsidian`
   - **iOS:** Get from App Store
   - **Android:** Get from Google Play

### Install
- **Mac:** Drag Obsidian to Applications folder
- **Windows:** Run installer, follow prompts
- **Linux:** `chmod +x Obsidian-*.AppImage` then run it

---

## 📂 STEP 2: EXTRACT THE VAULT

### On Desktop (Mac/Windows/Linux)
1. Download **SD_VAULT_FIXED_COMPLETE.zip**
2. **Right-click** → "Extract All" (Windows) or **Double-click** (Mac)
3. Choose extraction location (Documents, Desktop, or dedicated folder)
4. You should see a folder called **SD_VAULT_FIXED** with subfolders inside

### On Mobile (iOS/Android)
1. Download the zip to your device
2. Use Files app (iOS) or File Manager (Android)
3. Extract to a location you can access
4. Recommended: Put in iCloud Drive (iOS) or Google Drive folder (Android) for sync

---

## 🗂️ STEP 3: OPEN THE VAULT IN OBSIDIAN

### First Launch
1. **Open Obsidian**
2. You'll see "Open folder as vault" option
3. Click **"Open folder as vault"**
4. Navigate to where you extracted **SD_VAULT_FIXED**
5. Select the **SD_VAULT_FIXED** folder (not a file inside it)
6. Click **"Open"**

### What You Should See
- Obsidian will load the vault
- Left sidebar shows folder structure
- File explorer should show:
  - 00 - META
  - 01 - CHARACTERS
  - 02 - LOCATIONS
  - etc.

---

## 🔌 STEP 4: INSTALL ESSENTIAL PLUGINS

### Enable Community Plugins
1. Click **Settings** (⚙️ gear icon, bottom-left)
2. Go to **"Community plugins"** (left sidebar)
3. Click **"Turn on community plugins"**
4. Confirm the security prompt (yes, it's safe)

### Install Dataview (CRITICAL)
1. Still in Community plugins → Click **"Browse"**
2. Search: **"Dataview"**
3. Click on **Dataview** by Michael Brenan
4. Click **"Install"**
5. After install completes, click **"Enable"**
6. **Close** the Community Plugins browser

**Why Dataview matters:** It powers all the auto-updating tables on the HOME dashboard (character lists, track lists, tension tracking).

### Install Recommended Plugins (Optional but Powerful)
Do the same "Browse → Install → Enable" process for:

| Plugin | Why You Need It |
|--------|----------------|
| **Templater** | One-click create new characters/scenes/tracks from templates |
| **Kanban** | Visual tension board (drag cards from BUILDING → DETONATED) |
| **Excalidraw** | Draw relationship maps, location sketches |
| **Calendar** | Timeline view of story events |
| **Outliner** | Better nested list handling in scene notes |
| **Tag Wrangler** | Manage tags across all files easily |

### Quick Install All
Or just enable these from the list in Settings → Community plugins → Browse:
- Dataview ⭐ (REQUIRED)
- Templater
- Kanban
- Excalidraw
- Calendar
- Outliner
- Tag Wrangler

---

## 🎨 STEP 5: CONFIGURE APPEARANCE

### Apply Dark Theme
1. Settings → **Appearance**
2. **Theme:** Click dropdown → Select **"Obsidian"** (default dark theme)
3. **Accent color:** Choose red/crimson to match SD Media vibe
4. **Base font size:** 16px (comfortable reading)

### Enable Custom CSS (Optional)
The vault includes **sd-media.css** in `.obsidian/snippets/`

1. Settings → **Appearance**
2. Scroll down to **"CSS snippets"**
3. Click the **folder icon** (opens snippets folder)
4. Make sure **sd-media.css** is there
5. Back in Obsidian → Toggle **sd-media** ON

**What it does:** Adds SD Media branding (red accents, tag colors, custom callout styling)

---

## 📊 STEP 6: TEST THE SETUP

### Open the HOME Dashboard
1. Click **Files** icon (left sidebar)
2. Navigate to **00 - META/**
3. Open **HOME - MEGA DASHBOARD.md**
4. You should see:
   - Formatted headers
   - Colored callout boxes
   - **Tables with data** (if Dataview is working)

### Check if Dataview Works
Look for this section on HOME:
```
## 👥 HIGH COMMAND AT A GLANCE
```
Below it, you should see a **TABLE** with character names, roles, status, location.

**If you see this instead:**
```
```dataview
TABLE role AS "Role"...
```
```
**→ Dataview isn't enabled.** Go back to Step 4 and enable it.

### Test Graph View
1. Press **Ctrl+G** (Windows/Linux) or **Cmd+G** (Mac)
2. OR click the **graph icon** in left sidebar
3. You should see:
   - A constellation of nodes (files)
   - Lines connecting them (links)
   - Angel Reyes as the most-connected node (center of graph)
   - Different colors for different types (characters blue, locations green, etc.)

**If nodes are all grey:** Settings → Graph View → Color Groups → Enable them

---

## 🔗 STEP 7: UNDERSTAND NAVIGATION

### Core Concept: Wikilinks
- `[[Link Text]]` creates connections
- Click any `[[Character Name]]` to jump to that file
- **Ctrl+Click** opens in new pane (side-by-side reading)

### Essential Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| **Ctrl/Cmd + O** | Quick switcher (type to find any file) |
| **Ctrl/Cmd + P** | Command palette (search all commands) |
| **Ctrl/Cmd + G** | Open graph view |
| **Ctrl/Cmd + E** | Toggle edit/preview mode |
| **Ctrl/Cmd + ,** | Open settings |
| **Ctrl/Cmd + N** | New note |

### Navigation Strategy
1. **Start at HOME** (bookmark it: right-click → "Add to favorites")
2. Use **Quick Links** section to jump around
3. Click any `[[wikilink]]` to follow connections
4. Use **Graph View** to see the big picture
5. Use **Search** (Ctrl+Shift+F) to find specific content

---

## 📝 STEP 8: DAILY USAGE PATTERNS

### Reading Canon
1. Open **HOME - MEGA DASHBOARD**
2. Check **CURRENT STORY STATE** (what's happening NOW)
3. Read relevant character files
4. Follow wikilinks to connected content
5. Use Graph View to explore relationships

### Adding New Content
1. Press **Ctrl/Cmd + N** (new note)
2. Use a **template** (if Templater installed):
   - Ctrl+Cmd+I → Choose template
3. Or manually create in appropriate folder:
   - Characters → `01 - CHARACTERS/`
   - Locations → `02 - LOCATIONS/`
   - Tracks → `04 - MUSIC/Tracks/`

### Updating Canon
1. Find the relevant file (Quick switcher: Ctrl+O)
2. Edit in **Edit mode** (Ctrl+E)
3. Add wikilinks `[[like this]]` to connect to other files
4. Add frontmatter tags for organization
5. Save automatically happens (Obsidian auto-saves)

### Session Notes (Roleplay/Writing)
1. Create new note in **06 - NARRATIVE/Active Scenes/**
2. Use **Scene Template** (if Templater installed)
3. Write scene in prose
4. Link characters: `[[Angel Reyes]]`, `[[Stray]]`, etc.
5. Update **Active Tensions** if secrets revealed
6. Update character **status** and **location** fields

---

## 🎯 STEP 9: POWER USER FEATURES

### Dataview Queries (Already Set Up)
The HOME dashboard has **live queries** that auto-update:
```dataview
TABLE role, status, location
FROM "01 - CHARACTERS/High Command"
SORT dog-number ASC
```
When you update a character's frontmatter, the table updates automatically.

### Canvas Files (Visual Relationship Maps)
1. Navigate to **08 - VISUAL MAPS/**
2. Open **Relationship Web - High Command.canvas**
3. You'll see boxes and connecting lines
4. Click nodes to see relationships
5. Edit in Canvas view (drag nodes, add new connections)

### Graph View Customization
1. Open Graph View (Ctrl+G)
2. Click **Settings** (gear icon in graph)
3. **Filters:** Control what appears
   - `tag:#character` → Show only characters
   - `tag:#location` → Show only locations
4. **Groups:** Already color-coded
   - Characters = Blue
   - Locations = Green
   - Tracks = Purple
5. **Forces:** Adjust node spacing
   - Center Strength: 0.5 (keep graph tight)
   - Repel Strength: 14 (prevent overlap)

### Search Power Moves
**Ctrl+Shift+F** opens search panel

Advanced search syntax:
- `path:"01 - CHARACTERS"` → Search only character files
- `tag:#track` → Find all tracks
- `"exact phrase"` → Exact match
- `Angel Reyes -tattoo` → Find "Angel Reyes" but exclude mentions of "tattoo"

---

## 🔄 STEP 10: SYNC ACROSS DEVICES (OPTIONAL)

### Option 1: Obsidian Sync (Paid, $10/month)
- **Pros:** End-to-end encrypted, instant sync, version history
- **Cons:** Costs money
- **Setup:** Settings → Obsidian Sync → Subscribe → Enable

### Option 2: Cloud Folder (Free)
**iCloud (Mac/iOS):**
1. Move **SD_VAULT_FIXED** folder to **iCloud Drive**
2. On iPhone/iPad: Open Obsidian → Open vault → Choose iCloud location

**Google Drive (Windows/Android):**
1. Install Google Drive Desktop app
2. Move **SD_VAULT_FIXED** to Google Drive folder
3. On Android: Obsidian → Open vault → Choose Drive location

**Dropbox (Cross-platform):**
1. Install Dropbox Desktop app
2. Move **SD_VAULT_FIXED** to Dropbox folder
3. Access from any device with Dropbox Obsidian app

**⚠️ Warning:** Cloud sync can cause conflicts if editing on multiple devices simultaneously. Always fully close Obsidian on one device before opening on another.

### Option 3: Git + GitHub (Advanced, Free)
1. Install Git on your computer
2. Create GitHub account (github.com)
3. Initialize git repo in vault folder:
   ```bash
   cd SD_VAULT_FIXED
   git init
   git add .
   git commit -m "Initial commit"
   ```
4. Create GitHub repo → push vault
5. Use Obsidian Git plugin for automatic commits

**Pros:** Full version control, free, works everywhere
**Cons:** Requires Git knowledge, manual setup

---

## 🎬 STEP 11: MAKE IT HAPPEN (USING THE VAULT)

### Scenario 1: Roleplay Session (You Control Angel)
1. Open **HOME** → Check current story state
2. Open **[[Room 114]]** (current scene)
3. Open **[[Angel Reyes]]** in side pane (reference)
4. **You write:** Angel's dialogue, actions, decisions
5. **AI writes:** Everyone else (Dame, K-9, Stray, environment)
6. **After session:**
   - Update Angel's **location** field
   - Update **Active Tensions** if secrets revealed
   - Create new scene note in **06 - NARRATIVE/Active Scenes/**

### Scenario 2: World Building
1. Create new location: `02 - LOCATIONS/New Location.md`
2. Use **Location Template** (if Templater enabled)
3. Fill in details:
   - Who controls it?
   - What happens there?
   - Connect to existing locations
4. Add wikilinks to characters who frequent it
5. Update **London Geography** encyclopedia entry

### Scenario 3: New Track Creation
1. You write lyrics (like Gothic Horror Flow)
2. Create file: `04 - MUSIC/Tracks/New Track.md`
3. Use **Track Template**
4. Add:
   - Full lyrics
   - Technical analysis (syllabic embedding? backwards text?)
   - Narrative function (what does this reveal?)
   - Connects to (other tracks, characters)
5. Update **COMPLETE DISCOGRAPHY**

### Scenario 4: Expand a Character
1. Pick character (e.g., **Chew-Toy** — less developed)
2. Open their file
3. Add sections:
   - Backstory (where's he from?)
   - Relationships (who does he trust?)
   - Secrets (what's he hiding?)
   - Daily routine
4. Link to locations they frequent
5. Add to relevant scenes

### Scenario 5: Run a Side Story (From Story Concepts)
1. Open **06 - NARRATIVE/STORY CONCEPTS - EXPANDED UNIVERSE**
2. Pick one (e.g., **#18: THE PLAZA ACCORDS**)
3. Create folder: `06 - NARRATIVE/Active Scenes/Plaza Accords/`
4. Create scene files for each chapter
5. Track it in **Active Tensions** (how does it affect main story?)
6. Update characters involved

---

## 📚 STEP 12: ADVANCED WORKFLOWS

### Track Story State Across Sessions
**Create a "Session Log" note:**
```markdown
# Session Log

## February 20, 2026
**Scene:** Room 114 - The Pelican Case
**Characters:** Angel (alone)
**What happened:** Angel opened the case. Saw Dmitri's pistol. Read Lux's letter to Dame.
**Decisions made:** [Angel's player decides]
**Next:** Deliver to Dame or...?
**Updated:**
- [[Angel Reyes]]: location = "heading to Kennel"
- [[Active Tensions]]: Pelican Case → resolved
```

### Use Canvas for Plot Mapping
1. Create new canvas: `06 - NARRATIVE/Plot Map.canvas`
2. Add cards for:
   - Current scene (Room 114)
   - Active tensions (Mikhail incoming)
   - Character goals
   - Unresolved threads
3. Draw arrows showing causation
4. Update after each session

### Automate Updates with Templater
**Example template:**
```
## Quick Update: <% tp.date.now("YYYY-MM-DD HH:mm") %>

**Character:** [[]]
**Location:** [[]]
**Status Change:**
**New Connection:** [[]]

---
**Updated files:**
- [ ] Character status field
- [ ] Active Tensions
- [ ] Location description
```

Saves time updating multiple files.

---

## 🐛 TROUBLESHOOTING

### "I don't see any tables, just code blocks"
→ **Dataview isn't enabled.** Go to Settings → Community Plugins → Enable Dataview

### "Graph view is empty"
→ Check you're in the right vault. File path should show `SD_VAULT_FIXED/`

### "Links don't work / are grey"
→ That file doesn't exist yet. Create it or fix the link.

### "Mobile sync isn't working"
→ Make sure vault is in accessible location (iCloud Drive, not local-only)

### "Plugins won't install"
→ Check internet connection. Community Plugins needs online access first time.

### "I made changes and they disappeared"
→ Possible sync conflict. Check vault location isn't in two places. Obsidian auto-saves, but cloud sync can override.

---

## 🎯 QUICK START CHECKLIST

- [ ] Obsidian installed
- [ ] Vault extracted to accessible location
- [ ] Opened as vault in Obsidian
- [ ] Community Plugins enabled
- [ ] **Dataview installed and enabled** ⭐
- [ ] HOME dashboard shows tables (not code blocks)
- [ ] Graph view displays node constellation
- [ ] Tested clicking a wikilink (should jump to that file)
- [ ] Bookmarked HOME to favorites
- [ ] (Optional) Installed Templater, Kanban
- [ ] (Optional) Set up sync (cloud or Obsidian Sync)

**When all checked:** You're ready to use the vault.

---

## 🚀 NEXT STEPS

1. **Read through HOME dashboard** to understand current story state
2. **Explore Graph View** to see how everything connects
3. **Pick a character** (start with [[Angel Reyes]]) and read their full file
4. **Follow wikilinks** to discover connections
5. **Check Active Tensions** to see what's about to explode
6. **Read a track** (start with [[Track 09 — Dog On Sermon]]) to understand the album
7. **Pick a story concept** from the 38+ available
8. **Start creating**

---

**Questions?**
- Obsidian has excellent documentation: https://help.obsidian.md
- Dataview plugin guide: https://blacksmithgu.github.io/obsidian-dataview/
- This vault is your universe now. Build it, expand it, make it live.

**Sin Miedo | All 66 Dogs | 2026**
