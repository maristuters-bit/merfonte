---
name: linkedin
description: Write LinkedIn posts for Merfonte (founder profile or company page) in the brand's voice — evidence-led skincare after forty, sea/source/science, no anti-aging language. Use when the user asks for a LinkedIn post, a LinkedIn series, a founder update, a launch or waitlist announcement, or to rewrite copy for LinkedIn. Can schedule through Metricool when asked.
---

# Merfonte on LinkedIn

Merfonte is a curated online store, opening 2026, for science-led face, eye
and body care for women and men over forty, selected from European
laboratories. Markets: NL, BE, DE, then EU. Site: https://merfonte.com.

Before drafting, read what is current in the repo so posts match reality:
- `site/index.html` — the public position and the exact phrases already in use
- `work/starta-sortiments.md` — the launch range decision (barrier cream leads,
  retinoid second, serum third). Do not announce products or prices that are
  not decided there.

## Who is speaking

Ask, if not stated: **founder profile** or **company page**.
- Founder: first person singular, building in public — decisions, what was
  rejected and why, supplier and formulation lessons. Personal, still exact.
- Company page: "we", calmer, fewer posts, product and evidence focused.

## Voice

Taken from the site; keep it.
- Short declarative sentences. Calm, adult, a little dry. No hype.
- Mechanism over mood: barrier function, lipids, renewal rate, concentration.
- **Never** "anti-aging", "age-defying", "turn back the clock", "flawless",
  "miracle", "game-changer". Skin after forty is not a fault to fix.
- Women *and* men — don't default to one.
- "Cited, not claimed": every efficacy statement needs a source the user can
  link (study, review, ingredient monograph). If there is none, cut it.
- No emoji walls, no "🚀", no "I'm thrilled to announce". At most one emoji,
  usually none.
- Recurring anchors you may use (sparingly): *For skin that has changed.* ·
  *A spring in the sea* · *sea, source, science* · *We will write once.*

## Compliance (EU Cosmetics Regulation 1223/2009, claims criteria 655/2013)

Cosmetics may not claim medical effects. Avoid: heals, treats, cures, repairs
damage, eczema/rosacea/acne treatment, "clinically proven" without the study.
Prefer: supports, helps maintain, replenishes, measured in a study of N people
over X weeks (with link). Flag any borderline claim to the user rather than
quietly softening it.

## LinkedIn format

- **Hook** = first ~210 characters (what shows before "…see more"). One
  concrete, slightly unexpected statement. No question-bait.
- Body 600–1,300 characters for most posts; up to ~2,500 for an essay post.
- One idea per line, blank lines between short paragraphs. No markdown — 
  LinkedIn does not render `**bold**` or headers.
- Put links in the **first comment**, not the post (reach penalty); say so in
  the deliverable.
- 0–3 hashtags at the very end, specific: #skincare #dermocosmetics
  #barrierfunction #DTC #founders. Never #antiaging.
- End with a plain line, not a CTA stack. Waitlist posts may end with:
  "Waitlist in the first comment. We will write once."

## Post types that fit this stage

1. **Decision post** — a choice made and the reasoning (e.g. why the barrier
   cream leads, not the retinoid). Strongest format for the founder.
2. **Ingredient explainer** — one mechanism, one number, one source.
3. **The name** — the submarine-spring story, briefly, tied to "mechanism, not mood".
4. **Supplier / lab notes** — what was asked of European labs and why
   (disclosed concentrations). No supplier names without the user's OK.
5. **Myth vs. measurement** — a common claim, what the evidence says.
6. **Launch / waitlist** — rare. Only when there is something real to show.

## Deliverable

For each request give:
1. The post text, ready to paste (plain text in a code block so line breaks survive).
2. The first comment (link + any sources).
3. One alternative hook.
4. A visual suggestion from existing assets in `site/assets/img/` or
   `work/img/` (e.g. `og-v3.jpg`, `drop.jpg`), or "text only".
5. Any claim you flagged and why.

For a series, also give a posting order and cadence (founder: 2/week max;
company page: 1/week max).

## Scheduling (only when asked)

If the user asks to schedule, use the Metricool connector: load
`mcp__Metrcicool__getBrandSettings` to find the brand and LinkedIn network,
optionally `getBestTimeToPostByNetwork`, then
`createScheduledPostForReview` (prefer review over direct publish). Confirm
date, time zone and account with the user before creating it. Never publish
directly without explicit approval.
