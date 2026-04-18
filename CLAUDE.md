# wiles-wiki

Personal Obsidian wiki for Chris (+ family). Maintained by Claude Code and Codex using the [obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) skill framework, published to GitHub Pages via [Quartz](https://quartz.jzhao.xyz).

## Layout

- `content/` — the Obsidian vault AND Quartz's content root (same files, two consumers)
- `.skills/` — obsidian-wiki skill definitions (source of truth)
- `.claude/skills/` — symlinks into `.skills/` (created by `setup-wiles.sh`, gitignored)
- `quartz.config.ts` — site title, baseUrl, theme
- `.github/workflows/deploy.yml` — builds Quartz and deploys to Pages on push to `main`

## Commands

- `bash setup-wiles.sh` — (re)create skill symlinks for Claude Code + Codex, write `.env`, write `~/.obsidian-wiki/config`
- `npx quartz build --serve` — local preview at http://localhost:8080
- `git push origin main` — triggers GH Actions deploy

## Skill routing

See `AGENTS.md` for the full skill → intent table. Common ones: `wiki-ingest`, `wiki-query`, `wiki-update`, `wiki-lint`, `cross-linker`, `tag-taxonomy`.

## Architecture reference

Karpathy's three-layer LLM Wiki pattern (raw sources → wiki → schema); see `.skills/llm-wiki/SKILL.md`.
