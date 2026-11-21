const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationBackdrop = document.querySelector(".nav-backdrop");

if (menuToggle && primaryNavigation && navigationBackdrop) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    primaryNavigation.classList.toggle("is-open", isOpen);
    navigationBackdrop.hidden = !isOpen;
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  navigationBackdrop.addEventListener("click", () => {
    setMenuOpen(false);
    menuToggle.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm instanceof HTMLFormElement) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert(
      "Welcome to Ama's Plant Corner community! You'll receive plant tips, new arrivals, and a little green encouragement in your inbox.",
    );
    newsletterForm.reset();
  });
}

const askForm = document.querySelector(".ask-form");

if (askForm instanceof HTMLFormElement) {
  askForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(askForm).get("name");
    const greeting =
      typeof name === "string" && name.trim()
        ? `Thanks, ${name.trim()}!`
        : "Thanks!";
    window.alert(
      `${greeting} Your question has been received. Ama will reach out to you soon.`,
    );
    askForm.reset();
  });
}