# Ama's Plant Corner

Ama's Plant Corner is a welcoming, mobile-first website for a neighbourhood
plant shop in Accra. It introduces the shop, showcases plants and supplies,
shares practical care advice, and helps visitors plan a visit or get in touch.

The complete supporting write-ups are available in the [markdown folder](markdown/):
[Current Site Diagnosis](markdown/Current%20Site%20Diagnosis.md),
[Design Decisions](markdown/Decisions.md), [Redesign Audit](markdown/audit.md),
and [Additional Improvement](markdown/improvement.md).

## 1. Site layout sketch

The sketch below captures the original mobile-first page structure. The
finished redesign builds on this sequence, with the hero and shop first,
followed by Ama's story, plant-care tips, contact information, and the footer.

![Mobile-first site layout sketch](site%20layout.png)

## 2. Current site diagnosis

Before the redesign, the site had several issues affecting product discovery,
accessibility, usability, and trust. The findings below describe the original
site at the time it was diagnosed; the redesign addresses these issues.

| Symptom | Root cause | Who is affected | Why it matters |
|---|---|---|---|
| Product images did not appear. | The page requested `images/houseplants.jpg`, `images/pots.jpg`, and `images/soil.jpg`, but those files were not present at those paths. | Visitors assessing the products before deciding to visit or ask about them. | Missing imagery weakens product discovery and trust, and may reduce visits and sales. |
| Image alternatives only said “image.” | Product images shared the same generic alternative text instead of describing their subjects. | Screen-reader users and visitors browsing with images disabled or on unreliable connections. | Visitors lose useful product context, making the catalog less informative and accessible. |
| Content after the products stayed in a narrow column. | The About, Plant Care Tips, and Ask Ama sections were inside a fixed-width, floated `#main` container. | Visitors reading the shop information, particularly on larger screens. | The page felt unbalanced, wasted space, and made important information harder to find. |
| “Get In Touch” was isolated at the far left. | The contact section sat outside the centered content container and had no layout or width rules. | Visitors looking for a clear way to contact Ama. | The disconnected form was easier to overlook and could reduce inquiries and credibility. |
| The page was difficult to use on mobile. | There was no viewport metadata or responsive styling, and major regions used fixed widths and floats. | Customers browsing on phones while out and about. | Zooming, panning, and small controls could discourage visitors before they found products or contact details. |
| Plant-care topics and facts were hard to scan. | The care topics and facts had no dedicated styling or clear visual distinction. | Customers looking for advice about a particular plant, especially beginners. | Less scannable advice is less useful and makes the shop's expertise harder to appreciate. |
| Contact fields gave little input guidance. | Fields were plain text inputs without associated labels; placeholders were the only descriptions. | Assistive-technology users and people correcting or validating their contact details. | Confusing fields and invalid contact information can make inquiries harder to complete and answer. |
| Section headings skipped from level one to level four. | The page used an `<h1>` followed by `<h4>` section headings, without `<h2>` or `<h3>` levels. | Screen-reader users navigating by headings and visitors scanning the page. | An inconsistent heading outline makes the content harder to navigate and understand. |

## 3. Redesign audit

### Design direction

The redesign aims to feel like stepping into Ama's neighbourhood shop: calm,
welcoming, practical, and personal. Editorial copy, generous spacing, rounded
surfaces, and small moments of personality replace the old catalogue-like
presentation.

The layout is mobile-first, prioritising readable text, touch-friendly controls,
and one clear action at a time. At wider breakpoints, the same content expands
into editorial grids rather than becoming a separate desktop experience.

- **Colour:** Deep greens (`#073f34`, `#294c38`) anchor key sections; soft leaf
  greens highlight actions; warm paper backgrounds keep longer sections
  comfortable; and terracotta accents add earthy warmth. Off-white is used in
  place of stark white on dark sections.
- **Typography and spacing:** Serif display type gives headings an editorial
  quality, while system sans-serif keeps navigation, labels, forms, and advice
  easy to scan. Fluid heading sizes and recurring spacing create a consistent
  rhythm across screen sizes.
- **Hero and navigation:** The hero uses the shop video, a green overlay, and a
  concise welcome. The navigation is a readable, rounded pill over the hero
  and becomes roomier on larger screens.
- **Shop:** Editorial copy and plant imagery introduce the products. Product
  cards remain readable on mobile by scrolling horizontally instead of
  compressing into narrow columns.
- **About Ama:** Oversized display text and a portrait make the shop owner
  visible as a person, while the copy explains her experience and approach.
- **Care tips:** Native expandable details keep the section approachable while
  making the full advice available when visitors need it.
- **Contact and footer:** Ask Ama and Get in touch are brought together into a
  single flow, pairing a question form with practical visit and contact
  information. The footer provides utility links and a distinctive wordmark.

### Semantic structure and accessibility

The page uses structural elements that match the content, including `header`,
`nav`, `main`, `section`, `article`, `aside`, `address`, `form`, and `footer`.
Sections are connected to headings with `aria-labelledby`, product items are
articles, and care tips use native `details` and `summary` elements.

The document includes a language declaration, viewport metadata, a descriptive
title, and a page description. Navigation landmarks have accessible labels.
Images that convey content have meaningful alternative text; decorative plant
art and the oversized footer wordmark are hidden from assistive technology.
The muted, looping inline video has a poster image.

Form controls have visible labels, appropriate input types, relevant
autocomplete, and native required-field constraints. Focus styling and
touch-friendly control sizing support keyboard and mobile use. Dark green,
warm paper, and off-white surfaces provide a consistent contrast-conscious
palette, including beneath the hero video overlay.

### Visual consistency and experience

Deep green, leaf green, warm paper, and terracotta accents recur across the
hero, cards, forms, care tips, contact area, and footer. Serif display headings
are balanced with practical sans-serif text; rounded cards and controls,
underlined links, and arrow actions create a consistent interaction language.

The redesign prioritises:

1. **Mobile clarity:** Content stacks, product cards scroll rather than shrink,
   and a primary action appears early.
2. **Local trust:** Ama's name, Accra location, opening hours, experience, and
   advice help visitors understand the business and the person behind it.
3. **Practical usefulness:** Visitors can browse products, open care tips, ask
   a question, and find visit and contact information.
4. **Responsive continuity:** Wider layouts add space and columns without
   changing the order or meaning of the mobile content.

## 4. Additional improvement

### Newsletter sign-up

The redesign adds a newsletter sign-up in the footer, after visitors have had
a chance to learn about Ama's products, advice, and shop. The form asks only
for an email address, making it a low-friction way to stay connected.

The mailing list could support new-arrival announcements, seasonal care
reminders, workshops, or neighbourhood updates, while giving customers useful
plant guidance after their first visit.
