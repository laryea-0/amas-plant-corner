# Redesigned site audit

## Semantic HTML

The page uses structural elements that match the content: `header`, `nav`,
`main`, `section`, `article`, `aside`, `address`, `form`, and `footer`.
Sections have headings connected with `aria-labelledby`, product items are
articles, and the care tips use native `details` and `summary` elements rather
than a custom accordion pattern.

Images have meaningful alternative text where they communicate content. The
decorative plant artwork and oversized footer wordmark are hidden from assistive
technology with empty or `aria-hidden` alternatives. The existing video is
muted, loops inline, and has a poster image for a more stable fallback.

## Baseline accessibility

- The document has a language declaration, viewport metadata, a descriptive
  title, and a page description.
- Navigation and footer navigation have accessible labels.
- Form controls have visible labels, correct input types, autocomplete where
  relevant, and native `required` constraints.
- Buttons and links have visible focus styling or inherit browser focus
  indicators, and interactive controls are sized for touch use.
- Text is placed on high-contrast dark green, warm paper, or off-white
  surfaces. The full-video green overlay is intentionally dark enough to keep
  hero copy legible over changing footage.

## Visual consistency

The same deep green, leaf green, warm paper, and terracotta accents recur
across the hero, cards, forms, care tips, contact panel, and footer. The serif
display face is reserved for expressive headings, while the sans-serif face
handles practical information. Rounded cards, pills, underlined links, and
arrow actions form a consistent interaction language.

The layout was prioritised around the brief's constraints:

1. **Mobile clarity first:** content stacks, cards scroll rather than compress,
   and the primary action appears early.
2. **Local trust:** Ama's name, Accra location, opening hours, experience, and
   advice are visible instead of hiding the business behind decoration.
3. **Practical usefulness:** care details can be opened, questions can be
   written, and visit/contact information is easy to find.
4. **Responsive continuity:** desktop layouts add space and columns without
   changing the order or meaning of the mobile content.

