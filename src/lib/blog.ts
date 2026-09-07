export interface BlogPhoto {
  url: string;
  filename: string;
  alt: string;
  index: number;
}

export interface BlogEvent {
  title: string;
  titlePt: string;
  titleEn: string;
  slug: string;
  coverImage: string;
  photos: BlogPhoto[];
  photoCount: number;
}

/**
 * Mapping of known folder names to curated PT and EN titles.
 */
const EVENT_TRANSLATIONS: Record<string, { pt: string; en: string }> = {
  "First cut cerimony of Kaminho project": {
    pt: "Cerimónia do Primeiro Corte do Projeto Kaminho",
    en: "First Cut Ceremony of Kaminho Project",
  },
  "Sonamet 28th Anniversary Celebration Lunch": {
    pt: "Almoço de Celebração do 28.º Aniversário da Sonamet",
    en: "Sonamet 28th Anniversary Celebration Lunch",
  },
  "Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August": {
    pt: "Cerimónia de Entrega dos Prémios HSE da Sonamet aos Campeões de Segurança de Julho 2026",
    en: "Sonamet HSE Award Ceremony Celebrating Safety Champions of July 2026",
  },
  "Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard": {
    pt: "Visita de Sua Excelência o Governador da Província de Benguela ao Estaleiro da Sonamet",
    en: "Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard",
  },
};

/**
 * Fallback automatic dictionary for dynamic future folders.
 */
function autoTranslateTitle(rawTitle: string): { pt: string; en: string } {
  // Check exact dictionary match
  const found = EVENT_TRANSLATIONS[rawTitle];
  if (found) return found;

  // Partial match check by slug/cleaned text
  for (const [key, val] of Object.entries(EVENT_TRANSLATIONS)) {
    if (key.toLowerCase() === rawTitle.toLowerCase()) {
      return val;
    }
  }

  // Generic fallback if a new folder is added in the future
  return {
    pt: rawTitle,
    en: rawTitle,
  };
}

/**
 * Helper to get the translated event title based on current language.
 */
export function getEventTitle(event: BlogEvent, language: "pt" | "en"): string {
  if (!event) return "";
  return language === "pt" ? (event.titlePt || event.title) : (event.titleEn || event.title);
}

/**
 * Helper to convert a string into a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Automatically scan and import all images in the /Blog directory at compile/build time
const blogImageImports = import.meta.glob<string>(
  [
    "/Blog/**/*.{jpeg,jpg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
    "../../Blog/**/*.{jpeg,jpg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  ],
  { eager: true, import: "default" }
);

/**
 * Parses the imported images into a structured list of events.
 * Automatically adapts when new folders or images are added to /Blog.
 */
function loadEvents(): BlogEvent[] {
  const eventsMap = new Map<string, { title: string; photos: { url: string; filename: string }[] }>();

  // Process all matched image paths
  for (const [rawPath, moduleUrl] of Object.entries(blogImageImports)) {
    const normalizedPath = rawPath.replace(/\\/g, "/");
    
    // Extract the folder name directly inside /Blog/
    const match = normalizedPath.match(/(?:\/Blog\/|\.\.\/\.\.\/Blog\/)([^/]+)\/(.+)$/i);
    if (!match) continue;

    const folderName = match[1].trim();
    const filename = match[2].trim();

    if (!eventsMap.has(folderName)) {
      eventsMap.set(folderName, {
        title: folderName,
        photos: [],
      });
    }

    // Ensure we don't add duplicate images if matched by both glob patterns
    const eventData = eventsMap.get(folderName)!;
    const isAlreadyPresent = eventData.photos.some((p) => p.filename === filename);
    if (!isAlreadyPresent) {
      eventData.photos.push({
        url: moduleUrl,
        filename,
      });
    }
  }

  const events: BlogEvent[] = [];

  for (const [folderName, data] of eventsMap.entries()) {
    const slug = slugify(folderName);
    const translations = autoTranslateTitle(folderName);
    
    const sortedPhotos: BlogPhoto[] = data.photos.map((p, idx) => ({
      url: p.url,
      filename: p.filename,
      alt: `${translations.pt} — Foto ${idx + 1}`,
      index: idx,
    }));

    events.push({
      title: folderName,
      titlePt: translations.pt,
      titleEn: translations.en,
      slug,
      coverImage: sortedPhotos[0]?.url || "",
      photos: sortedPhotos,
      photoCount: sortedPhotos.length,
    });
  }

  return events;
}

// Cached events list
let cachedEvents: BlogEvent[] | null = null;

export function getBlogEvents(): BlogEvent[] {
  if (!cachedEvents) {
    cachedEvents = loadEvents();
  }
  return cachedEvents;
}

export function getBlogEventBySlug(slug: string): BlogEvent | undefined {
  const allEvents = getBlogEvents();
  return allEvents.find((event) => event.slug === slug || slugify(event.title) === slug);
}
