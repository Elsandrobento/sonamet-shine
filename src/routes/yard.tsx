import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, HoverCard } from "@/components/Reveal";
import { Anchor, Layers, Wrench, Cpu, Waves, Weight, Warehouse, HardHat, Cog, CheckCircle2, ArrowRight, Building2, Video, Home, Car, PackageCheck, Download, HeartPulse } from "lucide-react";
import yardHero from "@/assets/yard-hero.jpg";
import spoolbasePhoto from "@/assets/spoolbase-photo.jpg";
import medicalCenter from "@/assets/medical-center.avif";
import yardBrochurePdf from "@/assets/SONA-YARD-FAB-2026.pdf";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/yard")({
  head: () => ({
    meta: [
      { title: "Estaleiro — Sonamet Industrial S.A." },
      { name: "description", content: "As instalações da Sonamet situam-se junto ao Porto do Lobito, um dos portos mais profundos e estrategicamente posicionados da África Ocidental. Spoolbase, 12.000 m² de oficinas e capacidade completa de fabricação." },
      { property: "og:title", content: "Estaleiro — Sonamet Industrial S.A." },
      { property: "og:image", content: yardHero },
    ],
  }),
  component: Yard,
});

export function Yard() {
  const { t } = useLanguage();

  // Yard Main Areas Cards (Yard 1, Yard 2, Yard 3)
  const yardAreas = [
    {
      title: "Yard 1",
      desc: t(
        "O Yard 1 é a área histórica de fabricação e montagem da Sonamet, cobrindo aproximadamente 71.000 m². A área possui uma capacidade de carga no solo de 50 MT/m², com secções reforçadas até 83 MT/m², permitindo a fabricação e montagem de uma vasta gama de estruturas offshore.",
        "Yard 1 is Sonamet’s historical fabrication and assembly area, covering approximately 71,000 m². The area has a ground bearing capacity of 50 MT/m², with reinforced sections reaching up to 83 MT/m², allowing the fabrication and assembly of a wide range of offshore structures."
      ),
      icon: Anchor,
    },
    {
      title: "Yard 2",
      desc: t(
        "O Yard 2 é dedicado à fabricação pesada, montagem e operações de elevação. A área foi modernizada e reforçada para acomodar grandes estruturas offshore e a operação segura de equipamento pesado de elevação, incluindo gruas até 800 MT. O Yard 2 apoiou a fabricação de algumas das estruturas offshore mais pesadas já construídas em Angola e na África Ocidental.",
        "Yard 2 is dedicated to heavy fabrication, assembly and lifting operations. The area was upgraded and reinforced to accommodate major offshore structures and the safe operation of heavy lifting equipment, including cranes of up to 800 MT. Yard 2 has supported the fabrication of some of the heaviest offshore structures ever built in Angola and West Africa."
      ),
      icon: Weight,
    },
    {
      title: "Yard 3",
      desc: t(
        "O Yard 3 apoia as operações de spoolbase, fabricação, armazenamento, formação e atividades de gestão de resíduos.",
        "Yard 3 supports spoolbase operations, fabrication, storage, training and waste management activities."
      ),
      icon: Layers,
    },
  ];

  // 9 Comprehensive Yard Specifications
  const yardSpecs = [
    {
      title: t("Cais Yard 1", "Quayside Yard 1"),
      desc: t(
        "Cais de 180 m · Calado de 10 m · Load-out máximo de 5.500 mT. Capacidade dos cabeços: 30mT · Profundidade da água: LAT – 10m · Nível do cais: LAT +2,9m e Preamar máxima: LAT +2m",
        "180 m berth · 10 m draft · 5,500 mT Max load-out. Bollard Capacity: 30mT · Water Depth: LAT – 10m · Quayside Level: LAT +2,9m and Max High-Tide: LAT+2m"
      ),
      icon: Waves,
    },
    {
      title: t("Cais Yard 2", "Quayside Yard 2"),
      desc: t(
        "Cais de 143 m · Calado de 10 m · Load-out máximo de 6.000 mT · Capacidade dos cabeços: 30mT · Profundidade da água: LAT – 10m · Nível do cais: LAT +3,3m e Preamar máxima: LAT +2m",
        "143 m berth · 10 m draft · 6,000 mT Max load-out · Bollard Capacity: 30mT · Water Depth: LAT – 10m · Quayside Level: LAT +3,3m and Max High-Tide: LAT+2m"
      ),
      icon: Anchor,
    },
    {
      title: t("Oficinas Pretas", "Black Workshops"),
      desc: t(
        "2 Oficinas Pretas com área total de 2.450 m² equipadas com máquina de corte de perfis (CNC). Linhas de montagem de Âncoras de Sucção e Estacas com calandras dedicadas. Linha de montagem dedicada para pernas de Jackets e estacas. 5 máquinas de oxicorte (CNC) e 1 máquina de corte de vigas.",
        "2-off Black Workshops with an overall area of 2,450 m² with a profile cutting (CNC) machine. Suction Anchors & Piles assembly lines with dedicated rolling machines. Dedicated assembly line for Jacket legs and piles assembly. 5-off oxy-cutting (CNC) machines and 1-off beam cutting machine."
      ),
      icon: Wrench,
    },
    {
      title: t("Linhas Pipe in Pipe & Juntas Duplas", "Pipe in Pipe & Double Joints Lines"),
      desc: t(
        "2 oficinas com área total de 9.000 m², incluindo 3.000 m² cobertos. Linhas de montagem totalmente equipadas com carros de transporte e roletes para acomodar uma produção eficiente de juntas duplas (24m) e Pipe-in-Pipe até 24\" OD.",
        "2-off workshops with an overall area of 9,000 m² including 3,000 m² covered. Assembly lines fully equipped with transfer cars and rollers to accommodate an efficient production of double joints (24m long) and Pipe in pipe up to 24\" OD."
      ),
      icon: Cpu,
    },
    {
      title: t("Oficinas Brancas", "White Workshops"),
      desc: t(
        "4 oficinas: 2.000–4.700 m². Até 8 manifolds simultaneamente. Capacidade de RT em paralelo. Soldadura de Aço Inoxidável, Duplex e Super Duplex. Soldadura orbital: 3/8”–1”.",
        "4 workshops: 2,000–4,700 m². Up to 8 manifolds simultaneously. Parallel RT capability. Stainless Steel, Duplex & Super Duplex welding. Orbital welding: 3/8”–1”."
      ),
      icon: HardHat,
    },
    {
      title: t("Elevação Pesada", "Heavy Lift"),
      desc: t(
        "5 gruas de esteira 200–750 mT · 58 pontes rolantes · 11 gruas hidráulicas · 2 SPMT.",
        "5× crawler 200–750 mT · 58 overhead · 11 Hydraulic cranes - 2-OFF SPMT."
      ),
      icon: Weight,
    },
    {
      title: t("Instalações de Armazenamento", "Storage Facilities"),
      desc: t(
        "Área de armazenamento coberta de 1.700 m² com controlo de acessos. Sala climatizada de 54 m². Área dedicada a artigos de aço inoxidável. Até 15.600 m² de armazenamento descoberto.",
        "1,700 m² indoor storage area with in&out control access. Temperature controlled room of 54 m². Dedicated storage area for stainless steels items. Up to 15,600 m² uncovered storage space."
      ),
      icon: Warehouse,
    },
    {
      title: t("Áreas de Montagem Final", "Final Erection Areas"),
      desc: t(
        "2 áreas de 70.000 m² cada, dedicadas à montagem de estruturas de grandes dimensões. Acesso direto aos respetivos cais por skidding ou gruas de esteira. Capacidade de carga superior a 50 mT/m².",
        "2-off areas of 70,000 m² each dedicated to assembly of massive/wide structures. Each area has a direct access to their dedicated quay by skidding or through crawler cranes. Ground bearing capacity above 50 mT/m² everywhere."
      ),
      icon: Layers,
    },
    {
      title: t("Oficina Mecânica / Elétrica", "Mechanical / Electrical Workshop"),
      desc: t(
        "Oficina mecânica equipada com máquinas ferramenta incluindo fresadoras, tornos, etc. Oficina dedicada para os departamentos eletrónico e elétrico. Centrais elétricas próprias com geradores de 5,5 kVA.",
        "Machine shop equipped with basic machines including milling machine, lathes, etc. Dedicated workshop for electronic and electrical departments. In-house power plants with 5.5 kVA generators."
      ),
      icon: Cog,
    },
  ];

  // Spool Base Characteristics List
  const spoolbasePoints = [
    t(
      "A base tem 1.039 m de comprimento, cobrindo uma área total de 32.500 m² e estende-se desde o cais do Yard 2 até ao limite do Yard 3, junto à linha férrea, dividindo o estaleiro em duas partes.",
      "The base runs 1039 m length, covering a total area of 32,500m² and stretches from the quay of yard 2 to the edge of the yard of yard 3, next to the railway line, cutting the yard into two parts."
    ),
    t("Capacidade para construir stalks até 750m", "Capacity to build stalks up to 750m"),
    t("Uma linha de soldadura (firing line) de 130m de comprimento por 15m de largura na área de alimentação e 8m de largura no restante trajeto", "A firing line of 130m long by 15m width at the feeding area and 8m width on the rest of the firing line"),
    t("8 estações de trabalho", "8 working stations"),
    t("Capacidade para produzir todos os produtos de flowlines rígidas incluindo pipe-in-pipe e produtos revestidos a polímero.", "Capability to produce all rigid flowlines products including pipe-in-pipe and polymer lined products."),
  ];

  // Client Services Cards List
  const clientServices = [
    {
      title: t("Postos de Trabalho & Escritórios", "Work-stations & Offices"),
      desc: t("Escritórios totalmente equipados com postos de trabalho dentro do estaleiro e na sede", "Fully equipped offices with work-stations inside the yard and headquarter"),
      icon: Building2,
    },
    {
      title: t("Salas de Conferência", "Conference Facilities"),
      desc: t("Salas de reunião equipadas com sistemas de áudio e videoconferência", "Meeting rooms equipped with audio/video conference facilities"),
      icon: Video,
    },
    {
      title: t("Estúdios / Alojamento", "Studio Apartments"),
      desc: t("Estúdios modernos com todas as comodidades e segurança 24 horas", "Modern studio apartments with all facilities and round the clock security"),
      icon: Home,
    },
    {
      title: t("Serviços de Transporte", "Transport Facilities"),
      desc: t("Serviços de transporte incluindo aluguer de viaturas, transferes de aeroporto, etc.", "Transport facilities including car rental, airport transfer, etc."),
      icon: Car,
    },
    {
      title: t("Material de Escritório & Consumíveis", "Office Stationery & Supplies"),
      desc: t("Fornecimento de material de escritório e todos os outros consumíveis necessários", "Supply of office stationery and all other required supplies"),
      icon: PackageCheck,
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={yardHero}
            alt="Sonamet Yard Aerial View"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />

        <div className="container-x relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("O NOSSO ESTALEIRO", "OUR YARD")}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                {t("Baía do Lobito, Uma Entrada Atlântica Estratégica", "Lobito Bay, A Strategic Atlantic Gateway")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl">
                {t(
                  "As instalações da Sonamet situam-se junto ao Porto do Lobito, um dos portos mais profundos e estrategicamente posicionados da África Ocidental devido à sua localização, extensão e profundidade das águas.",
                  "Sonamet's facility sits adjacent to the Port of Lobito, one of West Africa's deepest and most strategically positioned ports due to its strategic location, extension and water depth."
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & YARD AREAS */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("O NOSSO ESTALEIRO & PRINCIPAIS INSTALAÇÕES", "OUR YARD & MAIN FACILITIES")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                {t("O Nosso Estaleiro", "Our Yard")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                {t(
                  "O Estaleiro da Sonamet está dividido em três áreas principais: Yard 1, Yard 2 e Yard 3, cada uma apoiando atividades específicas de fabricação, montagem, logística e operações.",
                  "Sonamet Yard is divided into three main areas: Yard 1, Yard 2 and Yard 3, each supporting specific fabrication, assembly, logistics and operational activities."
                )}
              </p>
            </div>
          </Reveal>

          {/* Yard Areas — 3 Equal Height Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {yardAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.1} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full bg-card rounded-2xl p-7 border border-border hover:border-gold hover:shadow-elegant transition-all flex flex-col justify-between flex-1">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shrink-0 shadow-sm">
                        <area.icon className="text-navy-deep" size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground tracking-wide">{area.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED TECHNICAL CAPABILITIES */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {t("Principais Instalações", "Main Facilities")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {yardSpecs.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 0.05} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full bg-card rounded-2xl p-7 border border-border hover:border-gold transition-all shadow-sm flex flex-col justify-between flex-1">
                    <div>
                      <div className="h-10 w-10 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-4 shrink-0">
                        <spec.icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-foreground tracking-tight">{spec.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{spec.desc}</p>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPOOL BASE SECTION */}
      <section className="py-20 md:py-28 bg-gradient-navy text-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                  {t("Spool Base da Sonamet", "Sonamet Spool Base")}
                </h2>
                <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed mb-4 text-justify">
                  {t(
                    "A Sonamet continua a investir na indústria angolana e está agora equipada com a única spool base de Angola e da África Ocidental. A spool base possui as seguintes características:",
                    "Sonamet continues to invest in the Angolan industry and now is equipped with the only spool base of Angola and more generally in West-Africa. The spool base have the below characteristics:"
                  )}
                </p>
                <ul className="space-y-2.5">
                  {spoolbasePoints.map((point) => (
                    <li key={point} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm text-white/85 leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <img
                  src={spoolbasePhoto}
                  alt="Sonamet Spool Base Facility"
                  loading="lazy"
                  className="rounded-2xl shadow-elegant w-full object-cover border border-white/10"
                />
                {/* High Contrast Visible Floating Badge */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-navy-deep/95 text-white border-2 border-gold/60 rounded-2xl px-6 py-4 shadow-2xl z-20 backdrop-blur-md">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gold leading-none mb-1">1.039 m</div>
                  <div className="text-xs md:text-sm uppercase tracking-wider font-bold text-white/95 whitespace-nowrap">
                    {t("Comprimento Total", "Total Length")}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. CLIENT SERVICES SECTION */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("SERVIÇOS DE APOIO", "SUPPORT SERVICES")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                {t("Serviços ao Cliente", "Client Services")}
              </h2>
              <p className="text-base md:text-lg text-foreground/85 font-medium leading-relaxed">
                {t("A Sonamet fornece todos os serviços de apoio ao cliente necessários:", "Sonamet provides all the required client services:")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto items-stretch">
            {clientServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full bg-card rounded-2xl p-6 border border-border hover:border-gold transition-all shadow-sm flex flex-col justify-between flex-1 text-center">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 shrink-0">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEDICAL POST SECTION */}
      <section className="py-20 md:py-28 bg-gradient-navy text-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={medicalCenter}
                  alt="Sonamet Medical Center"
                  loading="lazy"
                  className="rounded-2xl shadow-elegant w-full object-cover border border-white/10"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-navy-deep/95 text-white border-2 border-gold/60 rounded-2xl px-6 py-3.5 shadow-2xl z-20 backdrop-blur-md">
                  <div className="font-display text-lg md:text-xl font-bold text-gold">2 Ambulâncias / 2 Ambulances</div>
                  <div className="text-xs uppercase tracking-wider font-bold text-white/90 mt-0.5">
                    {t("Totalmente Equipadas", "Fully Equipped")}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                  {t("SAÚDE & SEGURANÇA", "HEALTH & SAFETY")}
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                  {t("Posto Médico", "Medical Post")}
                </h2>
                <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed text-justify mb-6">
                  {t(
                    "O Posto Médico no local da Sonamet, gerido por médicos e enfermeiros qualificados, fornece exames médicos de rotina e resposta a emergências para colaboradores e clientes, apoiado por 2 ambulâncias totalmente equipadas.",
                    "Sonamet's on-site Medical Post, managed by qualified doctors and nurses, provides routine medical check-ups and emergency response for employees and clients, supported by 2 fully equipped ambulances."
                  )}
                </p>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <div className="h-12 w-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wide">
                      {t("Atendimento Médico 24/7 & Emergência", "24/7 Medical Care & Emergency Response")}
                    </div>
                    <div className="text-xs text-white/75 mt-0.5">
                      {t("Equipa médica permanente e qualificada no estaleiro", "Permanent qualified medical staff on site")}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 md:p-16 text-center shadow-elegant">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white text-balance max-w-3xl mx-auto tracking-tight mb-4">
                {t("Agende uma Visita ao Estaleiro do Lobito", "Schedule a Visit to the Lobito Yard")}
              </h2>
              <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
                {t(
                  "Conheça as nossas instalações de classe mundial, oficinas de fabricação e a única Spool Base de Angola.",
                  "Explore our world-class facilities, fabrication workshops, and Angola's only Spool Base."
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105 uppercase tracking-wide"
                >
                  {t("Contactar Equipa Comercial", "Contact Commercial Team")} <ArrowRight size={16} />
                </Link>
                <a
                  href={yardBrochurePdf}
                  download="SONA-YARD-FAB-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-transform hover:scale-105 uppercase tracking-wide cursor-pointer shadow-md"
                >
                  <Download size={18} className="text-gold" />
                  {t("Baixar PDF do Estaleiro", "Download Yard PDF")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
