import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Shield, 
  Award, 
  Users, 
  FileText, 
  CheckCircle2, 
  Download, 
  Quote, 
  Briefcase, 
  HeartHandshake, 
  ArrowRight, 
  Hammer, 
  Warehouse, 
  Recycle,
  Sparkles
} from "lucide-react";
import heroYard from "@/assets/foto-yard.jpg";
import joinVentureImg from "@/assets/join-venture.png";
import yardAerial from "@/assets/yard-dji-0200.jpg";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Sonamet Industrial S.A. | Made in Angola" },
      { name: "description", content: "Conheça a Sonamet Industrial S.A., joint venture Sonangol (40%) e Subsea 7 (60%). Desde 1998 a liderar a fabricação e construção offshore na Baía do Lobito, Angola." },
      { property: "og:title", content: "Sobre Nós — Sonamet Industrial S.A." },
      { property: "og:image", content: heroYard },
    ],
  }),
  component: HomeAbout,
});

function HomeAbout() {
  const { lang } = useLanguage();

  const stats = [
    { value: "80 HA", label: lang === "pt" ? "ÁREA DO ESTALEIRO" : "FACILITY AREA" },
    { value: "12.000 M²", label: lang === "pt" ? "OFICINAS COBERTAS" : "COVERED WORKSHOPS" },
    { value: "6.000 MT", label: lang === "pt" ? "CAPACIDADE DE CAIS" : "QUAYSIDE CAPACITY" },
    { value: "105", label: lang === "pt" ? "MANIFOLDS ENTREGUES" : "MANIFOLDS DELIVERED" },
  ];

  const capabilities = [
    {
      title: "EPC / EPCI",
      desc: lang === "pt"
        ? "Gestão integrada de engenharia, compras, fabricação, montagem e integração de estruturas complexas submarinas e de superfície."
        : "Integrated management of engineering, procurement, fabrication, assembly, and offshore complex structures.",
      icon: Briefcase,
    },
    {
      title: lang === "pt" ? "FABRICAÇÃO" : "FABRICATION",
      desc: lang === "pt"
        ? "Estruturas metálicas pesadas para águas rasas e profundas, manifolds em super duplex, jackets, estacas de sucção e spoolbase."
        : "Heavy steel structures for shallow and deepwater developments, super duplex manifolds, jackets, suction piles, and spoolbase.",
      icon: Hammer,
    },
    {
      title: lang === "pt" ? "DESMANTELAMENTO" : "DECOMMISSIONING",
      desc: lang === "pt"
        ? "Desativação e desmantelamento seguro de estruturas marítimas, módulos e navios FPSO sob as mais rigorosas normas de QHSE."
        : "Safe decommissioning and dismantling of offshore structures, modules, and FPSO vessels under strict QHSE standards.",
      icon: Recycle,
    },
    {
      title: lang === "pt" ? "ARMAZENAGEM" : "STORAGE",
      desc: lang === "pt"
        ? "Mais de 19.295 m² de áreas de armazenagem cobertas e abertas, salas climatizadas e logística portuária de cais dedicada."
        : "Over 19,295 m² of covered and open storage facilities, climate-controlled areas, and dedicated quayside port logistics.",
      icon: Warehouse,
    },
  ];

  const promises = [
    {
      step: lang === "pt" ? "PROMESSA 1" : "PROMISE 1",
      title: lang === "pt" ? "SEGURANÇA (SAFETY)" : "SAFETY",
      desc: lang === "pt"
        ? "Executar o trabalho sem incidentes para as nossas pessoas, os nossos parceiros/clientes e as nossas comunidades."
        : "Execute the work without incidents for our people, our partners/clients, and our communities.",
      icon: Shield,
    },
    {
      step: lang === "pt" ? "PROMESSA 2" : "PROMISE 2",
      title: lang === "pt" ? "QUALIDADE (QUALITY)" : "QUALITY",
      desc: lang === "pt"
        ? "Entregar produtos de alta qualidade e precisão que cumprem rigorosamente os mais altos padrões internacionais."
        : "Deliver high-quality products that strictly meet the highest international standards.",
      icon: Award,
    },
    {
      step: lang === "pt" ? "PROMESSA 3" : "PROMISE 3",
      title: lang === "pt" ? "NO PRAZO (ON SCHEDULE)" : "ON SCHEDULE",
      desc: lang === "pt"
        ? "Concluir o trabalho atempadamente e em estrita conformidade com o cronograma e as expectativas do cliente."
        : "Complete the work timely and in strict line with client expectations and schedules.",
      icon: CheckCircle2,
    },
  ];

  const valuesList = [
    {
      title: lang === "pt" ? "AS NOSSAS PESSOAS" : "OUR PEOPLE",
      desc: lang === "pt"
        ? "Desenvolvimento contínuo do talento humano e prioridade ao bem-estar da nossa força de trabalho."
        : "Continuous development of human talent and priority to the well-being of our workforce.",
      icon: Users,
    },
    {
      title: lang === "pt" ? "SEGURANÇA E AMBIENTE" : "SAFETY AND ENVIRONMENT",
      desc: lang === "pt"
        ? "Proteção inegociável da vida humana e preservação rigorosa do ecossistema onde operamos."
        : "Non-negotiable protection of human life and rigorous preservation of the ecosystem.",
      icon: Shield,
    },
    {
      title: lang === "pt" ? "FOCO NO CLIENTE" : "CLIENT FOCUS",
      desc: lang === "pt"
        ? "Entrega de soluções que superam expectativas e criam parcerias estratégicas de longo prazo."
        : "Delivering solutions that exceed expectations and build long-term strategic partnerships.",
      icon: Award,
    },
    {
      title: lang === "pt" ? "COMPROMISSO COM A EXCELÊNCIA" : "COMMITMENT TO EXCELLENCE",
      desc: lang === "pt"
        ? "Padrões internacionais de engenharia, precisão técnica e rigor em todas as fases do projeto."
        : "International engineering standards, technical precision, and rigor in all project phases.",
      icon: CheckCircle2,
    },
    {
      title: lang === "pt" ? "ENVOLVIMENTO NA COMUNIDADE" : "COMMUNITY INVOLVEMENT",
      desc: lang === "pt"
        ? "Investimento ativo na saúde, educação e desenvolvimento socioeconómico de Benguela."
        : "Active investment in health, education, and socioeconomic development of Benguela.",
      icon: HeartHandshake,
    },
  ];

  const leadershipTeam = [
    { name: "Domingos Augusto", role: "General Manager", status: "active" },
    { name: "Olivier Mollaret", role: "Deputy General Manager", status: "active" },
    { name: "Luís Paixão", role: "Financial & Administrative Manager", status: "active" },
    { name: "Sandro Ferreira", role: "Sales & Marketing Manager", status: "active" },
    { name: "Marcolino Trosso", role: "QHSE Manager", status: "active" },
    { name: lang === "pt" ? "A ser nomeado" : "To be nominated", role: "Projects Director", status: "tbn" },
    { name: lang === "pt" ? "A ser nomeado" : "To be nominated", role: "SCM & General Services Manager", status: "tbn" },
    { name: "Domingos Augusto", role: "HR Manager", status: "active" },
  ];

  return (
    <>
      {/* HERO SECTION WITH VIDEO/CINEMATIC BACKGROUND & CLEAN STATS */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-navy-deep text-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${heroYard})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-x relative z-10 my-auto py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {lang === "pt" ? "SOBRE A SONAMET" : "ABOUT SONAMET"}
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.08] text-balance">
              MADE IN ANGOLA <br />
              <span className="text-gold">BUILT FOR THE WORLD</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
              {lang === "pt"
                ? "Estabelecida em 1998 e estrategicamente localizada na Baía do Lobito em Angola, a Sonamet é a empresa de referência na fabricação offshore, engenharia submarina e soluções integradas no Atlântico Sul."
                : "Established in 1998 and strategically located in Angola's Lobito Bay, Sonamet is the leading company in offshore fabrication, subsea engineering, and integrated energy solutions in the South Atlantic."}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/yard"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-deep shadow-gold hover:scale-105 transition-all"
              >
                {lang === "pt" ? "CONHEÇA O ESTALEIRO" : "EXPLORE THE YARD"} <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 hover:border-gold transition-all"
              >
                {lang === "pt" ? "VER PROJETOS" : "VIEW PROJECTS"}
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS BAR - MONOLINGUAL & CLEAN */}
        <div className="relative z-10 border-t border-white/15 bg-navy-deep/80 backdrop-blur-xl">
          <div className="container-x py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((st) => (
                <div key={st.label} className="text-left border-l-2 border-gold/60 pl-4">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-gold">{st.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/90 mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW & CAPABILITIES */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "QUEM SOMOS" : "WHO WE ARE"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-foreground mb-6 leading-tight">
              {lang === "pt" ? "LIDERANÇA E SOLUÇÕES INTEGRADAS OFFSHORE" : "LEADERSHIP & INTEGRATED OFFSHORE SOLUTIONS"}
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed text-base">
              <p>
                {lang === "pt"
                  ? "Com sede e estaleiro de fabricação no Lobito, a Sonamet desenvolve projetos EPC/EPCI, serviços de armazenagem, desmantelamento (decommissioning) e assistência técnica especializada para os grandes operadores mundiais de óleo e gás."
                  : "With headquarters and fabrication yard based in Lobito, Sonamet delivers EPC/EPCI projects, storage services, decommissioning, and specialized technical assistance for major international oil and gas operators."}
              </p>
              <p>
                {lang === "pt"
                  ? "A nossa força de trabalho é composta por 80% de colaboradores angolanos, posicionando a Sonamet como um dos modelos de maior sucesso na promoção do conteúdo local, formação profissional e desenvolvimento industrial sustentável no continente africano."
                  : "Our workforce is composed of 80% Angolan nationals, positioning Sonamet as one of the most successful benchmark models for local content promotion, vocational training, and sustainable industrial growth in Africa."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                lang === "pt" ? "INSTALAÇÕES NO LOBITO (80 HECTARES)" : "LOBITO FACILITIES (80 HECTARES)",
                lang === "pt" ? "PROJETOS EPC/EPCI INTEGRADOS" : "INTEGRATED EPC/EPCI PROJECTS",
                lang === "pt" ? "DESMANTELAMENTO OFFSHORE" : "OFFSHORE DECOMMISSIONING",
                lang === "pt" ? "ARMAZENAGEM (>19.295 M²)" : "STORAGE (>19,295 M²)",
                lang === "pt" ? "ÁGUAS RASAS E PROFUNDAS" : "SHALLOW & DEEPWATER PROJECTS",
                lang === "pt" ? "80% FORÇA DE TRABALHO ANGOLANA" : "80% ANGOLAN WORKFORCE",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs font-bold uppercase text-navy">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={yardAerial}
              alt="Estaleiro Sonamet na Baía do Lobito"
              loading="lazy"
              width={1280}
              height={900}
              className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-navy border border-white/10 text-white rounded-2xl p-6 shadow-elegant hidden sm:block max-w-xs">
              <div className="font-display text-3xl font-bold text-gold">80 HA</div>
              <div className="text-xs uppercase tracking-widest text-white/80 mt-1">
                {lang === "pt" ? "ESTALEIRO ESTRATÉGICO NO ATLÂNTICO" : "STRATEGIC ATLANTIC GATEWAY"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOINT VENTURE SECTION - OFFICIAL IMAGE */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "ESTRUTURA ACIONISTA" : "SHAREHOLDER STRUCTURE"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-balance">
              {lang === "pt" ? "GOVERNAÇÃO & PARCERIA ESTRATÉGICA" : "GOVERNANCE & STRATEGIC PARTNERSHIP"}
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg uppercase">
              {lang === "pt"
                ? "JOINT VENTURE ENTRE A SONANGOL (40%) E A SUBSEA 7 (60%)"
                : "JOINT VENTURE BETWEEN SONANGOL (40%) AND SUBSEA 7 (60%)"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-3xl p-6 sm:p-10 shadow-elegant">
            <img
              src={joinVentureImg}
              alt="Joint Venture Sonamet: Sonangol 40% e Subsea 7 60%"
              loading="lazy"
              className="w-full h-auto object-contain rounded-2xl mx-auto"
            />
            <div className="grid sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">
                  {lang === "pt" ? "PARCEIRO NACIONAL" : "NATIONAL PARTNER"}
                </div>
                <h4 className="text-xl font-bold uppercase text-navy">SONANGOL E.P. (40%)</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {lang === "pt"
                    ? "Empresa Nacional de Hidrocarbonetos de Angola, impulsionando o conteúdo local e o desenvolvimento energético sustentável."
                    : "National Oil Company of Angola, driving local content development and sustainable energy growth."}
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">
                  {lang === "pt" ? "PARCEIRO INTERNACIONAL" : "INTERNATIONAL PARTNER"}
                </div>
                <h4 className="text-xl font-bold uppercase text-navy">SUBSEA 7 (60%)</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {lang === "pt"
                    ? "Líder global na prestação de serviços e engenharia offshore para a indústria de energia mundial."
                    : "Global leader in the delivery of offshore projects and services for the evolving energy industry."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC CAPABILITIES (CARDS WITH CLEAN TITLES ONLY) */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "CAPACIDADES ESTRATÉGICAS" : "STRATEGIC CAPABILITIES"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "SOLUÇÕES INTEGRADAS DE CLASSE MUNDIAL" : "WORLD-CLASS INTEGRATED SOLUTIONS"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-3xl p-8 hover:border-gold hover:shadow-elegant transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                      <c.icon className="text-navy-deep" size={26} />
                    </div>
                    <h3 className="text-2xl font-extrabold uppercase text-foreground mb-3">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link
                      to="/yard"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors"
                    >
                      {lang === "pt" ? "SABER MAIS" : "LEARN MORE"} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY: THREE PROMISES, ONE COMMITMENT */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              {lang === "pt" ? "FILOSOFIA SONAMET" : "SONAMET PHILOSOPHY"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "TRÊS PROMESSAS, UM COMPROMISSO" : "THREE PROMISES, ONE COMMITMENT"}
            </h2>
            <p className="mt-4 text-white/80 text-base md:text-lg uppercase">
              {lang === "pt"
                ? "A NOSSA CONDUTA OPERACIONAL EM CADA PROJETO"
                : "OUR OPERATIONAL STANDARD IN EVERY PROJECT"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white/5 border border-white/15 p-8 backdrop-blur-md hover:bg-white/10 hover:border-gold transition-all">
                <div className="h-12 w-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <p.icon className="text-gold" size={26} />
                </div>
                <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">{p.step}</div>
                <h3 className="text-2xl font-bold uppercase mb-3">{p.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "MISSÃO & VALORES" : "MISSION & VALUES"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6">
              {lang === "pt" ? "A NOSSA MISSÃO E PRINCÍPIOS" : "OUR MISSION AND PRINCIPLES"}
            </h2>
            <p className="text-foreground/85 text-base md:text-lg leading-relaxed">
              {lang === "pt"
                ? 'Entregar projetos de desenvolvimento de Engenharia, Procurement e Construção de última geração para a indústria de óleo e gás em Angola. Liderar o desenvolvimento e a transferência de tecnologia para participar no crescimento de longo prazo da indústria local e do capital humano. Tornar o "Made in Angola" um objetivo a atingir para um negócio equilibrado entre todos os parceiros envolvidos.'
                : 'Deliver state-of-the-art Engineering, Procurement, and Construction development projects for the oil and gas industry in Angola. Lead the development and transfer of technology to participate in the long-term growth of the local oil and gas industry and human capital. Enable "Made in Angola" as a target to reach for a balanced business between all partners involved.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {valuesList.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:border-gold hover:shadow-elegant transition-all flex flex-col items-center justify-between"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <v.icon className="text-navy-deep" size={24} />
                </div>
                <h4 className="text-sm font-bold uppercase text-foreground mb-2">{v.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODE OF CONDUCT / BUSINESS ETHICS */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container-x">
          <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-sm grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
                <FileText size={16} className="mr-1.5" />
                {lang === "pt" ? "CÓDIGO DE CONDUTA & ÉTICA EMPRESARIAL" : "CODE OF BUSINESS CONDUCT & ETHICS"}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-4 text-foreground">
                {lang === "pt" ? "INTEGRIDADE, TRANSPARÊNCIA E RESPEITO" : "INTEGRITY, TRANSPARENCY AND RESPECT"}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {lang === "pt"
                  ? "Na Sonamet SA, dedicamo-nos a manter os mais elevados padrões de ética empresarial. A integridade, transparência e respeito por todas as partes interessadas orientam as nossas decisões e ações. Estamos empenhados em operar de forma responsável, tratando colaboradores, clientes, fornecedores e as comunidades onde operamos com justiça e honestidade. Os nossos princípios éticos formam a base de tudo o que fazemos, garantindo confiança e sustentabilidade a longo prazo."
                  : "At Sonamet SA, we are dedicated to upholding the highest standards of business ethics. Integrity, transparency, and respect for all stakeholders guide our decisions and actions. We are committed to operating responsibly, treating employees, customers, suppliers, and our communities with fairness and honesty. Our ethical principles form the foundation of everything we do, ensuring trust and long-term sustainability."}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-center">
              <a
                href="/documents/Sonamet_Code_of_Business_Conduct_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-navy text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-navy-deep hover:text-gold transition-all text-center"
              >
                <Download size={18} />
                {lang === "pt" ? "DESCARREGAR CÓDIGO DE CONDUTA (PDF)" : "DOWNLOAD CODE OF CONDUCT (PDF)"}
              </a>
              <span className="text-xs text-muted-foreground mt-2 uppercase">PDF Oficial 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "LIDERANÇA EXECUTIVA" : "EXECUTIVE LEADERSHIP"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "A NOSSA DIREÇÃO" : "OUR MANAGEMENT TEAM"}
            </h2>
          </div>

          {/* General Manager Quote */}
          <div className="max-w-4xl mx-auto mb-16 bg-gradient-navy text-white rounded-3xl p-8 md:p-12 border border-white/10 shadow-elegant relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 text-white/5 h-32 w-32" />
            <div className="relative z-10">
              <p className="text-base md:text-lg font-light italic leading-relaxed text-white/95 mb-6">
                {lang === "pt"
                  ? '"Os anos de trabalho árduo dos nossos colaboradores e as realizações alcançadas ao longo do tempo só foram possíveis graças ao nosso foco absoluto na segurança e na qualidade. Embora a entrega dos produtos dentro do prazo tenha sido sempre o nosso objetivo primordial, qualquer compromisso com a segurança na execução e a qualidade das entregas nunca foi sequer considerado como opção. O resultado tem sido recompensador, com as nossas entregas sempre alinhadas e até excedendo as expectativas dos clientes."'
                  : '"The years of hard work by our employees and the accomplishments over the time was made possible only by our focus on safety and quality. Although, delivering the products on schedule has always been our prime objective, any compromise on safety in execution and quality of deliverable were never even considered as an option. The result has been rewarding with our deliverables always being in line with and even exceeding the expectations from clients."'}
              </p>
              <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gold text-lg uppercase">Domingos Augusto</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">
                    General Manager • Sonamet Industrial S.A.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Management Roster */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, i) => (
              <Reveal key={`${leader.role}-${i}`} delay={i * 0.04}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-gold transition-all shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center mb-4 text-navy">
                      <Briefcase size={20} />
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-gold font-bold mb-1">
                      {leader.role}
                    </div>
                    <div className={`text-base font-bold uppercase ${leader.status === "tbn" ? "text-muted-foreground italic font-normal" : "text-foreground"}`}>
                      {leader.name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 text-[10px] uppercase text-muted-foreground font-semibold">
                    Sonamet Management
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
