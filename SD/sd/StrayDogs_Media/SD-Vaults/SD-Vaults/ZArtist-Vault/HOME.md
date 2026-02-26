---
cssclass: zed-home
---

# Z-ARTIST — SONGWRITING VAULT
*Zed Kidd. 17. The Zombie. Stays masked. Chalk on concrete.*
*A mural is just a bar that can't be ignored.*

---

## ACTIVE WORK

```dataview
TABLE status, started, file.mtime AS "last touched"
FROM #track AND #z-artist
WHERE status != "Final"
SORT file.mtime DESC
```

---

## MURAL ARCHIVE
> *Every mural Z-Artist chalks feeds the lyrics. They are the same thing.*

```dataview
TABLE location, linked-track AS "Track Connection"
FROM #mural
SORT file.ctime DESC
```

---

## NAVIGATE

| | |
|---|---|
| [[Mural-Log\|🎨 Mural Log]] | [[Mural-to-Lyric\|🔗 Mural → Lyric]] |
| [[Tracks/\|📁 Tracks]] | [[Canvas/\|🖼️ Visual Canvases]] |
| [[Twin-Study\|⟳ Twin Study]] | [[Mask-Notes\|🎭 The Mask]] |
| [[Bar-Lab/\|🔬 Bar Lab]] | [[Plugin-Guide\|🔌 Plugins]] |

---

## THE MURAL BAR METHOD
> Z-Artist's signature: an 8-bar sequence that functions as a single visual image.
> Read each bar individually: interesting.
> Read all 8 as one unit: a painting.

```
[IMAGE ESTABLISH] — bar 1
[DETAIL]          — bar 2
[DETAIL]          — bar 3
[ZOOM]            — bar 4
[ZOOM]            — bar 5
[ZOOM]            — bar 6
[REFRAME]         — bar 7
[FULL IMAGE LANDS]— bar 8
```

Use `Cmd+Shift+C` to open a Canvas and sketch the image *before* writing the bars.

---

## WRITER PROFILE
- **Flow:** The Z-Artist Mural — methodical, internal rhyme dominant, imagery over end-rhyme
- **Themes:** Duality (Zed/Rax), the mask as identity, the scarred body as text, chalk as impermanence
- **Lore:** Every bar contains a Rax ghost. Every scar is a lyric.
- **Visual anchor:** Chalk. Concrete. The Wounded Rose. Things that don't last but leave marks.

---

*Collab work → [[SDMedia-Collab-Vault]]*
