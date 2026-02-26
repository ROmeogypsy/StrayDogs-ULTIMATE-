---
tags: [track, music, sd-media]
track_number: <% tp.system.prompt("Track number") %>
artist: "<% tp.system.prompt("Artist") %>"
features: "<% tp.system.prompt("Features (if any)") %>"
runtime: "<% tp.system.prompt("Runtime e.g. 3:24") %>"
status: "<% tp.system.prompt("Status: released/vaulted/unreleased") %>"
recording_location: "<% tp.system.prompt("Recording location") %>"
album: "<% tp.system.prompt("Album") %>"
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

**Runtime:** | **Artist:** | **Status:**

---

## AUDIO ELEMENTS

*Beat, production, sound design notes*

---

## LYRICS

```
[Paste lyrics here]
```

---

## KEY MOMENTS

*Timestamps, narrative beats, what matters*

---

## TECHNICAL ELEMENTS

*Syllabic embedding, backwards text, Fibonacci flow etc.*

---

## NARRATIVE FUNCTION

*What does this track DO in the story arc?*

---

## CONNECTS TO

*Cross-references to other tracks, characters, events*
