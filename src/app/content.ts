export type Locale = 'pl' | 'en';
export interface Project {
  slug: string;
  title: string;
  categories: string[];
  featured: boolean;
  image: string;
  status: string;
  summary: string;
  html: string;
}
export interface LocalizedProject extends Project {
  locale: Locale;
}
export const site = {
  name: 'Falcon MakerLab',
  origin: 'https://falcon-codes.pl',
  github: 'https://github.com/FalconMakerLab',
};
export const copy = {
  pl: {
    projects: 'Projekty',
    about: 'O pracowni',
    contact: 'Kontakt',
    menu: 'Otwórz menu',
    close: 'Zamknij menu',
    skip: 'Przejdź do treści',
    eyebrow: 'NIEZALEŻNA PRACOWNIA TECHNOLOGII',
    headline: 'Od pomysłu.',
    headlineEnd: 'Do rzeczy.',
    intro: 'Kod, elektronika i fizyczne projekty. Z ciekawości. Z myślą o prawdziwym świecie.',
    explore: 'Zobacz projekty',
    featured: 'Wybrany projekt',
    read: 'Poznaj projekt',
    all: 'Wszystkie projekty',
    selected: 'Z warsztatu',
    projectIntro: 'Pomysły, które wychodzą poza ekran.',
    pillars: 'Trzy obszary. Jedna ciekawość.',
    code: 'Oprogramowanie, automatyzacja i systemy embedded. Kod, który robi coś użytecznego.',
    make: 'Elektronika, druk 3D i prototypowanie. Od pierwszego szkicu do fizycznej rzeczy.',
    grow: 'Ogród, szklarnia i nawadnianie. Technologia bliżej natury.',
    aboutTitle: 'Mniej teorii. Więcej budowania.',
    aboutText:
      'Falcon MakerLab łączy programowanie, elektronikę, druk 3D i ogród. To miejsce na projekty, dokumentację i wnioski z budowania — od pierwszego pomysłu do kolejnej iteracji.',
    aboutMore: 'Poznaj pracownię',
    contactTitle: 'Porozmawiajmy o budowaniu.',
    contactText:
      'Kod i kolejne materiały znajdziesz w organizacji FalconMakerLab na GitHubie. To również miejsce na dyskusje przy projektach.',
    contactCta: 'Odwiedź GitHub',
    footer: 'Z ciekawości. Dla prawdziwego świata.',
    back: 'Wróć do projektów',
    concept: 'Ilustracja koncepcyjna / nie jest zdjęciem urządzenia',
    draft: 'Dokumentacja w przygotowaniu',
    filter: 'Filtruj projekty',
    empty: 'Brak projektów w tej kategorii.',
    notFound: 'Nie znaleziono strony',
    notFoundText: 'Ten adres nie prowadzi do opublikowanej treści.',
    home: 'Strona główna',
  },
  en: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
    skip: 'Skip to content',
    eyebrow: 'AN INDEPENDENT TECHNOLOGY WORKSHOP',
    headline: 'From an idea.',
    headlineEnd: 'To a real thing.',
    intro:
      'Software, electronics and physical projects. Driven by curiosity. Made for the real world.',
    explore: 'Explore projects',
    featured: 'Featured project',
    read: 'Explore project',
    all: 'All projects',
    selected: 'From the workbench',
    projectIntro: 'Ideas that go beyond the screen.',
    pillars: 'Three fields. One curiosity.',
    code: 'Software, automation and embedded systems. Code that does something useful.',
    make: 'Electronics, 3D printing and prototyping. From a first sketch to a physical thing.',
    grow: 'Gardens, greenhouses and irrigation. Technology closer to nature.',
    aboutTitle: 'Less theory. More building.',
    aboutText:
      'Falcon MakerLab brings together software, electronics, 3D printing and gardening. A place for projects, documentation and lessons from building — from the first idea to the next iteration.',
    aboutMore: 'Meet the workshop',
    contactTitle: 'Let’s talk about building.',
    contactText:
      'Find the code and upcoming materials in the FalconMakerLab GitHub organization. Join project discussions there, too.',
    contactCta: 'Visit GitHub',
    footer: 'Driven by curiosity. Made for the real world.',
    back: 'Back to projects',
    concept: 'Concept illustration / not a device photograph',
    draft: 'Documentation in progress',
    filter: 'Filter projects',
    empty: 'No projects in this category.',
    notFound: 'Page not found',
    notFoundText: 'There is no published content at this address.',
    home: 'Home',
  },
};
