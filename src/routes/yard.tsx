import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { 
  Anchor, 
  Warehouse, 
  Cpu, 
  Layers, 
  Flame, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Compass
} from "lucide-react";
import yardHero from "@/assets/foto-yard.jpg";
import yardAerial from "@/assets/yard-dji-0489.jpg";
import yardSection from "@/assets/yard-section-3.jpg";
import whiteWorkshopImg from "@/assets/qhse-white-workshop.png";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/yard")({
  head: () => ({
    meta: [
      { title: "Estaleiro (Yard) — Sonamet Industrial S.A. | Lobito, Angola" },
      { name: "description", content: "Conheça as infraestruturas do estaleiro Sonamet na Baía do Lobito: 80 Hectares, 3 áreas (Yard 1, Yard 2, Yard 3), 2 cais até 6.000 mT, oficinas brancas e a única Spoolbase de Angola." },
      { property: "og:title", content: "Estaleiro — Sonamet Industrial S.A." },
      { property: "og:image", content: yardHero },
    ],
  }),
  component: Yard,
});

function Yard() {
  const { lang } = useLanguage();

  const yardAreas = [
    {
      name: "Yard 1",
      subtitle: lang === "pt" ? "ÁREA HISTÓRICA DE FABRICAÇÃO & MONTAGEM" : "HISTORICAL FABRICATION & ASSEMBLY AREA",
      area: "~71.000 M²",
      capacity: lang === "pt" ? "50 A 83 MT/M²" : "50 TO 83 MT/M²",
      desc: lang === "pt"
        ? "Área histórica de fabricação e montagem da Sonamet. Possui capacidade de suporte de solo de 50 MT/m², com secções reforçadas até 83 MT/m², permitindo a fabricação e montagem de uma ampla gama de estruturas offshore pesadas."
        : "Sonamet's historical fabrication and assembly area covering ~71,000 m². Ground bearing capacity of 50 MT/m², with reinforced sections reaching up to 83 MT/m², allowing the fabrication and assembly of a wide range of offshore structures.",
      highlights: lang === "pt"
        ? ["Oficinas Principais", "Cais Yard 1 (180m)", "Capacidade até 83 MT/m²"]
        : ["Main Workshops", "Quayside Yard 1 (180m)", "Bearing capacity up to 83 MT/m²"]
    },
    {
      name: "Yard 2",
      subtitle: lang === "pt" ? "FABRICAÇÃO PESADA, MONTAGEM & ELEVAÇÃO" : "HEAVY FABRICATION, ASSEMBLY & LIFTING",
      area: lang === "pt" ? "MONTAGEM PESADA" : "HEAVY ASSEMBLY",
      capacity: lang === "pt" ? "ATÉ 800 MT (GUINDASTES)" : "UP TO 800 MT CRANES",
      desc: lang === "pt"
        ? "Dedicada a operações de fabricação pesada, montagem e elevação. Atualizada e reforçada para acomodar as maiores estruturas offshore e a operação segura de guindastes pesados até 800 MT. Apoiou algumas das estruturas mais pesadas alguma vez construídas em Angola e na África Ocidental."
        : "Dedicated to heavy fabrication, assembly, and lifting operations. Upgraded and reinforced to accommodate major offshore structures and the safe operation of heavy lifting equipment, including cranes of up to 800 MT. Supported some of the heaviest offshore structures ever built in West Africa.",
      highlights: lang === "pt"
        ? ["Cais Yard 2 (143m / 6.000 mT)", "Guindastes até 800 MT", "Estruturas Recorde"]
        : ["Quayside Yard 2 (143m / 6,000 mT)", "Cranes up to 800 MT", "Record Structures"]
    },
    {
      name: "Yard 3",
      subtitle: lang === "pt" ? "SPOOLBASE, ARMAZENAGEM & APOIO OPERACIONAL" : "SPOOLBASE, STORAGE & LOGISTICS SUPPORT",
      area: lang === "pt" ? "OPERAÇÕES & LOGÍSTICA" : "OPERATIONS & LOGISTICS",
      capacity: "32.500 M²",
      desc: lang === "pt"
        ? "Apoia as operações da Spoolbase, pré-fabricação, armazenagem, centro de formação profissional e atividades de gestão de resíduos industriais e logística de apoio."
        : "Supports spoolbase operations, pre-fabrication, storage, vocational training center, and waste management / support logistics activities.",
      highlights: lang === "pt"
        ? ["Spoolbase (1.039m)", "Centro de Formação", "Armazenagem Geral"]
        : ["Spoolbase (1,039m)", "Training Centre", "General Storage"]
    }
  ];

  const technicalSpecs = [
    {
      category: lang === "pt" ? "CAIS & INFRAESTRUTURA PORTUÁRIA" : "QUAYSIDES & PORT INFRASTRUCTURE",
      items: [
        {
          title: lang === "pt" ? "CAIS YARD 1 (QUAYSIDE 1)" : "QUAYSIDE YARD 1",
          specs: lang === "pt"
            ? "180 m de cais acostável · 10 m de calado (draft) · Carga máxima de 5.500 mT (Load-out) · Capacidade dos cabeços: 30 mT · Profundidade: LAT -10m · Nível do cais: LAT +2,9m · Maré alta máxima: LAT +2m."
            : "180 m berth length · 10 m draft · 5,500 mT maximum load-out · Bollard capacity: 30 mT · Water depth: LAT -10m · Quayside level: LAT +2.9m · Max high-tide: LAT +2m."
        },
        {
          title: lang === "pt" ? "CAIS YARD 2 (QUAYSIDE 2)" : "QUAYSIDE YARD 2",
          specs: lang === "pt"
            ? "143 m de cais acostável · 10 m de calado (draft) · Carga máxima de 6.000 mT (Load-out) · Capacidade dos cabeços: 30 mT · Profundidade: LAT -10m · Nível do cais: LAT +3,3m · Maré alta máxima: LAT +2m."
            : "143 m berth length · 10 m draft · 6,000 mT maximum load-out · Bollard capacity: 30 mT · Water depth: LAT -10m · Quayside level: LAT +3.3m · Max high-tide: LAT +2m."
        }
      ]
    },
    {
      category: lang === "pt" ? "OFICINAS DE FABRICAÇÃO & LINHAS DE PRODUÇÃO" : "FABRICATION WORKSHOPS & PRODUCTION LINES",
      items: [
        {
          title: lang === "pt" ? "OFICINAS NEGRAS (BLACK WORKSHOPS)" : "BLACK WORKSHOPS",
          specs: lang === "pt"
            ? "2 oficinas com área global de 2.450 m² · Máquina de corte de perfis CNC · Linhas de montagem de Estacas e Âncoras de Sucção com calandras dedicadas · Linha dedicada para pernas de Jackets e estacas · 5 máquinas oxicorte CNC e 1 máquina de corte de vigas."
            : "2-off Black Workshops with overall area of 2,450 m² · CNC profile cutting machine · Suction anchors & piles assembly lines with dedicated rolling machines · Dedicated line for Jacket legs and piles · 5 CNC oxy-cutting machines and 1 beam cutting machine."
        },
        {
          title: lang === "pt" ? "LINHAS PIPE-IN-PIPE & DOUBLE JOINTS" : "PIPE-IN-PIPE & DOUBLE JOINTS LINES",
          specs: lang === "pt"
            ? "2 oficinas com área total de 9.000 m² (3.000 m² cobertos) · Totalmente equipadas com carros de transferência e roletes para produção de double joints (24m) e Pipe-in-Pipe até 24\" OD."
            : "2-off workshops with overall area of 9,000 m² (3,000 m² covered) · Fully equipped with transfer cars and rollers for double joints (24m long) and Pipe-in-Pipe up to 24\" OD."
        },
        {
          title: lang === "pt" ? "OFICINAS BRANCAS (WHITE WORKSHOPS)" : "WHITE WORKSHOPS",
          specs: lang === "pt"
            ? "4 oficinas dedicadas (2.000 a 4.700 m²) · Montagem simultânea de até 8 a 9 manifolds · Ensaios Radiográficos (RT) em paralelo · Soldadura de Inox, Duplex e Super Duplex · Soldadura orbital: 3/8\" a 1\"."
            : "4-off workshops (2,000 to 4,700 m²) · Simultaneous assembly of up to 8 to 9 manifolds · Parallel RT capability · Stainless Steel, Duplex & Super Duplex welding · Orbital welding: 3/8\" to 1\"."
        },
        {
          title: lang === "pt" ? "OFICINAS MECÂNICA & ELÉTRICA" : "MECHANICAL & ELECTRICAL WORKSHOPS",
          specs: lang === "pt"
            ? "Oficina mecânica equipada com tornos mecânicos, fresadoras e mandriladoras · Oficina dedicada para departamentos eletrónicos e elétricos · Centrais elétricas próprias com geradores dedicados."
            : "Machine shop equipped with lathes, milling and boring machines · Dedicated workshop for electronic and electrical departments · In-house power plants with dedicated generators."
        }
      ]
    },
    {
      category: lang === "pt" ? "MOVIMENTAÇÃO DE CARGAS & ARMAZENAGEM" : "HEAVY LIFTING & STORAGE FACILITIES",
      items: [
        {
          title: lang === "pt" ? "EQUIPAMENTO HEAVY LIFT" : "HEAVY LIFT EQUIPMENT",
          specs: lang === "pt"
            ? "5 guindastes sobre esteiras (crawler) de 200 a 750 mT · 58 pontes rolantes · 11 guindastes hidráulicos móveis · 2 unidades de transporte SPMT (Self-Propelled Modular Transporter)."
            : "5 crawler cranes from 200 to 750 mT · 58 overhead cranes · 11 mobile hydraulic cranes · 2-off SPMT units (Self-Propelled Modular Transporter)."
        },
        {
          title: lang === "pt" ? "ÁREAS DE MONTAGEM FINAL (FINAL ERECTION)" : "FINAL ERECTION AREAS",
          specs: lang === "pt"
            ? "2 áreas de 70.000 m² cada, dedicadas à montagem de estruturas massivas · Acesso direto ao cais dedicado por deslizamento (skidding) ou guindastes crawler · Capacidade de suporte de solo acima de 50 mT/m² em toda a área."
            : "2-off areas of 70,000 m² each dedicated to the assembly of massive structures · Direct access to dedicated quaysides by skidding or crawler cranes · Ground bearing capacity above 50 mT/m² across the area."
        },
        {
          title: lang === "pt" ? "INSTALAÇÕES DE ARMAZENAGEM (STORAGE)" : "STORAGE FACILITIES",
          specs: lang === "pt"
            ? "1.700 m² de armazém coberto com controlo rigoroso de acessos · Sala climatizada com temperatura controlada de 54 m² · Área exclusiva para aço inoxidável · Mais de 19.295 m² de área de armazenagem ao ar livre."
            : "1,700 m² indoor storage area with access control · 54 m² climate-controlled storage room · Dedicated stainless steel storage area · Over 19,295 m² of open quayside storage space."
        }
      ]
    }
  ];

  const clientServices = [
    {
      title: lang === "pt" ? "ESCRITÓRIOS TOTALMENTE EQUIPADOS" : "FULLY EQUIPPED OFFICES",
      desc: lang === "pt"
        ? "Postos de trabalho completos no estaleiro e na sede para equipas de clientes e fiscalização técnica."
        : "Complete workstations inside the yard and headquarters for client and technical supervision teams."
    },
    {
      title: lang === "pt" ? "SALAS DE REUNIÃO & VIDEOCONFERÊNCIA" : "MEETING & VIDEOCONFERENCE ROOMS",
      desc: lang === "pt"
        ? "Equipadas com sistemas modernos de áudio e videoconferência para coordenação com sedes globais."
        : "Equipped with modern audio/video conferencing facilities for seamless global coordination."
    },
    {
      title: lang === "pt" ? "ALOJAMENTO EM ESTÚDIOS MODERNOS" : "MODERN STUDIO ACCOMMODATION",
      desc: lang === "pt"
        ? "Apartamentos estúdio modernos com todas as comodidades e segurança privada 24 horas por dia."
        : "Modern studio apartments with all living amenities and 24/7 private security."
    },
    {
      title: lang === "pt" ? "LOGÍSTICA & TRANSPORTE DEDICADO" : "DEDICATED LOGISTICS & TRANSPORT",
      desc: lang === "pt"
        ? "Aluguer de viaturas, transfer de aeroporto e transporte diário dedicado às equipas de projeto."
        : "Car rental services, airport transfers, and daily project transport support."
    },
    {
      title: lang === "pt" ? "APOIO ADMINISTRATIVO & CONSUMÍVEIS" : "ADMINISTRATIVE & STATIONERY SUPPORT",
      desc: lang === "pt"
        ? "Fornecimento de economato de escritório e todos os consumíveis necessários ao projeto."
        : "Complete office supplies, consumables, and full administrative support."
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "INSTALAÇÕES & INFRAESTRUTURAS" : "FACILITIES & INFRASTRUCTURE"}
        title={lang === "pt" ? "BAÍA DO LOBITO: UMA PORTA ESTRATÉGICA NO ATLÂNTICO" : "LOBITO BAY: A STRATEGIC ATLANTIC GATEWAY"}
        description={lang === "pt"
          ? "O estaleiro da Sonamet situa-se junto ao Porto do Lobito, um dos portos mais profundos e estrategicamente posicionados da África Ocidental devido à sua localização geográfica, extensão e calado natural."
          : "Sonamet's facility sits adjacent to the Port of Lobito, one of West Africa's deepest and most strategically positioned ports due to its geographic location, extension, and water depth."}
        image={yardHero}
      />

      {/* OVERVIEW SECTION */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {lang === "pt" ? "O ESTALEIRO" : "THE YARD"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-foreground mb-6 leading-tight">
                {lang === "pt" ? "80 HECTARES DE ENGENHARIA DE CLASSE MUNDIAL" : "80 HECTARES OF WORLD-CLASS ENGINEERING"}
              </h2>
              <p className="text-foreground/85 text-base leading-relaxed mb-8">
                {lang === "pt"
                  ? "O estaleiro Sonamet cobre aproximadamente 80 hectares, incluindo 12.000 m² de oficinas cobertas e dois cais acostáveis com profundidades de água até 10 metros, dividindo-se em três áreas estratégicas: Yard 1, Yard 2 e Yard 3."
                  : "The yard covers approximately 80 hectares, including 12,000 m² of covered workshops and two quaysides with water depths of up to 10 meters, divided into three main operational areas: Yard 1, Yard 2, and Yard 3."}
              </p>

              <div className="space-y-6">
                {yardAreas.map((y) => (
                  <div key={y.name} className="bg-card border border-border rounded-3xl p-6 hover:border-gold transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-extrabold text-navy uppercase flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-gold" />
                        {y.name}
                      </h3>
                      <span className="text-[11px] font-bold uppercase px-3 py-1 bg-secondary text-foreground rounded-full border border-border">
                        {y.area} • {y.capacity}
                      </span>
                    </div>
                    <div className="text-xs font-bold uppercase text-gold mb-2">{y.subtitle}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{y.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {y.highlights.map((h) => (
                        <span key={h} className="text-[11px] font-semibold uppercase bg-secondary text-navy-deep px-2.5 py-1 rounded-md">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src={yardAerial}
                  alt="Vista aérea do Estaleiro Sonamet no Lobito"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md text-white p-4 rounded-xl text-xs border border-white/10">
                  <span className="font-bold text-gold uppercase">{lang === "pt" ? "BAÍA DO LOBITO:" : "LOBITO BAY:"}</span>{" "}
                  {lang === "pt"
                    ? "Acesso marítimo direto com calado de 10m e proteção natural da restinga."
                    : "Direct ocean access with 10m draft and natural sandspit shelter."}
                </div>
              </div>

              <div className="relative">
                <img
                  src={yardSection}
                  alt="Operações de montagem no Cais Sonamet"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED TECHNICAL SPECIFICATIONS */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "ESPECIFICAÇÕES TÉCNICAS" : "TECHNICAL SPECIFICATIONS"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "CAPACIDADES DETALHADAS DE FABRICAÇÃO & CAIS" : "DETAILED FABRICATION & QUAYSIDE SPECS"}
            </h2>
          </div>

          <div className="space-y-12">
            {technicalSpecs.map((group) => (
              <div key={group.category} className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-extrabold uppercase text-navy mb-8 flex items-center gap-3 border-b border-border pb-4">
                  <span className="h-4 w-1 bg-gold rounded-full" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className={`bg-secondary/60 rounded-2xl p-6 border border-border/80 hover:border-gold hover:shadow-sm transition-all flex flex-col justify-between w-full ${
                        group.items.length === 3
                          ? "md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                          : "md:w-[calc(50%-12px)]"
                      }`}
                    >
                      <div>
                        <h4 className="text-base font-bold uppercase text-navy mb-4 flex items-center gap-2 border-b border-border/60 pb-3">
                          <CheckCircle2 size={18} className="text-gold shrink-0" />
                          {item.title}
                        </h4>
                        <ul className="space-y-2.5">
                          {item.specs.split("·").map((spec, specIdx) => (
                            <li key={specIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
                              <span className="leading-relaxed">{spec.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOOL BASE EXCLUSIVE HIGHLIGHT */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                {lang === "pt" ? "INSTALAÇÃO ÚNICA NA ÁFRICA OCIDENTAL" : "EXCLUSIVE WEST AFRICAN FACILITY"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 leading-tight">
                SONAMET SPOOL BASE: <br />
                <span className="text-gold">1.039 METROS</span>
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-8">
                {lang === "pt"
                  ? "A Sonamet continua a investir na indústria angolana e opera a única Spool Base de Angola e de toda a África Ocidental, dedicada à produção de flowlines rígidos de alta especificação."
                  : "Sonamet continuously invests in the Angolan industry and operates the only Spool Base in Angola and West Africa, dedicated to high-specification rigid flowlines production."}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                  <div className="font-display text-2xl font-bold text-gold">1.039 M</div>
                  <div className="text-xs uppercase text-white/70 mt-1">
                    {lang === "pt" ? "EXTENSÃO TOTAL (32.500 M²)" : "TOTAL LENGTH (32,500 M²)"}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                  <div className="font-display text-2xl font-bold text-gold">{lang === "pt" ? "ATÉ 750 M" : "UP TO 750 M"}</div>
                  <div className="text-xs uppercase text-white/70 mt-1">
                    {lang === "pt" ? "COMPRIMENTO DE STALKS" : "STALK CONSTRUCTION LENGTH"}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                  <div className="font-display text-2xl font-bold text-gold">130 M</div>
                  <div className="text-xs uppercase text-white/70 mt-1">
                    {lang === "pt" ? "LINHA DE SOLDADURA (FIRING LINE)" : "FIRING LINE WORKSHOP"}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                  <div className="font-display text-2xl font-bold text-gold">{lang === "pt" ? "8 ESTAÇÕES" : "8 STATIONS"}</div>
                  <div className="text-xs uppercase text-white/70 mt-1">
                    {lang === "pt" ? "POSTOS DE TRABALHO CONTÍNUOS" : "WORKING STATIONS"}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gold/10 border border-gold/30 text-xs text-white/90 uppercase">
                <strong>{lang === "pt" ? "CAPACIDADE:" : "CAPABILITY:"}</strong>{" "}
                {lang === "pt"
                  ? "Apta para produzir todas as linhas rígidas (rigid flowlines), incluindo sistemas Pipe-in-Pipe e revestimentos com polímeros."
                  : "Capable of producing all rigid flowline products including pipe-in-pipe and polymer lined products."}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src={whiteWorkshopImg}
                  alt="Instalações de Spoolbase e Manifolds"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-elegant w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy-deep p-4 rounded-2xl font-bold text-xs uppercase shadow-gold">
                  {lang === "pt" ? "CONEXÃO DIRETA DO CAIS 2 AO YARD 3" : "DIRECT LINK FROM QUAY 2 TO YARD 3"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SERVICES SECTION */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "APOIO AOS PROJETOS" : "PROJECT SUPPORT"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "SERVIÇOS DEDICADOS AO CLIENTE" : "DEDICATED CLIENT SERVICES"}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {clientServices.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-3xl p-8 hover:border-gold hover:shadow-elegant transition-all w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                    <Sparkles className="text-navy-deep" size={22} />
                  </div>
                  <h4 className="text-base font-bold uppercase text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-navy-deep hover:text-gold transition-all"
            >
              {lang === "pt" ? "AGENDAR VISITA AO ESTALEIRO (YARD TOUR)" : "SCHEDULE YARD TOUR"} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
