# wiles wiki

Personal knowledge base for Chris and family — home projects, travel, and other things worth remembering.

Notes live in `content/` as markdown, edited in [Obsidian](https://obsidian.md), published via [Quartz](https://quartz.jzhao.xyz), and maintained by Claude Code + Codex using the [obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) skill framework.

## First-time setup (on a fresh clone)

```bash
npm install
bash setup-wiles.sh
```

That installs Quartz dependencies, creates `.env`, writes `~/.obsidian-wiki/config`, and symlinks the 18 wiki skills into `.claude/skills/` and `~/.codex/skills/`.

## Local preview

```bash
npx quartz build --serve
```

Open http://localhost:8080.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.

## Agent guidance

See `CLAUDE.md` (Claude Code) and `AGENTS.md` (Codex + general routing).
