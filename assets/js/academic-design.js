/*
 * Progressive presentation only. Markdown remains the source of all text.
 * If this script is unavailable, every heading and list remains readable.
 */
(() => {
  const content = document.querySelector(".academic-home .page__content");
  if (content) {
    // Treat standalone bold paragraphs as section headings; editors can also
    // use ordinary Markdown ### headings. No HTML wrappers are required.
    content.querySelectorAll(":scope > p").forEach((paragraph) => {
      if (paragraph.children.length !== 1 ||
          paragraph.firstElementChild.tagName !== "STRONG" ||
          paragraph.textContent.trim() !== paragraph.firstElementChild.textContent.trim()) return;
      const heading = document.createElement("h3");
      heading.className = "academic-section-heading";
      heading.textContent = paragraph.textContent;
      paragraph.replaceWith(heading);
    });

    const listStyle = (heading) => {
      const text = heading.textContent.toLowerCase();
      if (text.includes("research areas")) return "academic-research-list";
      if (text.includes("publications") || text.includes("working papers")) return "academic-paper-list";
      if (text.includes("teaching experience")) return "academic-course-list";
      return null;
    };
    content.querySelectorAll(":scope > h2, :scope > h3").forEach((heading) => {
      const className = listStyle(heading);
      if (!className) return;
      let next = heading.nextElementSibling;
      while (next && !/^H[1-6]$/.test(next.tagName)) {
        if (next.tagName === "UL") { next.classList.add(className); break; }
        next = next.nextElementSibling;
      }
    });

    // Keep the existing status wording, including parentheses, verbatim.
    content.querySelectorAll(".academic-paper-list > li").forEach((item) => {
      const finalText = item.lastChild;
      if (!finalText || finalText.nodeType !== Node.TEXT_NODE) return;
      const match = finalText.textContent.match(/\s*(\((?:Accept(?:ed)?|Revise & Resubmit|Under Review)\))\s*$/i);
      if (!match) return;
      const before = finalText.textContent.slice(0, match.index);
      const badge = document.createElement("span");
      badge.className = "academic-status";
      badge.textContent = match[1];
      finalText.textContent = before + " ";
      item.appendChild(badge);
    });
  }

  const themeControl = document.querySelector("#theme-toggle [role='button']");
  if (themeControl) themeControl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      themeControl.click();
    }
  });

  const nav = document.querySelector("#site-nav");
  const menu = nav && nav.querySelector(".hidden-links");
  const menuButton = nav && nav.querySelector(":scope > button");
  if (menu && menuButton) {
    const syncMenu = () => {
      const expanded = !menu.classList.contains("hidden");
      menuButton.setAttribute("aria-expanded", String(expanded));
      menuButton.setAttribute("aria-label", expanded ? "Close navigation menu" : "Open navigation menu");
    };
    new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ["class"] });
    nav.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.classList.contains("hidden")) {
        menuButton.click();
        menuButton.focus();
      }
    });
    syncMenu();
  }
})();
