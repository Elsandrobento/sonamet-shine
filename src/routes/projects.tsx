import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, HoverCard } from "@/components/Reveal";
import { Building2, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import projectsHero from "@/assets/projects-hero.jpg";
import categoryShallowWater from "@/assets/category-shallow-water-new.jpg";
import categorySpsSurf from "@/assets/category-sps-surf-new.jpg";
import categoryOthers from "@/assets/category-others-new.png";
import projectSlgc from "@/assets/project-slgc-new.jpg";
import projectSouthNemba from "@/assets/project-south-nemba-new.png";
import projectAgogo from "@/assets/project-agogo.jpg";
import projectMafumeira from "@/assets/project-mafumeira-new.jpg";
import quay2 from "@/assets/quay-2.jpg";
import team from "@/assets/team.jpg";
import yardAerial from "@/assets/yard-aerial.jpg";
import welder from "@/assets/welder.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos & Histórico — Sonamet Industrial S.A." },
      { name: "description", content: "Três décadas de excelência em projetos offshore em Angola. Categorias: Águas Rasas, SPS & SURF, e Outros Projetos." },
      { property: "og:title", content: "Projetos & Histórico — Sonamet Industrial S.A." },
      { property: "og:image", content: projectsHero },
    ],
  }),
  component: Projects,
});

export function Projects() {
  const { t } = useLanguage();
  // selectedCategory: null = main 3 category cards view; or "SHALLOW WATER" | "SPS & SURF" | "OTHERS"
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 10 Track record stats from client specifications
  const trackRecordStats = [
    { value: "36,000 mT", label: t("Estruturas de Águas Rasas", "Shallow Water Structures") },
    { value: "277", label: t("Jumpers & Spools (desde 2000)", "Jumpers & Spools (since 2000)") },
    { value: "384", label: t("Estacas de Sucção & Fundações", "Suction Anchors & Foundations") },
    { value: "178", label: t("FLETs / PLETs / PLEMs (desde 2004)", "FLETs / PLETs / PLEMs (since 2004)") },
    { value: "105", label: t("Manifolds Entregues (subsea)", "Manifolds Delivered (subsea)") },
    { value: "18", label: t("Jackets & Flares (desde 1998)", "Jackets & Flares (since 1998)") },
    { value: "1", label: t("Stinger Desmantelado", "Stinger Dismantled") },
    { value: "18", label: t("Decks & Módulos FPSO", "Decks & FPSO modules") },
    { value: "5", label: t("Boias FPSO Desmanteladas", "FPSO Buoys Dismantled") },
    { value: "7", label: t("Boias FPSO Entregues", "FPSO Buoys Delivered") },
  ];

  // 3 Category Cover Cards matching user attachment
  const mainCategories = [
    {
      id: "SHALLOW WATER",
      title: "SHALLOW WATER",
      subtitle: t("Plataformas, Jackets & Módulos", "Platforms, Jackets & Modules"),
      desc: t(
        "Fabricação pesada de estruturas para águas rasas, jackets, pontes e flares no Bloco 0 e costa angolana.",
        "Heavy fabrication of shallow water structures, jackets, bridges and flares on Block 0 and Angolan coast."
      ),
      count: "3 " + t("Projetos Principais", "Major Projects"),
      image: categoryShallowWater,
    },
    {
      id: "SPS & SURF",
      title: "SPS & SURF",
      subtitle: t("Manifolds, Fundações & Flowlines Rígidas", "Manifolds, Foundations & Rigid Flowlines"),
      desc: t(
        "Projetos subsea de alta complexidade incluindo manifolds de produção, estacas de sucção e linhas pipe-in-pipe.",
        "Subsea projects including production manifolds, suction piles and pipe-in-pipe flowlines."
      ),
      count: "3 " + t("Projetos Principais", "Major Projects"),
      image: categorySpsSurf,
    },
    {
      id: "OTHERS",
      title: "OTHERS",
      subtitle: t("Tanques de Flutuabilidade, Boias & Desmantelamento", "Buoyancy Tanks, Buoys & Dismantling"),
      desc: t(
        "Fabricação de tanques de flutuabilidade, boias FPSO, amarras e desmantelamento de estruturas offshore.",
        "Fabrication of buoyancy tanks, FPSO buoys, mooring chains and offshore decommissioning."
      ),
      count: "2 " + t("Projetos Principais", "Major Projects"),
      image: categoryOthers,
    },
  ];

  // Detailed project list categorized
  const projectList = [
    // SHALLOW WATER PROJECTS (Ordered from newest to oldest)
    {
      id: "slgc-project",
      title: "SLGC Project (2021–2022)",
      client: "Chevron / CABGOC",
      category: "SHALLOW WATER",
      scope: t("Fabricação EPC", "EPC Fabrication"),
      bulletPoints: [
        t("Fabricação de 6.904 mT de Aço para a Subsea 7", "6,904 mT of Steel Fabrication for Subsea 7"),
        t("1.º Compressor Booster fabricado em África", "1st Booster Compressor Fabricated in Africa"),
        t("1off 1850mT Jacket com Ponte e 1off Flare", "1off 1850mT Jacket with Bridge and 1off Flare"),
      ],
      image: projectSlgc,
    },
    {
      id: "south-nemba",
      title: "South Nemba Jacket (2015)",
      client: "Chevron / CABGOC",
      category: "SHALLOW WATER",
      scope: t("EPC / Fabricação", "EPC / Fabrication"),
      bulletPoints: [
        t("9.000 mT de Aço entregues em 17 meses", "9,000 mT of Steel delivered in 17 months"),
        t("Entrega EPC em contrato único no desenvolvimento do Bloco 0", "Single-contract EPC delivery on landmark Block 0 development"),
        t("Fabricação de Jacket e Estacas com 8.029 mT", "Fabrication Jacket and Piles with 8,029 mT"),
      ],
      image: projectSouthNemba,
    },
    {
      id: "mafumeira-sul",
      title: "Mafumeira Sul (2011–2012)",
      client: "Chevron / CABGOC",
      category: "SHALLOW WATER",
      scope: t("Subsea 7 EPCI", "Subsea 7 EPCI"),
      bulletPoints: [
        t("Fabricação de Jacket e Estacas com 8.029 mT, excelente capacidade de elevação e experiência em operações complexas", "Fabrication Jacket and Piles with 8,029 mT Excellent lifting capacity and experience with complex operations"),
        t("EPC liderado pela Sonamet com a Acergy para aprovisionamento e âmbito de Engenharia da DSME", "Sonamet led EPC with Acergy for procurement and Engineering Scope DSME"),
        t("1.300.000 Homens-horas de segurança", "1.300.000 Safety man-hours"),
      ],
      image: projectMafumeira,
    },

    // SPS & SURF PROJECTS
    {
      id: "agogo-project",
      title: "Agogo Project (2023–2024)",
      client: "Azule Energy (BP + Eni)",
      category: "SPS & SURF",
      scope: t("Âmbito SPS & Subsea", "SPS & Subsea Scope"),
      bulletPoints: [
        t("48 Estacas e 25 Manifolds fabricados e entregues aos clientes (TFMC, Yinson e BHGE) em 24 meses", "48 off Piles and 25 off Manifolds fabricated and delivered safely to the clients (TFMC, Yinson and BHGE) within 24 Months"),
        t("2.898.000 homens-horas de segurança dedicadas ao projeto", "2,898,000 safety man hours spent on the project"),
        t("Maior âmbito SPS alguma vez fabricado na Sonamet", "First largest SPS scope ever fabricated at Sonamet"),
      ],
      image: projectAgogo,
    },
    {
      id: "clov-project",
      title: "CLOV Project (2012–2013)",
      client: "Subsea 7 / TotalEnergies",
      category: "SPS & SURF",
      scope: t("SURF & Pipe-in-Pipe", "SURF & Pipe-in-Pipe"),
      bulletPoints: [
        t("130 km de linhas de fluxo (4.000 juntas duplas e 3.300 tubos pipe-in-pipe)", "130 km of flow lines made of 4,000 double joints and 3,300 pipe in pipe"),
        t("Maior projeto SURF já executado na Sonamet", "CLOV project is the largest SURF project ever executed in Sonamet"),
      ],
      image: quay2,
    },
    {
      id: "kaombo-sps",
      title: "Kaombo SPS (2018)",
      client: "TotalEnergies",
      category: "SPS & SURF",
      scope: t("Fabricação SPS", "SPS Fabrication"),
      bulletPoints: [
        t("9 Manifolds de produção entregues em 18 meses", "9 production manifolds delivered in 18 months"),
        t("2,5M homens-horas de segurança sem incidentes", "2.5M safety man-hours without incidents"),
        t("Segundo maior âmbito SPS fabricado na Sonamet", "Second largest SPS scope ever fabricated at Sonamet"),
      ],
      image: team,
    },

    // OTHERS
    {
      id: "buoyancy-fpsos",
      title: "Buoyancy Tanks & FPSO Buoys",
      client: "TotalEnergies, ExxonMobil & Chevron",
      category: "OTHERS",
      scope: t("Componentes Offshore", "Offshore Components"),
      bulletPoints: [
        t("17 Tanques de Flutuabilidade fabricados (ExxonMobil, BP e TotalEnergies)", "17 Buoyancy Tanks fabricated for ExxonMobil, BP and TotalEnergies"),
        t("Boias FPSO fabricadas para TotalEnergies e ExxonMobil", "FPSO Buoys fabricated for TotalEnergies and ExxonMobil"),
        t("Manuseamento e montagem S-Lay de correntes de amarração de 800m", "Handling, flaking and S-Lay of 800m long FPSO chains"),
      ],
      image: yardAerial,
    },
    {
      id: "decommissioning",
      title: "Decommissioning & Dismantling",
      client: "Chevron / CABGOC & Operadoras Internacionais",
      category: "OTHERS",
      scope: t("Desmantelamento & Decom", "Dismantling & Decom"),
      bulletPoints: [
        t("5 Boias FPSO Desmanteladas", "5 FPSO Buoys Dismantled"),
        t("1 Stinger Desmantelado", "1 Stinger Dismantled"),
        t("Capacidade dedicada para atividades de desativação offshore", "Dedicated capability to support decommissioning-related activities safely"),
      ],
      image: welder,
    },
  ];

  // Major clients roster
  const clientMajors = [
    { name: "TotalEnergies", projects: "Girassol · Pazflor · CLOV · Kaombo" },
    { name: "Chevron / CABGOC", projects: "Mafumeira · CRX · Lianzi · MaFuSul · Block 0" },
    { name: "ExxonMobil", projects: "Kizomba · Gas Gathering · Block 15" },
    { name: "Azule Energy (BP+Eni)", projects: "Greater Plutonio · GES · Block 18 · Agogo" },
    { name: "Sonangol P&P", projects: t("Operações conjuntas e parcerias no Bloco 0", "Joint operations and Block 0 partnerships") },
    { name: "TechnipFMC", projects: t("Estruturas subsea · Bloco 15/06 · Agogo · CLOV", "Subsea structures · Block 15/06 · Agogo · CLOV") },
    { name: "Subsea 7", projects: t("Parceiro EPCI · múltiplas campanhas SURF", "EPCI partner · multiple SURF campaigns") },
    { name: "SLB OneSubsea · Baker Hughes · DSME", projects: t("Parceiros internacionais de EPC / subsea", "International EPC / subsea partners") },
  ];

  // Filtered project list for current selected category
  const filteredProjects = selectedCategory
    ? projectList.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={projectsHero}
            alt="Sonamet Offshore Projects Yard"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />

        <div className="container-x relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("PROJETOS & HISTÓRICO", "PROJECTS & TRACK RECORD")}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
                {t(
                  "Construído no Lobito Entregue à Indústria Petrolífera",
                  "Built in Lobito Delivered to the Oil & Gas Industry"
                )}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl">
                {t(
                  "Desde 1998, a Sonamet entregou projetos complexos de fabricação offshore, jackets de águas rasas, manifolds SPS, linhas SURF e campanhas de desmantelamento para as maiores operadoras energéticas globais.",
                  "Since 1998, Sonamet has delivered complex offshore fabrication, shallow water jackets, SPS manifolds, SURF flowlines, and major decommissioning campaigns for the world's leading energy companies."
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. NUMBERS THAT DEMONSTRATE CAPABILITY */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("HISTÓRICO", "TRACK RECORD")}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-tight">
                {t("Números que demonstram capacidade", "Numbers that demonstrate capability")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto items-stretch">
            {trackRecordStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full rounded-2xl bg-card border border-border p-5 text-center hover:border-gold transition-all shadow-sm flex flex-col justify-between flex-1">
                    <div>
                      <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-2">{s.value}</div>
                      <div className="text-xs font-medium text-muted-foreground leading-snug">{s.label}</div>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY SELECTION & PROJECTS VIEW */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="container-x">
          {/* VIEW A: MAIN 3 CATEGORIES CARDS (Default View) */}
          {selectedCategory === null ? (
            <div>
              <Reveal>
                <div className="max-w-4xl mx-auto text-center mb-14">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                    {t("EXPERIÊNCIA EM PROJETOS", "PROJECT EXPERIENCE")}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-tight">
                    {t("PRINCIPAIS PROJETOS", "MAIN PROJECTS")}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mt-4">
                    {t(
                      "Selecione uma categoria para visualizar todos os projetos executados.",
                      "Select a category below to explore all executed projects."
                    )}
                  </p>
                </div>
              </Reveal>

              {/* 3 Large Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                {mainCategories.map((cat, i) => (
                  <Reveal key={cat.id} delay={i * 0.1} className="h-full flex flex-col">
                    <HoverCard className="h-full flex flex-col flex-1">
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className="h-full bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-gold hover:shadow-2xl transition-all flex flex-col justify-between flex-1 group text-left w-full cursor-pointer"
                      >
                        {/* Cover Image */}
                        <div className="relative h-64 w-full overflow-hidden bg-navy-deep">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />
                          <div className="absolute bottom-4 right-4">
                            <span className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-gold group-hover:text-navy-deep transition-all">
                              <ChevronRight size={20} />
                            </span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-7 flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-2 group-hover:text-gold transition-colors">
                              {cat.title}
                            </h3>
                            <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                              {cat.subtitle}
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                              {cat.desc}
                            </p>
                          </div>

                          <div className="pt-6 mt-6 border-t border-border flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold group-hover:translate-x-1 transition-transform">
                            <span>{t("Ver Projetos", "View Projects")}</span>
                            <ArrowRight size={15} />
                          </div>
                        </div>
                      </button>
                    </HoverCard>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : (
            /* VIEW B: INDIVIDUAL CATEGORY DETAILS VIEW */
            <div>
              {/* Top Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 border-b border-border pb-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-gold hover:text-navy-deep transition-all cursor-pointer shadow-sm"
                >
                  <ArrowLeft size={16} />
                  {t("Voltar às Categorias", "Back to Categories")}
                </button>

                {/* Category Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  {mainCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-gold text-navy-deep shadow-gold font-bold"
                          : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Header for Selected Category */}
              <div className="mb-10 text-center max-w-3xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">
                  {t("CATEGORIA SELECIONADA", "SELECTED CATEGORY")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight mb-3">
                  {selectedCategory}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  {mainCategories.find((c) => c.id === selectedCategory)?.desc}
                </p>
              </div>

              {/* Projects Grid of Selected Category */}
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((p) => (
                    <motion.article
                      key={p.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      <HoverCard className="h-full flex flex-col flex-1">
                        <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-gold hover:shadow-elegant transition-all flex flex-col justify-between flex-1 group">
                          {/* Image header */}
                          <div className="relative h-56 w-full overflow-hidden bg-navy-deep">
                            <img
                              src={p.image}
                              alt={p.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                            <div className="absolute top-4 left-4 bg-navy-deep/85 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-gold/30">
                              {p.category}
                            </div>
                          </div>

                          {/* Content body */}
                          <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                              <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                                {p.client}
                              </div>
                              <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-tight">
                                {p.title}
                              </h3>

                              {/* Bullet points list */}
                              <ul className="space-y-2.5">
                                {p.bulletPoints.map((bp) => (
                                  <li key={bp} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
                                    <span>{bp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </HoverCard>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* 4. OUR CLIENTS SECTION */}
      <section className="py-20 md:py-28 bg-gradient-navy text-white overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                OUR CLIENTS
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-4 tracking-tight">
                {t("Confiança das Principais Operadoras da Indústria", "Trusted by the Industry's Majors")}
              </h2>
              <p className="text-base md:text-lg text-white/85 font-medium leading-relaxed">
                {t("Desde 1998 que trabalhamos com as maiores operadoras da indústria energética.", "Since 1998 we have been working with the majors in the industry.")}
              </p>
            </div>
          </Reveal>

          {/* Client Majors Grid — Equal Height Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {clientMajors.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 text-center hover:border-gold/60 hover:bg-white/10 transition-all flex flex-col justify-between flex-1">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 shrink-0">
                        <Building2 size={22} />
                      </div>
                      <div className="font-bold text-base text-white mb-2 uppercase tracking-wide">{c.name}</div>
                      <p className="text-xs text-white/75 leading-relaxed">{c.projects}</p>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
