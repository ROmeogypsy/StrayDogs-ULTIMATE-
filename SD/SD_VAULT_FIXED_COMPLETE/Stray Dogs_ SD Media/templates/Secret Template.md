---
tags: [secret, narrative]
danger_level: "<% tp.system.prompt("Danger level: CRITICAL/HIGH/MEDIUM/LOW") %>"
who_knows: "<% tp.system.prompt("Who knows this") %>"
who_doesnt: "<% tp.system.prompt("Who doesn't know") %>"
tension_status: "<% tp.system.prompt("Status: #Fuse/#Active/#Dormant/#Detonated") %>"
created: <% tp.date.now("YYYY-MM-DD") %>
---

# SECRET: <% tp.file.title %>

> [!secret] Danger Level:
>

---

## WHAT IS KNOWN

*The actual secret*

---

## WHO KNOWS / WHO DOESN'T

| Knows | Doesn't Know |
|-------|-------------|
| | |

---

## CONSEQUENCES IF EXPOSED

*What happens when this detonates?*

---

## STATUS

`#Fuse` / `#Active` / `#Dormant` / `#Detonated`

---

## CONNECTS TO
