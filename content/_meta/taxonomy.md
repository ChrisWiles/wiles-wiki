---
title: Wiki tag taxonomy
category: meta
summary: Canonical tag vocabulary and frontmatter conventions for the wiki. The tag-taxonomy skill consults this file before assigning tags to any page.
tags:
  - meta
sources:
  - https://github.com/Ar9av/obsidian-wiki
  - User-provided convention 2026-04-30
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.7
  inferred: 0.3
  ambiguous: 0.0
---

This is the controlled tag vocabulary for the wiki. Every wiki page must use tags from the canonical list below, in kebab-case, with a maximum of five tags per page (system tags excluded). The `tag-taxonomy` skill consults this file before assigning tags to any new or edited page.

## Rules

- **Format**: lowercase kebab-case only (`data-centers`, not `DataCenters` or `data_centers`).
- **Count**: ≤ 5 tags per page, excluding optional `visibility/*` system tags.
- **Selection**: prefer the broadest tag that still describes the page. Reach for narrower tags only when they would meaningfully filter the wiki for a future reader.
- **No invention**: do not coin new tags inline. If a needed tag is missing, add it to this file's canonical list with a brief description, then use it.
- **Stable**: do not rename canonical tags casually. Renames require sweeping all consumers.

## Canonical tags

### Domain — what subject area

| Tag | When to use |
|---|---|
| `ai` | Anything about AI as technology, business, economics, governance, capability, or alignment. |
| `economics` | Economic models, distribution, capital, labor, prices, markets — broader than `investing`. |
| `policy` | Public policy, regulation, governance frameworks, institutional design. |
| `investing` | Public-market investment research, valuation, scorecards, beneficiary analysis. |
| `infrastructure` | Physical infrastructure: data centers, power, grid, fiber, water, construction. |
| `data-centers` | Specifically data-center buildout, design, operation, or supply. |
| `power` | Electricity generation, grid, ISOs, utilities, deliverable MW. |
| `semiconductors` | Chips, packaging, fabs, equipment, memory, ATE. |
| `supply-chain` | Multi-tier supply, lead times, scarcity, allocation. |
| `hyperscalers` | Microsoft, Amazon, Google, Meta, Oracle as compute buyers/providers. |
| `risk-analysis` | Quantified risks, tripwires, warning indicators, scenario stressors. |

### Format — what kind of page (use sparingly, only one)

| Tag | When to use |
|---|---|
| `concept` | Distilled idea or framework. |
| `entity` | Person, company, organization, or named project. |
| `synthesis` | Multi-source research synthesis. |
| `reference` | Reference doc — taxonomy, conventions, glossary, MOC. |
| `journal` | Time-stamped notes, log entries, raw observations. |

### Travel and personal (separate cluster)

| Tag | When to use |
|---|---|
| `travel` | Trip planning, itineraries, destinations. |
| `home` | Home, family, household projects. |

### Visibility (system tags — do not count toward 5-tag limit)

| Tag | When to use |
|---|---|
| `visibility/public` | Page is intentionally public on the published Quartz site. |
| `visibility/internal` | Page should not be linked from public hubs but may publish. |
| `visibility/pii` | Contains personal information; consider moving under `private/` or `_raw/`. |

## Frontmatter conventions

Every wiki page must have YAML frontmatter with these fields:

```yaml
---
title: <full page title; folded scalar `>-` for long titles>
category: <one of: ai-reference, concepts, entities, skills, synthesis, projects, travel, home-projects, meta>
summary: <≤200 chars, 1-2 sentences describing scope>
tags:
  - <tag from canonical list>
  # ...up to 5
sources:
  - <URL or `User-provided note on YYYY-MM-DD`>
created: YYYY-MM-DD
updated: YYYY-MM-DD
provenance:
  extracted: <0.0-1.0; share of content directly pulled from primary sources>
  inferred: <0.0-1.0; share synthesized or estimated>
  ambiguous: <0.0-1.0; share contested or unverifiable>
---
```

The three provenance values must sum to ~1.0.

## Provenance markers (inline)

Tag non-trivial inline claims with one of:

- `^[extracted]` — the claim is directly quoted or paraphrased from a primary source linked in `sources:`.
- `^[inferred]` — the claim is synthesized, estimated, or computed from multiple sources.
- `^[ambiguous]` — the claim is contested across sources, has unclear provenance, or is forward-looking.

These let a future reader (or refresh agent) judge which claims to verify.

## Adding a new tag

1. Confirm no existing canonical tag fits.
2. Add a row to the appropriate domain table above with a one-sentence "When to use" description.
3. Apply the new tag in the page that motivated it.
4. The next `wiki-lint` pass will re-validate consistency across the vault.

## Related

- [[ai-reference/index|AI reference index]] — primary use of the `ai`, `investing`, `infrastructure`, `data-centers` tags.
- [[index|Vault index]]
