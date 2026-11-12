function initializeCollapsibleToc() {
  const items = document.querySelectorAll(
    '.md-nav--secondary [data-md-component="toc"] .md-nav__item'
  );

  items.forEach((item) => {
    const childNavigation = Array.from(item.children).find(
      (child) => child.matches("nav.md-nav")
    );
    const link = Array.from(item.children).find(
      (child) => child.matches("a.md-nav__link")
    );

    if (!childNavigation || !link || item.querySelector(":scope > .md-toc-toggle")) {
      return;
    }

    const heading = link.textContent.trim().replace(/\s+/g, " ");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "md-toc-toggle";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", `Avaa alaotsikot: ${heading}`);

    childNavigation.hidden = true;
    item.classList.add("md-nav__item--toc-collapsible");
    item.insertBefore(button, childNavigation);

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.setAttribute(
        "aria-label",
        `${expanded ? "Avaa" : "Sulje"} alaotsikot: ${heading}`
      );
      childNavigation.hidden = expanded;
    });
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initializeCollapsibleToc);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCollapsibleToc, {
    once: true,
  });
} else {
  initializeCollapsibleToc();
}
