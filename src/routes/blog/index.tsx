import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageHero } from "@/components/Section";
import { Reveal, HoverCard } from "@/components/Reveal";
import { Camera, ArrowRight, Calendar, Sparkles, Search, ImageIcon } from "lucide-react";
import { getBlogEvents, getEventTitle } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import yardHero from "@/assets/yard-hero.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Eventos — Sonamet Industrial S.A." },
      {
        name: "description",
        content:
          "Arquivo visual e comunicação corporativa da SONAMET: acompanhe as principais atividades, marcos comemorativos, eventos corporativos e acontecimentos relevantes.",
      },
      { property: "og:title", content: "Blog & Eventos — Sonamet Industrial S.A." },
      { property: "og:image", content: yardHero },
    ],
  }),
  component: BlogIndex,
});

export function BlogIndex() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const events = useMemo(() => getBlogEvents(), []);

  // Filter events based on search query in both languages
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;
    const q = searchQuery.toLowerCase();
    return events.filter((event) => {
      const titlePt = (event.titlePt || event.title).toLowerCase();
      const titleEn = (event.titleEn || event.title).toLowerCase();
      const rawTitle = event.title.toLowerCase();
      return titlePt.includes(q) || titleEn.includes(q) || rawTitle.includes(q);
    });
  }, [events, searchQuery]);

  const totalPhotos = useMemo(() => {
    return events.reduce((acc, curr) => acc + curr.photoCount, 0);
  }, [events]);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow={t("Arquivo Institucional & Atualidades", "Corporate Archive & News")}
        title={t("Blog & Eventos", "Blog & Events")}
        description={t(
          "Espaço de comunicação e memória visual da SONAMET. Acompanhe os nossos marcos, visitas institucionais, celebrações de equipa e iniciativas de segurança na Baía do Lobito.",
          "SONAMET's corporate communication and visual memory hub. Follow our milestones, official visits, team celebrations and safety initiatives at Lobito Yard."
        )}
        image={yardHero}
      />

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          {/* Header & Stats Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
                <Sparkles size={14} />
                {t("Galeria de Momentos", "Moments Gallery")}
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                {t("Eventos & Publicações Recentes", "Recent Events & Publications")}
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                {t(
                  `${events.length} eventos registados · ${totalPhotos} fotografias documentadas`,
                  `${events.length} recorded events · ${totalPhotos} documented photos`
                )}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                placeholder={t("Pesquisar eventos...", "Search events...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full bg-card border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
              {filteredEvents.map((event, idx) => {
                const displayTitle = getEventTitle(event, language);

                return (
                  <Reveal key={event.slug} delay={idx * 0.1} className="h-full">
                    <HoverCard className="h-full flex flex-col">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: event.slug }}
                        className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 hover:border-gold/50"
                      >
                        {/* Image Container with Cover Photo and Overlay Badge */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep/10">
                          {event.coverImage ? (
                            <img
                              src={event.coverImage}
                              alt={displayTitle}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted">
                              <ImageIcon size={32} />
                            </div>
                          )}

                          {/* Subtle Dark Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                          {/* Photo Count Badge */}
                          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                            <Camera size={13} className="text-gold" />
                            <span>
                              {event.photoCount}{" "}
                              {event.photoCount === 1
                                ? t("foto", "photo")
                                : t("fotos", "photos")}
                            </span>
                          </div>

                          {/* Event Tag */}
                          <div className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold text-navy-deep shadow-sm">
                            {t("Evento", "Event")}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6 flex flex-col justify-between bg-card">
                          <div>
                            <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <Calendar size={13} />
                              <span>SONAMET</span>
                            </div>

                            <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                              {displayTitle}
                            </h3>
                          </div>

                          {/* Card CTA */}
                          <div className="pt-6 mt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform">
                            <span>{t("Ver galeria", "View gallery")}</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </HoverCard>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-2xl border border-border my-12">
              <ImageIcon size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-foreground">
                {t("Nenhum evento encontrado", "No events found")}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {t(
                  `Não encontrámos resultados para "${searchQuery}". Tente outro termo de pesquisa.`,
                  `No results found for "${searchQuery}". Try a different search term.`
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-20 bg-[#091b2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            {t("Excelência & Compromisso", "Excellence & Commitment")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-balance">
            {t(
              "Construindo o Futuro da Indústria Energética de Angola",
              "Building the Future of Angola's Energy Industry"
            )}
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            {t(
              "Conheça mais sobre a nossa infraestrutura industrial de ponta no Lobito e o nosso histórico comprovado em projetos de alta complexidade.",
              "Learn more about our state-of-the-art industrial infrastructure in Lobito and our proven track record in complex offshore projects."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/yard"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
            >
              <span>{t("Conhecer o Yard", "Explore the Yard")}</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>{t("Ver Projetos & Histórico", "View Projects & Track Record")}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
