---
description: Start the Quartz dev server with live reload on http://localhost:8080
allowed-tools: Bash
---

Start the Quartz dev server in the background so the user can preview the wiki at http://localhost:8080. The server watches `content/` and live-reloads on save.

Steps:

1. Check if something is already listening on port 8080. If yes, tell the user and stop — don't start a second instance.

   ```bash
   lsof -iTCP:8080 -sTCP:LISTEN -n -P 2>/dev/null | tail -n +2
   ```

2. If the port is free, start the server in the background:

   ```bash
   npx quartz build --serve
   ```

   Run via the Bash tool with `run_in_background: true`. Report the background task ID and the URL.

3. Wait briefly, then confirm the server is up:

   ```bash
   curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:8080
   ```

   Expect `200`. If not, read the background task output to diagnose.

4. Tell the user: "Preview running at http://localhost:8080. Open it in your browser — edits to `content/*.md` will live-reload."
