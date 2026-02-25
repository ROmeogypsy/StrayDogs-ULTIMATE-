---
cssclass: sdmedia-home
---

# 🐕 SD MEDIA — COLLAB VAULT
*Where K-9, Stray, Z-Artist, and Dog-Prophet collide.*
*Solo work stays in solo vaults. Everything here is a joint.*

---

## PIPELINE

```dataview
TABLE writers, status, file.mtime AS "last session"
FROM #collab
WHERE status != "Released"
SORT file.mtime DESC
```

---

## KANBAN BOARD → [[Track-Pipeline|🎛️ Open Pipeline Board]]

---

## ACTIVE SESSIONS

```dataview
TABLE writers, session-date AS "Date", file.mtime AS "Updated"
FROM #session
SORT session-date DESC
LIMIT 5
```

---

## NAVIGATE

| Production | Reference |
|-----------|-----------|
| [[Track-Pipeline\|🎛️ Track Pipeline (Kanban)]] | [[SD-Lore-Cheatsheet\|🐕 Lore Cheatsheet]] |
| [[Active-Collabs\|🤝 Active Collabs]] | [[Discography\|📀 Discography]] |
| [[Sessions/\|⚡ Session Notes]] | [[Commandments\|📜 The Commandments]] |
| [[Timeline\|📅 SD Timeline]] | [[Roadman-Lexicon\|🗣️ Lexicon]] |

---

## CHEMISTRY MAP

| Pairing | Energy | Best For |
|---------|--------|----------|
| K-9 + Z-Artist | 🔥 + 🎨 Fire + Architecture | Hype tracks with structure |
| K-9 + Dog-Prophet | 🔥 + 📜 Impulse + Consequence | Warning tracks, beef tracks |
| K-9 + Stray | 🔥 + 🌫️ Noise + Silence | Tracks that hit AND linger |
| Z-Artist + Stray | 🎨 + 🌫️ Image + Negative Space | Deep cuts, album centrepieces |
| Z-Artist + Dog-Prophet | 🎨 + 📜 Mural + Scripture | Album closers, lore-heavy |
| Stray + Dog-Prophet | 🌫️ + 📜 Witness + Verdict | The testimony track |
| All Four | 🐕 | The big moments only |

---

## VAULT LINKS
> Solo vaults are separate — open them in Obsidian as individual vaults.

- `K9-Vault/` → K-9's private writing space
- `Stray-Vault/` → Stray's observation chamber
- `ZArtist-Vault/` → Z-Artist's studio wall
- `DogProphet-Vault/` → Dog-Prophet's scripture archive

→ [[Plugin-Guide|🔌 Collab Vault Plugin Guide]]
