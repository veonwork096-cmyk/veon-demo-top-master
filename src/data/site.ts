// Content of the Top-master homepage. Every fact comes from veon/client.json (ids in comments); nothing is invented.

export const FUTURE = "Розділ у розробці";

// company.contacts.phones, C-021: only the two main numbers
export const PHONES = [
  { href: "tel:+380753208985", label: "(075) 32-08-985" },
  { href: "tel:+380673107983", label: "(067) 31-07-983" },
] as const;
export const PHONE = PHONES[0];
export const TELEGRAM = "https://t.me/sto_topmaster_bot"; // company.contacts.messengers
export const EMAIL = "post@top-master.com.ua"; // company.contacts.emails

// company.contacts.hours
export const HOURS = {
  center: [
    { days: "Пн–пт", time: "08:00–19:00" },
    { days: "Сб", time: "09:00–14:00" },
  ],
  sto: [{ days: "Пн–сб", time: "09:00–19:00" }],
} as const;

export const ADDRESS = { city: "Київ", street: "вул. Приколійна, 21" }; // company.contacts.addresses

export const NAV = [
  { href: "#vuzly", label: "Ремонт вузлів" },
  { href: "#tsiny", label: "Ціни" },
  { href: "#mista", label: "Адреси СТО" },
  { href: "#poshta", label: "Доставка Новою поштою" },
  { href: "#kontakty", label: "Контакти" },
] as const;

// Hero facts: C-004, C-007, C-006
export const HERO_FACTS = [
  { key: "Діагностика безкоштовно", rest: "якщо ремонтуємо в нас" },
  { key: "Гарантія на турбіни до 3 років", rest: "незалежно від пробігу" },
  { key: "Терміновий ремонт турбіни", rest: "від 6 годин" },
] as const;

export interface Unit {
  id: string;
  name: string;
  signs: string; // общее знание о симптомах, без цифр (concept §5, «Ознаки»)
  work: string; // W-F007
  terms: string; // C-006, C-007 / I-UX-07
  price?: { label: string; value: string }; // C-002
  priceNote?: string;
}

export const UNITS: Unit[] = [
  {
    id: "turbina",
    name: "Турбіна",
    signs: "Синій або чорний дим із вихлопу, турбіна свистить чи виє, авто втрачає тягу під час розгону, зростає витрата оливи.",
    work: "Повний цикл в одному сервісі: діагностика, зняття, ремонт і встановлення турбіни.",
    terms: "Терміновий ремонт — від 6 годин, повний цикл — за 1–2 дні. Гарантія до 3 років незалежно від пробігу.",
    price: { label: "Заміна картриджа", value: "800" },
  },
  {
    id: "tnvd",
    name: "ТНВД",
    signs: "Двигун важко запускається, працює нерівно, втрачає потужність, зростає витрата пального.",
    work: "Повний цикл в одному сервісі: діагностика, зняття, ремонт і встановлення паливного насоса.",
    terms: "Терміни й умови гарантії на ремонт ТНВД — уточнюйте в контакт-центрі.",
    priceNote: "Вартість назве майстер після діагностики.",
  },
  {
    id: "forsunky",
    name: "Форсунки",
    signs: "Двигун троїть, нестабільні холості оберти, чорний дим, зросла витрата пального.",
    work: "Повний цикл в одному сервісі: діагностика, зняття, ремонт і встановлення форсунок.",
    terms: "Терміни й умови гарантії на ремонт форсунок — уточнюйте в контакт-центрі.",
    priceNote: "Вартість назве майстер після діагностики.",
  },
];

// C-002 without the disputed «стандартний / капітальний» rows (C-003)
export const PRICES = [
  { name: "Заміна картриджа", value: "800" },
  { name: "Зняття та монтаж турбіни", value: "2 000" },
  { name: "Ремонт актуатора", value: "700" },
  { name: "Ремонт сервоприводу", value: "700" },
] as const;

// company.geography: 30 cities (Київ і «Київ Лівий берег» — одне місто), W-F004, C-010
export const CITIES = [
  "Київ", "Харків", "Одеса", "Львів", "Луцьк", "Вінниця", "Хмельницький", "Суми", "Чернівці",
  "Івано-Франківськ", "Черкаси", "Рівне", "Дніпро", "Тернопіль", "Полтава", "Житомир", "Кропивницький",
  "Кривий Ріг", "Кременчук", "Чернігів", "Коломия", "Біла Церква", "Умань", "Ужгород", "Запоріжжя",
  "Дрогобич", "Вишневе", "Олександрія", "Бориспіль", "Ковель",
].sort((a, b) => a.localeCompare(b, "uk"));

// products_services, C-001 (the three main units are in UNITS)
export const OTHER_SERVICES = [
  "Ремонт рульових рейок",
  "Очищення сажових фільтрів",
  "Ремонт двигунів",
  "Ремонт маховика",
  "Видалення каталізатора",
  "Ремонт пневмопідвіски",
  "Автокондиціонери",
  "Технічне обслуговування: заміна оливи та фільтрів",
] as const;

// C-008
export const EQUIPMENT = [
  { model: "Weiler Condor 81", type: "токарний верстат" },
  { model: "СБР-10", type: "балансувальний розгінний стенд" },
  { model: "БВІ-03-10Т", type: "балансувальний верстат" },
  { model: "GEOMET-2000", type: "стенд налаштування геометрії" },
  { model: "SCHAUBLIN 53", type: "фрезерний верстат" },
  { model: "Mikromat SFW 600×200", type: "плоскошліфувальний верстат" },
  { model: "ProMac FX 383C", type: "свердлильний верстат" },
  { model: "Launch X431", type: "автосканер" },
  { model: "АТР-100 Turbotechnics", type: "тестер-програматор" },
  { model: "Піскоструменева камера", type: "" },
] as const;

export const FOOTER_PAGES = [
  "Ціни на послуги", "Гарантія", "Доставка", "Статус замовлення", "Блог", "Акції", "Політика конфіденційності",
] as const;
