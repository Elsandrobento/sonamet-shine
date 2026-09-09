// Import all photos from Blog folder
// Event 1: Kaminho First Cut
import kaminho1 from "../../Blog/First cut cerimony of Kaminho project/WhatsApp Image 2026-09-03 at 14.54.42.jpeg";
import kaminho2 from "../../Blog/First cut cerimony of Kaminho project/WhatsApp Image 2026-09-03 at 14.54.50.jpeg";
import kaminho3 from "../../Blog/First cut cerimony of Kaminho project/WhatsApp Image 2026-09-03 at 14.54.58.jpeg";

// Event 2: 28th Anniversary
import anniv1 from "../../Blog/Sonamet 28th Anniversary Celebration Lunch/WhatsApp Image 2026-09-03 at 14.56.11.jpeg";
import anniv2 from "../../Blog/Sonamet 28th Anniversary Celebration Lunch/WhatsApp Image 2026-09-03 at 14.56.19.jpeg";
import anniv3 from "../../Blog/Sonamet 28th Anniversary Celebration Lunch/WhatsApp Image 2026-09-03 at 14.56.24.jpeg";

// Event 3: HSE Awards
import hse1 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.51 (1).jpeg";
import hse2 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.51.jpeg";
import hse3 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.52 (1).jpeg";
import hse4 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.52.jpeg";
import hse5 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.53 (1).jpeg";
import hse6 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.04.53.jpeg";
import hse7 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.31 (1).jpeg";
import hse8 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.31.jpeg";
import hse9 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.34 (1).jpeg";
import hse10 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.34 (2).jpeg";
import hse11 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.34 (3).jpeg";
import hse12 from "../../Blog/Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August/WhatsApp Image 2026-09-03 at 12.07.34.jpeg";

// Event 4: Governor Visit
import gov1 from "../../Blog/Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard/WhatsApp Image 2026-09-03 at 18.34.40 (1).jpeg";
import gov2 from "../../Blog/Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard/WhatsApp Image 2026-09-03 at 18.34.40 (2).jpeg";
import gov3 from "../../Blog/Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard/WhatsApp Image 2026-09-03 at 18.34.40 (3).jpeg";
import gov4 from "../../Blog/Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard/WhatsApp Image 2026-09-03 at 18.34.40.jpeg";
import gov5 from "../../Blog/Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard/WhatsApp Image 2026-09-03 at 18.34.41.jpeg";

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
  date?: string;
  location?: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getEventTitle(event: BlogEvent, language: "pt" | "en"): string {
  if (!event) return "";
  return language === "pt" ? (event.titlePt || event.title) : (event.titleEn || event.title);
}

const STATIC_EVENTS: BlogEvent[] = [
  {
    title: "Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard",
    titlePt: "Visita de Sua Excelência o Governador da Província de Benguela ao Estaleiro da Sonamet",
    titleEn: "Visit of His Excellency, the Governor of Benguela Province, to the Sonamet Fabrication Yard",
    slug: "visita-governador-provincia-benguela-estaleiro-sonamet",
    coverImage: gov1,
    date: "Setembro 2026",
    location: "Estaleiro do Lobito",
    photos: [
      { url: gov1, filename: "gov-1.jpeg", alt: "Visita do Governador — Foto 1", index: 0 },
      { url: gov2, filename: "gov-2.jpeg", alt: "Visita do Governador — Foto 2", index: 1 },
      { url: gov3, filename: "gov-3.jpeg", alt: "Visita do Governador — Foto 3", index: 2 },
      { url: gov4, filename: "gov-4.jpeg", alt: "Visita do Governador — Foto 4", index: 3 },
      { url: gov5, filename: "gov-5.jpeg", alt: "Visita do Governador — Foto 5", index: 4 },
    ],
    photoCount: 5,
  },
  {
    title: "First cut cerimony of Kaminho project",
    titlePt: "Cerimónia do Primeiro Corte do Projeto Kaminho",
    titleEn: "First Cut Ceremony of Kaminho Project",
    slug: "primeiro-corte-projeto-kaminho",
    coverImage: kaminho1,
    date: "Setembro 2026",
    location: "Oficinas de Estruturas, Lobito",
    photos: [
      { url: kaminho1, filename: "kaminho-1.jpeg", alt: "Primeiro Corte Kaminho — Foto 1", index: 0 },
      { url: kaminho2, filename: "kaminho-2.jpeg", alt: "Primeiro Corte Kaminho — Foto 2", index: 1 },
      { url: kaminho3, filename: "kaminho-3.jpeg", alt: "Primeiro Corte Kaminho — Foto 3", index: 2 },
    ],
    photoCount: 3,
  },
  {
    title: "Sonamet HSE Award cerimony to celebrate the Safety champions of July 2026 held on 28th August",
    titlePt: "Cerimónia de Entrega dos Prémios HSE aos Campeões de Segurança",
    titleEn: "Sonamet HSE Award Ceremony Celebrating Safety Champions",
    slug: "cerimonia-premios-hse-campeoes-seguranca",
    coverImage: hse1,
    date: "28 de Agosto de 2026",
    location: "Estaleiro da Sonamet, Lobito",
    photos: [
      { url: hse1, filename: "hse-1.jpeg", alt: "Prémios HSE — Foto 1", index: 0 },
      { url: hse2, filename: "hse-2.jpeg", alt: "Prémios HSE — Foto 2", index: 1 },
      { url: hse3, filename: "hse-3.jpeg", alt: "Prémios HSE — Foto 3", index: 2 },
      { url: hse4, filename: "hse-4.jpeg", alt: "Prémios HSE — Foto 4", index: 3 },
      { url: hse5, filename: "hse-5.jpeg", alt: "Prémios HSE — Foto 5", index: 4 },
      { url: hse6, filename: "hse-6.jpeg", alt: "Prémios HSE — Foto 6", index: 5 },
      { url: hse7, filename: "hse-7.jpeg", alt: "Prémios HSE — Foto 7", index: 6 },
      { url: hse8, filename: "hse-8.jpeg", alt: "Prémios HSE — Foto 8", index: 7 },
      { url: hse9, filename: "hse-9.jpeg", alt: "Prémios HSE — Foto 9", index: 8 },
      { url: hse10, filename: "hse-10.jpeg", alt: "Prémios HSE — Foto 10", index: 9 },
      { url: hse11, filename: "hse-11.jpeg", alt: "Prémios HSE — Foto 11", index: 10 },
      { url: hse12, filename: "hse-12.jpeg", alt: "Prémios HSE — Foto 12", index: 11 },
    ],
    photoCount: 12,
  },
  {
    title: "Sonamet 28th Anniversary Celebration Lunch",
    titlePt: "Almoço de Celebração do 28.º Aniversário da Sonamet",
    titleEn: "Sonamet 28th Anniversary Celebration Lunch",
    slug: "almoco-celebracao-28-aniversario-sonamet",
    coverImage: anniv1,
    date: "Setembro 2026",
    location: "Complexo Sonamet, Lobito",
    photos: [
      { url: anniv1, filename: "anniv-1.jpeg", alt: "28.º Aniversário — Foto 1", index: 0 },
      { url: anniv2, filename: "anniv-2.jpeg", alt: "28.º Aniversário — Foto 2", index: 1 },
      { url: anniv3, filename: "anniv-3.jpeg", alt: "28.º Aniversário — Foto 3", index: 2 },
    ],
    photoCount: 3,
  },
];

export function getBlogEvents(): BlogEvent[] {
  return STATIC_EVENTS;
}

export function getBlogEventBySlug(slug: string): BlogEvent | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase();
  return STATIC_EVENTS.find(
    (event) =>
      event.slug === clean ||
      slugify(event.title) === clean ||
      slugify(event.titlePt) === clean ||
      slugify(event.titleEn) === clean
  );
}
