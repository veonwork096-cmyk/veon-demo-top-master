// Top-master homepage interactions: burger menu, «Ознаки» details on phones, city filter, bottom bar.
// Everything here is progressive: without JS the page is a complete static document.

const mqWide = window.matchMedia("(min-width: 48em)");
const mqMenu = window.matchMedia("(min-width: 75em)");

/* ---------- Burger menu ---------- */
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
const label = document.querySelector<HTMLElement>("[data-menu-label]");

function setMenu(open: boolean, restoreFocus = true): void {
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", String(open));
  panel.hidden = !open;
  document.documentElement.classList.toggle("is-menu-open", open);
  if (label) label.textContent = open ? "Закрити меню" : "Відкрити меню";
  if (open) panel.querySelector<HTMLElement>("a, [tabindex='0']")?.focus();
  else if (restoreFocus) toggle.focus();
}
toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
panel?.querySelectorAll("[data-menu-close]").forEach((a) => a.addEventListener("click", () => setMenu(false, false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") setMenu(false);
});
mqMenu.addEventListener("change", (e) => { if (e.matches) setMenu(false, false); });

/* ---------- «Ознаки»: open column on wide screens, <details> on phones ---------- */
const signs = document.querySelectorAll<HTMLDetailsElement>("details[data-signs]");
function syncSigns(): void {
  signs.forEach((d) => { d.open = mqWide.matches; });
}
signs.forEach((d) => {
  d.querySelector("summary")?.addEventListener("click", (e) => { if (mqWide.matches) e.preventDefault(); });
});
syncSigns();
mqWide.addEventListener("change", syncSigns);

/* ---------- City filter ---------- */
const input = document.querySelector<HTMLInputElement>("[data-city-input]");
const cities = Array.from(document.querySelectorAll<HTMLElement>("[data-city]"));
const empty = document.querySelector<HTMLElement>("[data-city-empty]");
const status = document.querySelector<HTMLElement>("[data-city-status]");
const norm = (s: string): string => s.toLowerCase().replace(/[’ʼ'`-]/g, " ").replace(/\s+/g, " ").trim();

function filterCities(): void {
  if (!input) return;
  const q = norm(input.value);
  let found = 0;
  for (const li of cities) {
    const name = norm(li.dataset.city ?? "");
    const hit = q === "" || name.startsWith(q) || name.split(" ").some((w) => w.startsWith(q));
    li.hidden = !hit;
    li.classList.toggle("is-match", hit && q !== "");
    if (hit) found += 1;
  }
  if (empty) empty.hidden = !(q !== "" && found === 0);
  if (status) {
    status.textContent = q === "" ? "" : found === 0 ? "Такого міста немає в мережі" : `Знайдено міст: ${found}`;
  }
}
input?.addEventListener("input", filterCities);

/* ---------- Bottom bar on phones: appears once the hero buttons are gone ---------- */
const bar = document.querySelector<HTMLElement>("[data-mbar]");
const heroActions = document.querySelector<HTMLElement>("[data-hero-actions]");
if (bar && heroActions && "IntersectionObserver" in window) {
  bar.inert = true;
  const io = new IntersectionObserver(([entry]) => {
    if (!entry) return;
    const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    bar.classList.toggle("is-shown", show);
    bar.inert = !show;
  });
  io.observe(heroActions);
}
