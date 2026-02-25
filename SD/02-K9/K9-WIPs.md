# K9 — Works In Progress
> Tracks currently being written or actively revised.

```dataview
TABLE status, started, file.mtime AS "Last Edited"
FROM #track
WHERE contains(writer, "k9") AND status != "Final" AND status != "Shelved"
SORT file.mtime DESC
```

---

*Use `Cmd+Q` → New Track to add. Links auto-populate via Dataview. → [[HOME]]*
