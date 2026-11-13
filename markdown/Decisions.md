# Design decisions

## Overall direction

The redesign is intended to feel like stepping into Ama's neighbourhood shop:
calm, welcoming, practical, and personal. The page avoids the generic
catalogue feel of the old site by using editorial copy, generous spacing,
rounded surfaces, and small moments of personality.

The page is mobile-first because many customers discover the shop while they
are already out running errands. The narrow layout therefore prioritises one
clear action at a time, readable type, touch-friendly controls, and short
content blocks. At wider breakpoints, the same content expands into editorial
grids rather than changing into a separate desktop experience.

## Colour palette

- **Deep green (`#073f34`, `#294c38`)** anchors the hero, product section,
  contact card, and footer. It connects the interface to plants and soil while
  giving Ama's advice a trustworthy, grounded feel.
- **Soft leaf green (`#dce8d1`, `#b6f99b`, `#d7f0c4`)** provides contrast and
  highlights important actions without using a loud, retail-heavy colour.
- **Warm paper (`#f1eee6`, `#e8dfd1`)** separates the About and contact
  sections from the darker plant areas. It keeps the page calm and gives long
  text comfortable backgrounds.
- **Terracotta (`#a16e51`, `#d75832`, `#e7b28f`)** is used sparingly for
  accents, labels, and emphasis. It brings in the warmth of pots, clay, and
  Accra's earthy character without competing with the green.
- **Off-white/cream (`#eff8dd`, `#eef4e4`)** is used instead of pure white on dark
  sections. It is softer, maintains strong contrast, and fits the relaxed
  visual tone.


## Typography and spacing

The serif display type gives headings a human, editorial quality, while the
system sans-serif keeps navigation, labels, forms, and care instructions
efficient to scan. `clamp()` is used for major headings so type scales
smoothly between mobile and desktop instead of jumping between arbitrary sizes.

Spacing uses a small set of recurring values: compact gaps for card content,
larger section padding for breathing room, and consistent rounded corners for
cards and controls. This creates rhythm without making a small shop page feel
over-designed.

## Layout choices

- The **hero** uses the existing shop video, a full-surface green overlay, and
  a short local message so visitors immediately understand the shop's tone and
  purpose.
- The **navigation** is a glassmorphism pill on mobile, where space is limited,
  and becomes a roomier rounded bar on larger screens. The blur, border, and
  inset highlight preserve readability over the hero.
- **What we sell** follows the supplied reference composition: editorial copy
  on the left, a large plant image with a circular motif on the right, and
  compact product cards anchored below. Cards scroll horizontally on mobile so
  they remain readable without shrinking into tiny columns.
- **About Ama** uses oversized display text behind a portrait to make the
  business owner visible as a person, not just a logo. The copy explains her
  experience and gives visitors a reason to trust her advice.
- **Plant Care Tips** uses native expandable details. Memorable teaser lines
  make the section approachable, while the full advice stays available for
  customers who need it.
- **Ask Ama / Get in touch** is merged into one flow: a low-pressure question
  form sits alongside the practical address, opening hours, phone, and email.
- The **footer** uses a dark utility layout inspired by the supplied Mobbin
  reference, with link groups above an oversized cropped wordmark so the page
  ends with a memorable brand signature.

