#!/bin/bash
#
# wiles-wiki setup — slimmed version of upstream obsidian-wiki setup.sh.
# Only targets Claude Code + Codex (the two agents this repo uses).
# Does NOT symlink into ~/.claude/, ~/.gemini/, ~/.hermes/, ~/.openclaw/, ~/.agents/.
#
# Usage: bash setup-wiles.sh
#
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_DIR="$SCRIPT_DIR/.skills"
VAULT_PATH="$SCRIPT_DIR/content"

install_skills() {
  local target_dir="$1"
  local label="$2"
  mkdir -p "$target_dir"
  for skill in "$SKILLS_DIR"/*/; do
    local skill_name link_path
    skill_name="$(basename "$skill")"
    link_path="$target_dir/$skill_name"
    if [ -L "$link_path" ]; then
      rm "$link_path"
    elif [ -d "$link_path" ]; then
      echo "⚠️   $link_path is a real directory, skipping symlink"
      continue
    fi
    ln -s "${skill%/}" "$link_path"
  done
  echo "✅  Installed skills → $label"
}

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║         wiles-wiki — Agent Setup                 ║"
echo "║         (Claude Code + Codex only)               ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# 1. .env from template
if [ ! -f "$SCRIPT_DIR/.env" ]; then
  cp "$SCRIPT_DIR/.env.example" "$SCRIPT_DIR/.env"
  # Point vault at in-repo content/ directory
  sed -i.bak "s|^OBSIDIAN_VAULT_PATH=.*|OBSIDIAN_VAULT_PATH=\"$VAULT_PATH\"|" "$SCRIPT_DIR/.env"
  rm -f "$SCRIPT_DIR/.env.bak"
  echo "✅  Created .env with OBSIDIAN_VAULT_PATH=$VAULT_PATH"
else
  echo "✅  .env already exists"
fi

# 2. Global config for cross-project wiki-update / wiki-query
GLOBAL_CONFIG_DIR="$HOME/.obsidian-wiki"
GLOBAL_CONFIG="$GLOBAL_CONFIG_DIR/config"
mkdir -p "$GLOBAL_CONFIG_DIR"
cat > "$GLOBAL_CONFIG" <<EOF
OBSIDIAN_VAULT_PATH="$VAULT_PATH"
OBSIDIAN_WIKI_REPO="$SCRIPT_DIR"
EOF
echo "✅  Global config written to ~/.obsidian-wiki/config"

# 3. Project-local Claude Code skills
install_skills "$SCRIPT_DIR/.claude/skills" ".claude/skills/"

# 4. Global Codex skills — Codex reads from ~/.codex/skills/ only
install_skills "$HOME/.codex/skills" "~/.codex/skills/ (Codex)"

SKILL_COUNT=$(find "$SKILLS_DIR" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')

echo ""
echo "───────────────────────────────────────────────────"
echo " Setup complete."
echo ""
echo " Skills found:    $SKILL_COUNT"
echo " Agents ready:    Claude Code (project), Codex (global)"
echo " Vault path:      $VAULT_PATH"
echo ""
echo " Next steps:"
echo "   1. Open $VAULT_PATH as a vault in Obsidian"
echo "   2. In Claude Code, say: \"Set up my wiki\" (runs wiki-setup skill)"
echo "   3. Preview the site: npx quartz build --serve"
echo "───────────────────────────────────────────────────"
echo ""
