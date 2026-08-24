import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/Section";
import { ChevronRight } from "lucide-react";
import heroProjects from "@/assets/foto-projects.jpg";
import mafumeiraImg from "@/assets/project-mafumeira.avif";
import slgcImg from "@/assets/project-slgc.jpg";
import nembaImg from "@/assets/project-nemba-loadout.jpg";
import clovImg from "@/assets/project-clov.avif";
import kaomboImg from "@/assets/project-kaombo.avif";
import agogoImg from "@/assets/project-agogo.jpg";
import suctionPilesImg from "@/assets/project-suction-piles-agogo.jpg";
import buoysDismantledImg from "@/assets/project-buoys-dismantled.png";
import buoyancyTanksImg from "@/assets/project-buoyancy-tanks.avif";
import fpsoBuoyImg from "@/assets/project-fpso-buoy.avif";
import chainsImg from "@/assets/project-chains.avif";
import { Reveal } from "@/components/Reveal";
import { ClientLogoCloud } from "@/components/LogoCloud";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos & Portfólio — Sonamet Industrial S.A. | Lobito, Angola" },
      { name: "description", content: "Portfólio oficial de projetos da Sonamet: Shallow Water (South Nemba, Mafumeira Sul, SLGC), SPS & SURF (Agogo, Kaombo, CLOV), e Desmantelamento offshore para os líderes mundiais de energia." },
      { property: "og:title", content: "Projetos — Sonamet Industrial S.A." },
      { property: "og:image", content: heroProjects },
    ],
  }),
  component: Projects,
});

function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const trackRecordStats = [
    { count: "36.000 MT+", label: lang === "pt" ? "ESTRUTURAS ÁGUAS RASAS" : "SHALLOW WATER STRUCTURES" },
    { count: "105", label: lang === "pt" ? "MANIFOLDS ENTREGUES" : "MANIFOLDS DELIVERED" },
    { count: "384+", label: lang === "pt" ? "ESTACAS DE SUCÇÃO" : "SUCTION ANCHORS & PILES" },
    { count: "277+", label: lang === "pt" ? "JUMPERS & SPOOLS" : "JUMPERS & SPOOLS" },
    { count: "178+", label: lang === "pt" ? "FLET / PLET / PLEM" : "FLET / PLET / PLEM" },
    { count: "18", label: lang === "pt" ? "JACKETS & TOCHAS" : "JACKETS & FLARES" },
    { count: "18", label: lang === "pt" ? "DECKS & MÓDULOS FPSO" : "DECKS & FPSO MODULES" },
    { count: "7", label: lang === "pt" ? "BÓIAS DE AMARRAÇÃO FPSO" : "FPSO MOORING BUOYS" },
    { count: "5", label: lang === "pt" ? "BÓIAS FPSO DESMANTELADAS" : "FPSO BUOYS DISMANTLED" },
    { count: "1", label: lang === "pt" ? "STINGER DESMANTELADO" : "STINGER DISMANTLED" },
  ];

  const projectsData = [
    // SHALLOW WATER
    {
      id: "slgc",
      title: "SLGC PROJECT (JACKET, BRIDGE & FLARE)",
      client: "Chevron / CABGOC",
      categoryKey: "SHALLOW",
      category: lang === "pt" ? "ÁGUAS RASAS" : "SHALLOW WATER",
      year: "2021–2022",
      image: slgcImg,
      scope: lang === "pt"
        ? "Fabricação de 1off Jacket de 1.850 mT com Ponte de Interligação (Bridge) e 1off Tocha (Flare)."
        : "Fabrication of 1-off 1,850 mT Jacket with Interconnecting Bridge and 1-off Flare structure.",
      stats: ["1.850 MT JACKET", "BRIDGE & FLARE", "BLOCK 0"],
      details: lang === "pt"
        ? "Entrega com sucesso e segurança para a Chevron/CABGOC no Bloco 0, comprovando a experiência contínua da Sonamet na engenharia e fabricação de estruturas de águas rasas."
        : "Safe delivery for Chevron/CABGOC in Block 0, demonstrating Sonamet's sustained capability in shallow water engineering and fabrication."
    },
    {
      id: "south-nemba",
      title: "SOUTH NEMBA JACKET & PILES",
      client: "Chevron / CABGOC",
      categoryKey: "SHALLOW",
      category: lang === "pt" ? "ÁGUAS RASAS" : "SHALLOW WATER",
      year: "2015",
      image: nembaImg,
      scope: lang === "pt"
        ? "Contrato único EPC no Bloco 0. Fabricação de Jacket e Estacas com 8.029 mT (9.000 mT de aço total entregues em 17 meses)."
        : "Single-contract EPC delivery on Block 0. Fabrication of Jacket and Piles with 8,029 mT (9,000 mT total steel in 17 months).",
      stats: ["9.000 MT STEEL", "1.300.000 MAN-HOURS", "17 MONTHS"],
      details: lang === "pt"
        ? "A Sonamet liderou o consórcio EPC com a Acergy para compras e escopo de engenharia da DSME. Excelente capacidade de elevação com 1,3 milhões de horas-homem de segurança."
        : "Sonamet led the EPC consortium with Acergy for procurement and DSME for engineering. 1,300,000 safety man-hours achieved without incident."
    },
    {
      id: "mafumeira-sul",
      title: "MAFUMEIRA SUL PPP JACKET & COMPRESSOR",
      client: "Chevron / CABGOC",
      categoryKey: "SHALLOW",
      category: lang === "pt" ? "ÁGUAS RASAS" : "SHALLOW WATER",
      year: "2011–2014",
      image: mafumeiraImg,
      scope: lang === "pt"
        ? "6.904 mT de fabricação de aço para a Subsea 7 e Chevron. 1.º Booster Compressor Fabricado em África."
        : "6,904 mT of steel fabrication for Subsea 7 and Chevron. 1st Booster Compressor ever fabricated in Africa.",
      stats: ["6.904 MT STEEL", "1ST BOOSTER COMPRESSOR", "AFRICAN BENCHMARK"],
      details: lang === "pt"
        ? "Marco tecnológico pioneiro para a indústria angolana e africana, demonstrando capacidade de montagem e integração de equipamentos mecânicos de alta complexidade."
        : "Pioneering milestone for the African energy industry, demonstrating advanced integration of complex mechanical compressor packages."
    },

    // SPS & SURF
    {
      id: "agogo",
      title: "AGOGO PROJECT (MANIFOLDS & PILES)",
      client: "Azule Energy / TFMC / Yinson / BHGE",
      categoryKey: "SPS",
      category: "SPS & SURF",
      year: "2023–2024",
      image: agogoImg,
      scope: lang === "pt"
        ? "48 off Estacas (Piles) e 25 off Manifolds fabricados e entregues com total segurança em 24 meses."
        : "48-off Piles and 25-off Manifolds fabricated and delivered safely within 24 months.",
      stats: ["48 PILES", "25 MANIFOLDS", "2.898.000 MAN-HOURS"],
      details: lang === "pt"
        ? "Foram despendidas 2.898.000 horas-homem de segurança para entregar o maior escopo SPS alguma vez fabricado na Sonamet para a Azule Energy e parceiros."
        : "2,898,000 safety man-hours executed to safely deliver the largest SPS scope ever fabricated at Sonamet."
    },
    {
      id: "kaombo-sps",
      title: "KAOMBO SPS PROJECT",
      client: "TotalEnergies",
      categoryKey: "SPS",
      category: "SPS & SURF",
      year: "2018",
      image: kaomboImg,
      scope: lang === "pt"
        ? "9 Manifolds de produção entregues em 18 meses. Segundo maior escopo SPS na história da Sonamet."
        : "9 production manifolds delivered in 18 months. Second largest SPS scope in Sonamet history.",
      stats: ["9 MANIFOLDS", "2.5M MAN-HOURS", "12.000+ DUPLEX JOINTS"],
      details: lang === "pt"
        ? "Mais de 12.000 juntas de pequeno diâmetro em super duplex com taxa de reparação inferior a 4%, consolidando a liderança global das White Workshops."
        : "Over 12,000 small-bore super duplex joints welded with <4% repair rate in controlled White Workshops."
    },
    {
      id: "clov",
      title: "CLOV SURF & SPS",
      client: "Subsea 7 / TotalEnergies",
      categoryKey: "SPS",
      category: "SPS & SURF",
      year: "2012–2014",
      image: clovImg,
      scope: lang === "pt"
        ? "Maior projeto SURF alguma vez executado na Sonamet: 130 km de flowlines, 4.000 double joints e 3.300 unidades pipe-in-pipe."
        : "Largest SURF project ever executed at Sonamet: 130 km of flowlines, 4,000 double joints, and 3,300 pipe-in-pipe units.",
      stats: ["130 KM FLOWLINES", "4.000 DOUBLE JOINTS", "3.300 PIPE-IN-PIPE"],
      details: lang === "pt"
        ? "Campanha monumental de fabricação submarina na Spoolbase e oficinas especializadas para o desenvolvimento do Bloco 17."
        : "Monumental subsea fabrication campaign utilizing the Lobito Spoolbase and specialized welding lines for Block 17."
    },

    // DISMANTLING & OTHERS
    {
      id: "buoys-dismantling",
      title: "DESMANTELAMENTO DE 5 BÓIAS FPSO & 1 STINGER",
      client: "Chevron (CHV) & TotalEnergies",
      categoryKey: "DISMANTLE",
      category: lang === "pt" ? "DESMANTELAMENTO" : "DECOMMISSIONING",
      year: "2020+",
      image: buoysDismantledImg,
      scope: lang === "pt"
        ? "Desmantelamento e desativação (decommissioning) de 5off Bóias FPSO e 1off Stinger sob rigorosas normas de QHSE."
        : "Decommissioning and safe dismantling of 5-off FPSO Buoys and 1-off Stinger under strict international QHSE standards.",
      stats: ["5 FPSO BUOYS", "1 STINGER", "ZERO INCIDENTS"],
      details: lang === "pt"
        ? "Experiência comprovada em desmantelamento de grandes estruturas marítimas com gestão ambiental integral de resíduos."
        : "Proven track record in decommissioning large offshore structures with full environmental waste management."
    },
    {
      id: "buoyancy-tanks",
      title: "17 TANQUES DE FLUTUABILIDADE (BUOYANCY TANKS)",
      client: "ExxonMobil, BP & TotalEnergies",
      categoryKey: "DISMANTLE",
      category: lang === "pt" ? "OUTROS PROJETOS" : "OTHER PROJECTS",
      year: "Diversos",
      image: buoyancyTanksImg,
      scope: lang === "pt"
        ? "Fabricação de 17 Tanques de Flutuabilidade estanques de alta resistência para os principais operadores mundiais."
        : "Fabrication of 17 high-pressure buoyancy tanks for deepwater riser and subsea support.",
      stats: ["17 TANKS", "EXXON / BP / TOTAL", "HIGH PRESSURE"],
      details: lang === "pt"
        ? "Estruturas oceânicas estanques fabricadas com rigorosos controlos dimensionais e testes hidrostáticos."
        : "Heavy-duty watertight marine structures built with stringent dimensional control and hydrotesting."
    },
    {
      id: "fpso-buoys",
      title: "7 BÓIAS DE AMARRAÇÃO FPSO (MOORING BUOYS)",
      client: "TotalEnergies & ExxonMobil",
      categoryKey: "DISMANTLE",
      category: lang === "pt" ? "OUTROS PROJETOS" : "OTHER PROJECTS",
      year: "Diversos",
      image: fpsoBuoyImg,
      scope: lang === "pt"
        ? "Fabricação e integração completa de 7 Bóias de Amarração e Descarga para navios FPSO."
        : "Fabrication and complete integration of 7 FPSO Mooring and Offloading Buoys.",
      stats: ["7 FPSO BUOYS", "MOORING SYSTEMS", "TOTAL & EXXON"],
      details: lang === "pt"
        ? "Grandes estruturas flutuantes de ancoragem e transferência de hidrocarbonetos para navios petroleiros."
        : "Large offshore mooring and fluid transfer structures for ultra-deepwater FPSO developments."
    },
    {
      id: "fpso-chains",
      title: "MANUSEAMENTO & S-LAY DE CORRENTES FPSO (800M)",
      client: "Operadores Offshore",
      categoryKey: "DISMANTLE",
      category: lang === "pt" ? "OUTROS PROJETOS" : "OTHER PROJECTS",
      year: "Diversos",
      image: chainsImg,
      scope: lang === "pt"
        ? "Handling, flaking e S-Lay de correntes de amarração de FPSO com 800 metros de comprimento."
        : "Handling, flaking, and S-Lay of 800-meter-long heavy FPSO mooring chains.",
      stats: ["800M LENGTH", "HEAVY CHAINS", "PORT LOGISTICS"],
      details: lang === "pt"
        ? "Operações de alta complexidade logística e manuseamento seguro de correntes de aço maciço."
        : "High-complexity quayside logistics and safe handling of solid forged steel mooring lines."
    },
  ];

  const categories = [
    { key: "ALL", label: lang === "pt" ? "TODOS" : "ALL" },
    { key: "SHALLOW", label: lang === "pt" ? "ÁGUAS RASAS" : "SHALLOW WATER" },
    { key: "SPS", label: "SPS & SURF" },
    { key: "DISMANTLE", label: lang === "pt" ? "DESMANTELAMENTO & OUTROS" : "DECOMMISSIONING & OTHERS" },
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeCategory === "ALL" || p.categoryKey === activeCategory
  );

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "PORTFÓLIO & EXECUÇÃO" : "PORTFOLIO & EXECUTION"}
        title={lang === "pt" ? "TRÊS DÉCADAS DE EXCELÊNCIA OFFSHORE EM ANGOLA" : "THREE DECADES OF OFFSHORE EXCELLENCE"}
        description={lang === "pt"
          ? "Construído no Lobito, entregue aos maiores operadores de energia do mundo. Um histórico incomparável de fabricação submarina, estruturas de águas rasas e desmantelamento."
          : "Built in Lobito, delivered to global energy majors. An unmatched track record in subsea fabrication, shallow water structures, and offshore decommissioning."}
        image={heroProjects}
      />

      {/* TRACK RECORD BANNER */}
      <section className="py-16 bg-gradient-navy text-white border-b border-white/10">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">
              {lang === "pt" ? "TRACK RECORD OFICIAL" : "OFFICIAL TRACK RECORD"}
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase">
              {lang === "pt" ? "NÚMEROS QUE TESTEMUNHAM A NOSSA LIDERANÇA" : "NUMBERS THAT PROVE OUR LEADERSHIP"}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {trackRecordStats.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.03}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-gold transition-all">
                  <div className="font-display text-2xl lg:text-3xl font-bold text-gold">{item.count}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white mt-1.5">{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS FILTER & GRID */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {lang === "pt" ? "PORTFÓLIO DE PROJETOS" : "PROJECT PORTFOLIO"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-foreground">
                {lang === "pt" ? "PROJETOS EM DESTAQUE" : "FEATURED PROJECTS"}
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 bg-secondary p-1.5 rounded-full border border-border">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                    activeCategory === cat.key
                      ? "bg-navy-deep text-gold shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(p)}
                  className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:border-gold hover:shadow-elegant transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-navy-deep/90 text-gold rounded-full border border-white/10 backdrop-blur-md">
                          {p.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex justify-between items-center">
                        <span className="font-bold uppercase text-[11px]">{p.client}</span>
                        <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold">{p.year}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-extrabold uppercase text-foreground group-hover:text-navy transition-colors mb-3 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {p.scope}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {p.stats.map((st: string) => (
                          <span key={st} className="text-[10px] font-bold uppercase bg-secondary text-navy-deep px-2 py-1 rounded-md border border-border">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-border/60 flex items-center justify-between text-xs font-bold uppercase text-navy group-hover:text-gold transition-colors">
                    <span>{lang === "pt" ? "VER DETALHES DO PROJETO" : "VIEW PROJECT DETAILS"}</span>
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-navy-deep/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-video bg-navy-deep">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gold text-navy-deep rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase mt-2">{selectedProject.title}</h3>
                  <div className="text-xs text-white/80 mt-1 uppercase">{selectedProject.client} • {selectedProject.year}</div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
                    {lang === "pt" ? "ESCOPO DO TRABALHO" : "SCOPE OF WORK"}
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{selectedProject.scope}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
                    {lang === "pt" ? "DETALHES DE EXECUÇÃO" : "EXECUTION DETAILS"}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{selectedProject.details}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {lang === "pt" ? "DESTAQUES TÉCNICOS" : "TECHNICAL HIGHLIGHTS"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stats.map((st: string) => (
                      <span key={st} className="text-xs font-bold uppercase bg-secondary text-navy px-3 py-1.5 rounded-lg border border-border">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLIENTS & PARTNERS */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "CLIENTES & PARCEIROS OFICIAIS" : "OFFICIAL CLIENTS & PARTNERS"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              TRUSTED BY THE INDUSTRY'S MAJORS
            </h2>
          </div>

          <ClientLogoCloud />
        </div>
      </section>
    </>
  );
}
