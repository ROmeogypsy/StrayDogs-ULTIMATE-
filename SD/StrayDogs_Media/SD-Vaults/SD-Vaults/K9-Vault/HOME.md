---
cssclass: k9-home
---

# 🔥 K-9 — SONGWRITING VAULT
> *"Bark louder than your alibi."*
> **Kian. 16. The Voice. Big 9's little brother. YouTube's problem.**

---

## ⚡ QUICK FIRE

```dataview
TABLE status AS "📍", started AS "🗓️", file.mtime AS "Last Hit"
FROM #track AND #k9
WHERE status = "WIP"
SORT file.mtime DESC
LIMIT 5
```

---

## 📂 NAV

| | |
|---|---|
| [[Bars-Dump\|🎤 Bars Dump]] | [[Word-Sprint-Log\|⏱️ Sprint Log]] |
| [[Tracks/\|📁 All Tracks]] | [[Bar-Analysis/\|🔬 Bar Lab]] |
| [[Big9-Vault\|✉️ Letters to Big 9]] | [[Heatmap\|📊 Writing Heatmap]] |
| [[References/Roadman-Lexicon\|🗣️ Lexicon]] | [[Plugin-Guide\|🔌 Plugins]] |

---

## 🌡️ SESSION HEAT
> *Track your sprint scores. Keep the streak alive.*

```dataview
TABLE sprint-words AS "Words", sprint-time AS "Time", sprint-wpm AS "WPM"
FROM #sprint
SORT file.ctime DESC
LIMIT 7
```

---

## 🔗 LORE ANCHORS
- Big 9 → Wormwood Scrubs. Whole Life Order. Everything written in here lives in that shadow.
- Rax → best friend. The only one who makes K-9 drop the voice.
- The Kennel → Dame runs it. Home base.

---

## ✍️ WRITER PROFILE
- **Flow:** K-9 Blast — rapid-fire, punchy, builds to detonation
- **Themes:** Brotherhood, grief masked as aggression, proving it without Big 9
- **Weakness to crack:** The 16-year-old under the bars
- **Signature:** Code-switching mid-verse when the mask slips

---

*This is a solo vault. Collab work lives in → [[SDMedia-Collab-Vault]]*
