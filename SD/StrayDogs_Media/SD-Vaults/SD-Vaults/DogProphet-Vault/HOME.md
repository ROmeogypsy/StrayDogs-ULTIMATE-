---
cssclass: prophet-home
---

# DOG-PROPHET — SONGWRITING VAULT

*The Word. The Conscience. Every consequence given a voice before it arrives.*

---

## CURRENT WORK

```dataview
TABLE status, started, file.mtime AS "last weighed"
FROM #track AND #dog-prophet
WHERE status != "Final"
SORT file.mtime DESC
```

---

## THE COMMANDMENTS
> *The operating laws. Read before every session.*

[[Commandments|📜 The Dog-Prophet Commandments]]

---

## NAVIGATE

| | |
|---|---|
| [[Commandments\|📜 Commandments]] | [[Counter-Commandments\|↯ Counter-Commandments]] |
| [[Prophecy-Log\|🔮 Prophecy Log]] | [[Verdict-Archive\|⚖️ Verdict Archive]] |
| [[Tracks/\|📁 Tracks]] | [[Review-Queue\|🔄 Review Queue]] |
| [[Spaced-Repetition\|🧠 Bar Memory]] | [[Plugin-Guide\|🔌 Plugins]] |

---

## REVIEW QUEUE
> *Bars reviewed today via Spaced Repetition — committed to memory.*

```dataview
TABLE sr-due AS "Due", sr-ease AS "Ease"
FROM #bar AND #dog-prophet
WHERE sr-due <= date(today)
SORT sr-due ASC
LIMIT 10
```

---

## THE CADENCE

Dog-Prophet writes in Commandment structure:

> *OBSERVATION. OBSERVATION. VERDICT. Silence. OBSERVATION. ESCALATION. FINAL COMMANDMENT.*

The pause before the verdict is where the listener lives. Don't rush the silence.

---

## WRITER PROFILE
- **Flow:** Preacher cadence. Statement-Statement-VERDICT. Call-and-response structures.
- **Themes:** Prophecy and consequence, debt and collection, sacrifice, legacy, judgment without court
- **Dialect:** Roadman filtered through old testament. King James via North Ends.
- **Anchors:** Big 9's sacrifice is Dog-Prophet's scripture. Everything connects back.

---

*Collab work → [[SDMedia-Collab-Vault]]*
