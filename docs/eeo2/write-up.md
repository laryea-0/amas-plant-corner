# EE02 write-up: fixes and further improvement

- My site: [Ama's Plant Corner on GitHub Pages](https://laryea-0.github.io/amas-plant-corner/)
- Audit received from: David Sedzro Sitsofe Kodzo, [accessibility audit](../audit%20feedback/audit-feedback.md)

## Fixes

### Finding 1: Text and buttons have insufficient colour contrast
- **Reproduced before fixing:** Yes. The original palette produced 3.49:1 for the forest-green text on the sage “Plan your visit” button and 2.98:1 for cream text on the sage product buttons, matching the audit evidence. The hero video also had a partially transparent overlay, so its contrast depended on the video frame.
- **Cause:** Several light greens, terracotta accents, and translucent text backgrounds were used as text or control colours without enough contrast against their section backgrounds.
- **What I changed:** Updated semantic colour tokens and the hero and product overlays in [design-system.css](../../css/design-system.css), [hero.css](../../css/hero.css), [shop.css](../../css/shop.css), and [products.css](../../css/products.css). Buttons now use light backgrounds with dark forest text, and text-on-light surfaces uses darker green or terracotta tokens.
- **Why this fixes the cause, not just the symptom:** The shared palette now supplies accessible foreground/background combinations for components instead of patching individual text with unrelated colours. The darker hero overlay and product-card panel reduce contrast variation from video frames and product photography.
- **How I verified it:** Checked representative token combinations with a WCAG contrast calculation in the browser. Results included 10.42:1 for forest text on cream, 9.61:1 for forest on bright leaf, 6.30:1 for terracotta on paper, 5.86:1 for care copy on pale leaf, and 5.35:1 for form placeholders on the contact background. All sampled normal-text pairs were at least 4.5:1. The video and product photo were checked against a worst-case white underlying frame.

### Finding 2: Product Explore and social-media navigation links do not reach their intended destinations
- **Reproduced before fixing:** Yes. The original product actions pointed to a missing `#shop` target, and the social links point to platform home pages rather than Ama's accounts.
- **Cause:** The product anchors referenced a missing target, and the actual social account URLs are not present in the project.
- **What I changed:** The hero “Explore plants” action points to the existing `#plants` section. The individual product-card actions are currently commented out and are not available to visitors.
- **Why this fixes the cause, not just the symptom:** The hero action reaches the plants section, but the original product-card actions and intended social destinations point to social media platforms. I did not guess or fabricate the shop's social profile URLs.
- **How I verified it:** Inspected the rendered page links and confirmed the product-card actions are not rendered. The footer social destinations are generic platform URLs, not Ama-specific accounts.

### Finding 3: The mobile hamburger menu does not function
- **Reproduced before fixing:** Yes. The menu button has no behavior that opens or closes the navigation.
- **Cause:** The button and navigation have no menu-toggle implementation.
- **What I changed:** Implemented the mobile dropdown in [Script.js](../../js/Script.js) and [navigation.css](../../css/navigation.css). The button exposes its expanded state and controls the navigation; the menu closes when a link is chosen or Escape is pressed. The button retains the shared 44px minimum touch size.
- **Why this fixes the cause, not just the symptom:** The control now opens and closes the navigation instead of only presenting a decorative menu icon, and its accessible state is updated as it changes.
- **How I verified it:** In a mobile browser viewport, confirmed the links appear when opened, a link selection closes the menu, and Escape closes it and returns focus to the button. Confirmed the desktop navigation remains visible while the toggle is hidden. The toggle now precedes the links in DOM order so Tab from the open toggle can reach the menu links; keyboard retesting is still needed.

### Finding 4: Some text is too small to read comfortably on mobile devices
- **Reproduced before fixing:** Yes. Several shared type tokens were below 12px at the browser's default 16px root size, including the portrait note, labels, and product prices.
- **Cause:** Some individual text styles used 0.6–0.75rem sizes.
- **What I changed:** Raised the smallest shared type tokens to 0.75rem (12px) and the form-label token to 0.95rem in [design-system.css](../../css/design-system.css). Product prices, the portrait note, labels, helper text, and footer metadata consume those tokens.
- **Why this fixes the cause, not just the symptom:** The minimum is set in the common type scale, so components using the shared tokens remain readable consistently and can be scaled centrally.
- **How I verified it:** Inspected rendered text sizes at a 320px viewport in the local browser; the smallest visible text was 12px, with no horizontal overflow.

### Finding 5: Required form fields are not identified before submission
- **Reproduced before fixing:** Yes. The name and question labels did not identify those controls as required.
- **Cause:** The fields had native `required` attributes, but no visible required instructions or label cues.
- **What I changed:** Added a visible form instruction, marked the name and question labels “(required)”, marked the topic as optional, and associated the required controls with the instruction using `aria-describedby` in [index.html](../../index.html). The contact form now shows a personalized browser confirmation after a valid submission attempt and resets the fields. **NB:** This is only client-side feedback; the question is not sent to or stored by a service*
- **Why this fixes the cause, not just the symptom**: People can identify required fields before submitting, and assistive technology can announce the shared instruction with those controls.
- **How I verified it:** Checked the rendered labels, required attributes, and `aria-describedby` references in the local browser. Submitted valid test details and confirmed the alert appeared and the form reset; delivery of the question remains unimplemented.

### Finding 6: Insufficient size and spacing of touch targets
- **Reproduced before fixing:** Yes. The contact links and footer links had no minimum target size.
- **Cause:** Their clickable areas were defined by their text alone.
- **What I changed:** Added a shared 2.75rem (44px) minimum target size and vertical padding to contact and footer links, the newsletter button, and the mobile menu control. The token is in [design-system.css](../../css/design-system.css); component styles are in [contact.css](../../css/contact.css), [footer.css](../../css/footer.css), and [navigation.css](../../css/navigation.css).
- **Why this fixes the cause, not just the symptom:** The full interactive areas meet the 44px minimum and links have spacing between them.
- **How I verified it:** Checked computed target heights of 44px for contact and footer links and the menu button in the local browser.

### Finding 7: The newsletter subscription button does not communicate its purpose
- **Reproduced before fixing:** Yes. The button displayed only an arrow. It had an accessible name, but the purpose was not visible.
- **Cause:** An icon-only submit button and a visually hidden email label made the action unclear to sighted visitors.
- **What I changed:** Added a visible “Email address” label and replaced the arrow with a visible “Subscribe” button in [index.html](../../index.html). Styled the control using the shared size and colour tokens in [footer.css](../../css/footer.css).
- **Why this fixes the cause, not just the symptom:** Both the input and action now communicate their purpose visually and programmatically.
- **How I verified it:** Confirmed the visible label is associated with the email input and the rendered button text is “Subscribe”. A valid test address also triggers a welcoming browser alert and the form resets. This confirmation is client-side only; no subscription is sent or stored and no confirmation email is issued.

### Finding 8: The homepage hero content is positioned too low
- **Reproduced before fixing:** Yes. The hero used bottom alignment, placing the content near the bottom edge.
- **Cause:** `.hero` aligned its content to `flex-end`.
- **What I changed:** Centered the hero content vertically and adjusted its responsive padding in [hero.css](../../css/hero.css). The video overlay was also darkened using the shared design token.
- **Why this fixes the cause, not just the symptom:** The content is positioned by the hero's layout rather than relying on bottom-edge placement and oversized padding.
- **How I verified it:** Confirmed the rendered hero uses centered alignment at the 320px mobile viewport and desktop viewport.

### Finding 9: The page content stretches excessively on large screens
- **Reproduced before fixing:** Yes. The shared maximum width was 85rem.
- **Cause:** The global content-width token allowed content containers to expand to 1360px.
- **What I changed:** Reduced the shared maximum width to 75rem (1200px) in [design-system.css](../../css/design-system.css), which is used by the page, navigation, hero, and footer content.
- **Why this fixes the cause, not just the symptom:** One shared maximum width constrains the site's content consistently instead of applying isolated widths to individual sections.
- **How I verified it:** At a 1920px browser viewport, the page, hero, and footer content containers computed to 1200px.

## Issues I found myself

- Added a keyboard-accessible “Skip to main content” link and a focusable main landmark in [index.html](../../index.html) and [design-system.css](../../css/design-system.css). Verified that it is the first Tab stop and moves focus to the main landmark.
- Marked the decorative hero video as hidden from assistive technology.
- Added accessible mobile-menu state with `aria-expanded` and `aria-controls`, Escape-key closing with focus return, and automatic closing after a navigation link is selected. Verified these behaviors in a mobile browser viewport and confirmed desktop navigation remains available.
- Corrected mobile menu keyboard tab order by placing the toggle before the dropdown links in the document, so Tab from the opened toggle reaches the first link. Browser keyboard retesting remains pending.
- Updated the mobile menu control to animate into a close (X) icon when open and added a dark, clickable backdrop that closes the menu and returns focus to the toggle. The backdrop is also keyboard-focusable and has a visible focus outline. Browser verification remains pending.
- Added client-side confirmation alerts to the contact and newsletter forms. These give immediate feedback but do not deliver or store submissions; connecting both forms to an appropriate service remains future work.
- Adjusted the hero calls to action on narrow screens so they stack, use the full available content width, and have rounded edges without the angled clipping. Verified the responsive layout in a narrow browser viewport.


## Further improvement: visible keyboard focus indicators

- **Who it helps:** Keyboard users and people who use alternative input devices.
- **The barrier they faced:** It could be difficult to identify which link, button, or form control was focused, especially on the dark navigation, hero, and footer backgrounds.
- **What I built:** Added a consistent 3px `:focus-visible` outline with an offset across interactive controls in [styles.css](../../css/styles.css). The outline uses forest green on light sections and bright leaf green on the dark navigation, hero, footer, and contact-card backgrounds. The hero buttons lose their angled clipping and use a pill shape while focused so the focus indicator is not clipped.
- **Why it is worth doing for the business:** A visible focus location makes the shop's navigation, contact options, and forms easier to use without a mouse, helping more visitors complete their intended tasks.
- **How I tested it:** CSS changes and the removal of component rules that suppressed outlines were checked in the source. Full keyboard testing across mobile and desktop layouts remains pending; browser testing was unavailable in this session.

## Further improvement: High-contrast mode

- **Who it helps:** Visitors with low vision, color-vision deficiencies, or other needs for stronger contrast between page content and its background.
- **The barrier they faced:** The standard color palette may not provide enough visual separation for every visitor.
- **What I built:** Added a separate, labeled native checkbox with a contrast-circle icon in the navigation. Its checked state applies a high-contrast black, white, and yellow palette through CSS `:has()` in [design-system.css](../../css/design-system.css). The setting is not saved and resets when the page reloads.
- **Why it is worth doing for the business:** A stronger-contrast option can make product information, navigation, and contact details easier to distinguish for more visitors.
- **How I tested it:** Reviewed the checkbox semantics, CSS mode selectors, and foreground/background token assignments. Browser, assistive-technology, and full-component contrast testing remains pending.