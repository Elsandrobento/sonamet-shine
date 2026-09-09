import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, HoverCard } from "@/components/Reveal";
import { BlogLightbox } from "@/components/BlogLightbox";
import {
  ArrowLeft,
  Calendar,
  Camera,
  ChevronRight,
  Home,
  ImageIcon,
  Maximize2,
} from "lucide-react";
import { getBlogEventBySlug, getBlogEvents, getEventTitle } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const event = getBlogEventBySlug(params.slug);
    const title = event
      ? `${event.titlePt || event.title} — Latest News — Sonamet Industrial S.A.`
      : "Evento — Sonamet Industrial S.A.";
    const description = event
      ? `Galeria de fotografias do evento "${event.titlePt || event.title}" na Sonamet Industrial S.A. ${event.photoCount} fotografias disponíveis.`
      : "Galeria de eventos da Sonamet Industrial S.A.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(event?.coverImage ? [{ property: "og:image", content: event.coverImage }] : []),
      ],
    };
  },
  component: BlogEventDetail,
});

export function BlogEventDetail() {
  const { slug } = Route.useParams();
  const { language, t } = useLanguage();
  const event = getBlogEventBySlug(slug);
  const allEvents = getBlogEvents();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter other events for quick navigation
  const otherEvents = allEvents.filter((e) => e.slug !== slug).slice(0, 3);

  if (!event) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-background">
        <div className="container-x text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive mx-auto flex items-center justify-center mb-6">
            <ImageIcon size={32} />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("Evento Não Encontrado", "Event Not Found")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {t(
              "O evento ou publicação solicitada não existe ou foi movido.",
              "The requested event or publication does not exist or has been moved."
            )}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
          >
            <ArrowLeft size={16} />
            <span>{t("Voltar a Últimas Notícias", "Back to Latest News")}</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentTitle = getEventTitle(event, language);

  return (
    <>
      {/* Header & Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#091b2e] text-white overflow-hidden border-b border-white/10">
        {/* Background Image blur effect */}
        {event.coverImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 blur-md"
            style={{ backgroundImage: `url(${event.coverImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091b2e]/90 via-[#091b2e]/95 to-[#091b2e]" />

        <div className="container-x relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-white/70 mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Home size={14} />
              <span>{t("Início", "Home")}</span>
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <Link to="/blog" className="hover:text-gold transition-colors">
              {t("Últimas Notícias", "Latest News")}
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-gold font-medium truncate max-w-[200px] md:max-w-md">
              {currentTitle}
            </span>
          </nav>

          {/* Event Title & Metadata */}
          <div className="max-w-4xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/20 text-gold border border-gold/30 mb-4">
              <Camera size={13} />
              <span>
                {event.photoCount}{" "}
                {event.photoCount === 1
                  ? t("Fotografia", "Photo")
                  : t("Fotografias", "Photos")}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
              {currentTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/80 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-gold" />
                <span>SONAMET</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/70">
                {t(
                  "Arquivo Fotográfico Oficial da Empresa",
                  "Official Corporate Photographic Archive"
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          {/* Gallery Toolbar / Instruction */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                {t("Galeria de Fotografias", "Photo Gallery")}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {t(
                  "Clique em qualquer imagem para abrir em alta resolução e navegar em ecrã inteiro.",
                  "Click on any image to open in high resolution and browse in full screen."
                )}
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full text-xs font-semibold text-foreground bg-card hover:bg-gold hover:text-navy-deep border border-border transition-all shadow-sm"
            >
              <ArrowLeft size={14} />
              <span>{t("Todos os Eventos", "All Events")}</span>
            </Link>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {event.photos.map((photo, index) => (
              <Reveal key={photo.url} delay={index * 0.05}>
                <HoverCard>
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border/80 shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold text-left"
                    aria-label={`Ampliar fotografia ${index + 1} de ${event.photos.length}`}
                  >
                    <img
                      src={photo.url}
                      alt={`${currentTitle} — Foto ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />

                    {/* Dark Overlay with Zoom Icon on Hover */}
                    <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <div className="p-3 rounded-full bg-gold text-navy-deep shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 size={18} />
                      </div>
                      <span className="mt-2 text-xs font-semibold text-white tracking-wide">
                        {t("Ampliar", "Enlarge")}
                      </span>
                    </div>

                    {/* Photo index indicator */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/50 text-[10px] font-medium text-white/90 backdrop-blur-sm">
                      {index + 1} / {event.photos.length}
                    </div>
                  </button>
                </HoverCard>
              </Reveal>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-card hover:bg-gold hover:text-navy-deep border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all shadow-sm hover:shadow-gold"
            >
              <ArrowLeft size={16} />
              <span>{t("Voltar à lista de Notícias", "Back to Latest News list")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Events Section */}
      {otherEvents.length > 0 && (
        <section className="py-16 bg-card border-t border-border">
          <div className="container-x">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 block">
                {t("Mais Atualidades", "More News")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {t("Outros Eventos & Momentos", "Other Events & Moments")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherEvents.map((other) => {
                const otherTitle = getEventTitle(other, language);
                return (
                  <Link
                    key={other.slug}
                    to="/blog/$slug"
                    params={{ slug: other.slug }}
                    className="group flex flex-col bg-background rounded-xl overflow-hidden border border-border hover:border-gold/50 shadow-sm transition-all duration-300 hover:shadow-elegant"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep/10">
                      <img
                        src={other.coverImage}
                        alt={otherTitle}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md">
                        {other.photoCount} {t("fotos", "photos")}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h4 className="font-display text-base font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {otherTitle}
                      </h4>
                      <div className="pt-3 mt-2 border-t border-border flex items-center justify-between text-xs font-semibold text-gold">
                        <span>{t("Ver galeria", "View gallery")}</span>
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <BlogLightbox
        photos={event.photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        eventTitle={currentTitle}
      />
    </>
  );
}
