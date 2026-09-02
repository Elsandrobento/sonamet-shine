import { createFileRoute } from "@tanstack/react-router";
import { Reveal, HoverCard } from "@/components/Reveal";
import { Anchor, Wrench, Layers, Warehouse, Shield, Award, CheckCircle2, Users, HardHat, HeartHandshake, FileText, Download, User, Cpu, PackageCheck, Flame, Eye, Paintbrush, Ship } from "lucide-react";
import aboutUsPhoto from "@/assets/about-us-foto.jpg";
import pcaPhoto from "@/assets/PCA.png";
import joinVenture from "@/assets/join-venture.png";
import team from "@/assets/team.jpg";
import photoCarlosPaixao from "@/assets/team-carlos-paixao.jpg";
import photoMarcolinoTrosso from "@/assets/team-marcolino-trosso.jpg";
import photoDomingosAugusto from "@/assets/team-domingos-augusto.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "A Empresa — Sonamet Industrial S.A." },
      { name: "description", content: "Líder na fabricação de estruturas metálicas para o setor petrolífero em Angola desde 1998. Joint Venture entre a Sonangol (40%) e a Subsea7 (60%)." },
      { property: "og:title", content: "A Empresa — Sonamet Industrial S.A." },
      { property: "og:image", content: aboutUsPhoto },
    ],
  }),
  component: About,
});

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "1998", label: t("Ano de Fundação", "Year Established") },
    { value: "80 Ha", label: t("Área de Instalações", "Facility Area") },
    { value: "1.039 M", label: t("Comprimento da Spoolbase", "Spoolbase Length") },
    { value: "1.300+", label: t("Colaboradores em Época Alta", "Peak Workforce") },
  ];

  // 10 Official Capabilities Cards from client specifications
  const capabilities = [
    {
      icon: PackageCheck,
      title: "PROCUREMENT",
      desc: t(
        "Matérias-primas e consumíveis de projeto.",
        "Raw materials and project consumables."
      ),
    },
    {
      icon: Cpu,
      title: t("ENGENHARIA E MÉTODOS", "ENGINEERING & METHOD DEPARTMENT"),
      desc: t(
        "As equipas de Engenharia e Métodos da Sonamet fornecem suporte técnico integrado ao longo de todo o ciclo de vida do projeto, garantindo uma execução segura, eficiente e de alta qualidade.",
        "Sonamet’s Engineering & Methods teams provide integrated technical support throughout the project lifecycle, ensuring safe, efficient and high-quality execution"
      ),
    },
    {
      icon: Wrench,
      title: t("FABRICAÇÃO", "FABRICATION"),
      desc: t(
        "Projetos de Águas Rasas, EPCI, Subsea e SURF.",
        "Shallow Water, EPCI, Subsea and SURF projects."
      ),
    },
    {
      icon: Flame,
      title: t("SOLDADURA", "WELDING"),
      desc: t(
        "Capacidades avançadas de soldadura estrutural e de tubagens, suportadas por mais de 550 PQRs, mais de 500 máquinas de soldar e mais de 45 soldadores qualificados. Experiência desde Aço Inoxidável 316L até Super Duplex, com baixas taxas de reparação comprovadas e capacidade de soldadura orbital.",
        "Advanced structural and piping welding capabilitie, supported by +550 PQRs, +500 welding machines and +45 qualified welders. Expertise ranges from 316L Stainless Steel to Super Duplex, with proven low repair rates and orbital welding capabilities."
      ),
    },
    {
      icon: Eye,
      title: "NDT",
      desc: t(
        "Capacidades de inspeção Visual, MPI, UT e RT.",
        "Visual, MPI, UT and RT inspection capabilities."
      ),
    },
    {
      icon: Paintbrush,
      title: t("PINTURA E REVESTIMENTO", "PAINTING & COATING"),
      desc: t(
        "Capacidades internas com capacidade adicional disponível de acordo com os requisitos do projeto.",
        "In-house capabilities with additional capacity avaliable according to project requirements."
      ),
    },
    {
      icon: CheckCircle2,
      title: "FAT",
      desc: t(
        "Experiência comprovada em atividades complexas de FAT. Testes simultâneos de até 3 manifolds e mobilização de até 11 equipas de RT.",
        "Proven experience in complex FAT activities. Simultaneous testing of up to 3 manifolds and mobilisation of up to 11 RT teams."
      ),
    },
    {
      icon: Ship,
      title: "LOADOUT",
      desc: t(
        "Até 2.000 MT para loadout assistido por grua. Capacidade de loadout por skidded até 6.000 MT.",
        "Up to 2.000 MT for crane-assisted loadout. Skidded loadout capacity up to 6,000 MT."
      ),
    },
    {
      icon: Warehouse,
      title: t("ARMAZENAMENTO", "STORAGE"),
      desc: t(
        "Mais de 19.295 m² de área de armazenamento disponível.",
        "More than 19,295 m² of available storage area."
      ),
    },
    {
      icon: Layers,
      title: t("DESMANTELAMENTO", "DISMANTLING"),
      desc: t(
        "Capacidade para apoiar atividades de desmantelamento e desativação de infraestruturas.",
        "Capability to support dismantling and decommissioning-related activities."
      ),
    },
  ];

  const threePromises = [
    {
      title: t("SEGURANÇA", "SAFETY"),
      desc: t(
        "Executar o trabalho sem incidentes para as nossas pessoas, os nossos parceiros/clientes e as nossas comunidades.",
        "Execute the work without incidents for our people, our partners/clients and our communities."
      ),
      icon: Shield,
    },
    {
      title: t("QUALIDADE", "QUALITY"),
      desc: t(
        "Entregar produtos de alta qualidade que cumprem integralmente as normas internacionais.",
        "Deliver high-quality products that meet international standards."
      ),
      icon: Award,
    },
    {
      title: t("NO PRAZO", "ON SCHEDULE"),
      desc: t(
        "Concluir o trabalho atempadamente e de acordo com as expetativas dos clientes.",
        "Complete the work timely and in line with client expectations."
      ),
      icon: CheckCircle2,
    },
  ];

  const values = [
    { icon: Users, label: t("As Nossas Pessoas", "Our People") },
    { icon: Shield, label: t("Segurança e Ambiente", "Safety and Environment") },
    { icon: Award, label: t("Foco no Cliente", "Client Focus") },
    { icon: HardHat, label: t("Compromisso com a Excelência", "Commitment to Excellence") },
    { icon: HeartHandshake, label: t("Envolvimento Comunitário", "Community Involvement") },
  ];

  const leadershipRoster = [
    { name: "Olivier Mollaret", role: t("Director Geral Adjunto", "Deputy General Manager"), photo: undefined, photoPosition: "object-center" },
    { name: "Carlos Paixão", role: t("Director Financeiro e Administrativo", "Financial & Administrative Manager"), photo: photoCarlosPaixao, photoPosition: "object-top" },
    { name: "Sandro Ferreira", role: t("Director Comercial e Marketing", "Sales & Marketing Manager"), photo: undefined, photoPosition: "object-center" },
    { name: "Domingos Augusto", role: t("Director de Recursos Humanos", "HR Manager"), photo: photoDomingosAugusto, photoPosition: "object-center" },
    { name: "Marcolino Trosso", role: t("Director de QHSE", "QHSE Manager"), photo: photoMarcolinoTrosso, photoPosition: "object-top" },
    { name: t("A nomear", "To be nominated"), role: t("Director de Projetos", "Projects Director"), photo: undefined, photoPosition: "object-center" },
    { name: t("A nomear", "To be nominated"), role: t("Director de SCM e Serviços Gerais", "SCM & General Services Manager"), photo: undefined, photoPosition: "object-center" },
  ];

  return (
    <>
      {/* 1. HERO — YouTube Video Background + Stats Bar */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/z10zL3q0u70?autoplay=1&mute=1&loop=1&playlist=z10zL3q0u70&controls=0&playsinline=1&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&showinfo=0&enablejsapi=1&vq=hd1080"
              title="Sonamet Corporate Video"
              allow="autoplay; encrypted-media"
              className="absolute w-[100vw] h-[56.25vw] min-h-full min-w-[177.78vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/10 to-transparent opacity-80" />

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-navy-deep/85 backdrop-blur-md z-20">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.2 + i * 0.1}>
                <div className="py-5 px-3 md:py-6 md:px-4 text-center">
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gold">{s.value}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT — Overview Section */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("SOBRE NÓS", "ABOUT US")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight leading-snug">
                Made in Angola<br />
                Built for the World
              </h2>
              <p className="text-base md:text-lg text-foreground/85 font-medium leading-relaxed mb-3">
                {t(
                  "Estabelecida em 1998 e estrategicamente localizada na Baía do Lobito, Angola.",
                  "Established in 1998 and strategically located in Angola's Lobito Bay."
                )}
              </p>
              <p className="text-base md:text-lg text-foreground/85 font-medium leading-relaxed mb-6">
                {t(
                  "A Sonamet tornou-se uma das principais empresas de fabricação e construção na região.",
                  "Sonamet has become one of the leading fabrication and construction companies in the region."
                )}
              </p>
              <ul className="space-y-3.5 mb-8">
                {[
                  t("Instalação de fabricação baseada no Lobito", "Fabrication facility based in Lobito"),
                  t("Projetos EPC/EPCI, Armazenamento, Desmantelamento e Serviços de Assistência Técnica", "EPC/EPCI Projects, Storage, Dismantling and Technical Assistance Services"),
                  t("Fortes capacidades de suporte a projetos offshore complexos", "Strong capabilities supporting complex offshore projects"),
                  t("Força de trabalho maioritariamente angolana, representando um modelo sólido de conteúdo local e desenvolvimento industrial em África.", "Majority Angolan workforce, representing a strong model for local content and industrial development in Africa."),
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="text-foreground/90 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              <img
                src={aboutUsPhoto}
                alt="Sonamet yard at Lobito Bay"
                loading="lazy"
                width={1600}
                height={1000}
                className="rounded-2xl shadow-elegant w-full object-cover"
              />
              <div className="absolute -bottom-5 right-4 sm:-bottom-6 sm:right-6 bg-gradient-gold rounded-2xl px-5 py-4 sm:p-5 shadow-gold animate-float z-10">
                <div className="font-display text-2xl sm:text-3xl font-bold text-navy-deep">28 {t("Anos", "Years")}</div>
                <div className="text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-wider text-navy-deep/85 mt-0.5 whitespace-nowrap">
                  {t("Anos a Entregar Excelência", "Years Delivering Excellence")}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CAPABILITIES Section */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {t("CAPACIDADES", "CAPABILITIES")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                {t("Soluções Integradas para a Indústria de Óleo e Gás", "Integrated Solutions for the Oil & Gas Industry")}
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                {t(
                  "A operar desde 1998, a Sonamet fornece soluções integradas de fabricação e construção para desenvolvimentos offshore complexos, combinando capacidades de aprovisionamento, fabricação, soldadura, testes, revestimento, loadout, desmantelamento e armazenamento.",
                  "Operating since 1998, Sonamet provides integrated fabrication and construction solutions for complex offshore developments, combining procurement, fabrication, welding, testing, coating, loadout, dismantling and storage capabilities."
                )}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {capabilities.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full bg-card rounded-2xl p-6 border border-border hover:border-gold hover:shadow-elegant transition-all duration-300 flex flex-col justify-between flex-1">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shrink-0 shadow-sm">
                        <s.icon className="text-navy-deep" size={24} />
                      </div>
                      <h3 className="text-base md:text-lg font-bold mb-2.5 text-foreground tracking-wide">{s.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE Section */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                    {t("GOVERNAÇÃO", "GOVERNANCE")}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    {t("Estrutura Acionista", "Shareholding Structure")}
                  </h2>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-medium">
                    {t(
                      "A Sonamet é uma Joint Venture constituída pela Sonangol com 40% e pela Subsea7 com 60%.",
                      "Sonamet is a joint venture between Sonangol with 40% and Subsea7 with 60%."
                    )}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={joinVenture}
                    alt="Sonamet is a joint venture between Sonangol with 40% and Subsea7 with 60%"
                    loading="lazy"
                    className="max-w-xs md:max-w-sm w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. THREE PROMISES, ONE COMMITMENT Section */}
      <section className="py-20 md:py-28 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${team})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {t("FILOSOFIA DA SONAMET", "SONAMET PHILOSOPHY")}
            </div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {t("Três Promessas, Um Compromisso", "Three Promises, One Commitment")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {threePromises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="h-full flex flex-col">
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7 text-center hover:bg-white/10 hover:border-gold/50 transition-all flex flex-col justify-between items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold mb-4">
                      <p.icon size={24} />
                    </div>
                    <div className="inline-block bg-gold text-navy-deep text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3.5">
                      {p.title}
                    </div>
                    <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR MISSION AND VALUES Section */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                {t("Nossa Missão e Valores", "Our Mission and Values")}
              </h2>
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed text-justify font-medium">
                {t(
                  "Entregar projetos de desenvolvimento de Engenharia, Aprovisionamento e Construção de última geração para a indústria de óleo e gás em Angola. Liderar o desenvolvimento e transferência de tecnologia para participar no crescimento a longo prazo da indústria petrolífera local e do capital humano. Tornar o 'Made in Angola' uma meta a alcançar para um negócio equilibrado entre todos os parceiros envolvidos.",
                  "Deliver state-of-the-art Engineering, Procurement and Construction development projects for the oil and gas industry in Angola. Lead the development and transfer of technology to participate in the long-term growth of local oil and gas industry and human capital. Enable 'Made in Angola' a target to reach for a balanced business between all partners involved."
                )}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="max-w-3xl mx-auto mb-6 text-center">
              <p className="text-xs font-bold text-foreground/75 uppercase tracking-[0.2em]">
                {t("Os valores da Sonamet são", "Sonamet’s values are")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto items-stretch">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.06} className="h-full flex flex-col">
                <div className="h-full rounded-2xl border-2 border-border p-5 text-center hover:border-gold hover:bg-card transition-all bg-card/60 flex flex-col items-center justify-center shadow-sm flex-1 min-h-[120px]">
                  <v.icon className="text-gold mb-2.5" size={26} />
                  <div className="font-semibold text-xs md:text-sm text-foreground text-center">{v.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CODE OF CONDUCT Section */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="container-x">
          <Reveal>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2.5">
                  <FileText size={15} />
                  {t("CÓDIGO DE CONDUTA", "CODE OF CONDUCT")}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3.5 text-foreground tracking-tight">
                  {t("Ética Empresarial", "Business Ethics")}
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xs md:text-sm text-justify">
                  {t(
                    "Na Sonamet SA, estamos dedicados a manter os mais elevados padrões de ética empresarial. Integridade, transparência e respeito por todas as partes interessadas guiam as nossas decisões e ações. Estamos comprometidos em operar de forma responsável, tratando os nossos colaboradores, clientes, fornecedores e as comunidades onde atuamos com justiça e honestidade. Os nossos princípios éticos constituem a base de tudo o que fazemos, garantindo confiança e sustentabilidade a longo prazo.",
                    "At Sonamet SA, we are dedicated to upholding the highest standards of business ethics. Integrity, transparency, and respect for all stakeholders guide on our decisions and actions. We are committed to operating responsibly, treating our employees, customers, suppliers, and the communities in which we operate with fairness and honesty. Our ethical principles form the foundation of everything we do, ensuring trust and long-term sustainability."
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end justify-center gap-3">
                <a
                  href="/documents/Sonamet_Code_of_Business_Conduct_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-navy text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-navy-deep hover:text-gold transition-all text-center"
                >
                  <Download size={16} />
                  {t("Código de Conduta Empresarial Sonamet", "Sonamet Code of Business Conduct")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. LEADERSHIP Section */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {t("Liderança", "Leadership")}
              </h2>
            </div>
          </Reveal>

          {/* General Manager Quote Card */}
          <div className="max-w-4xl mx-auto mb-12 bg-gradient-navy text-white rounded-3xl p-7 md:p-10 border border-white/10 shadow-elegant relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-4 gap-6 md:gap-8 items-center">
              <div className="hidden md:block md:col-span-1">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/50 shadow-gold max-w-[120px] mx-auto bg-navy-deep">
                  <img src={pcaPhoto} alt="Domingos Augusto" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="font-display italic text-sm md:text-base leading-relaxed text-white/95 mb-5 text-justify font-normal">
                  {t(
                    "\"Os anos de trabalho árduo dos nossos colaboradores e as realizações ao longo do tempo só foram possíveis graças ao nosso foco absoluto na segurança e na qualidade. Embora a entrega atempada dos produtos tenha sido sempre o nosso principal objetivo, qualquer cedência na segurança ou na qualidade das entregas nunca foi sequer considerada como opção. O resultado tem sido recompensador, com os nossos resultados a corresponderem e mesmo a superarem as expetativas dos clientes.\"",
                    "\"The years of hard work by our employees and the accomplishments over the time was made possible only by our focus on safety and quality. Although, delivering the products on schedule has always been our prime objective, any compromise on safety in execution and quality of deliverable were never even considered as an option. The result has been rewarding with our deliverables always being in line with and even exceeding the expectations from clients.\""
                  )}
                </p>
                <div className="border-t border-white/15 pt-3.5 text-right">
                  <div className="font-bold text-gold text-base uppercase">Domingos Augusto</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">
                    {t("Director Geral", "General Manager")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roster of 7 Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {leadershipRoster.map((leader, i) => (
              <Reveal key={i} delay={i * 0.05} className="h-full flex flex-col">
                <HoverCard className="h-full flex flex-col flex-1">
                  <div className="h-full bg-card rounded-2xl p-6 border border-border hover:border-gold hover:shadow-elegant transition-all text-center flex flex-col justify-between flex-1">
                    <div>
                      {/* Circular photo placeholder with user icon or real photo */}
                      <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-gold/40 overflow-hidden bg-secondary/80 flex items-center justify-center mx-auto mb-4 text-muted-foreground shrink-0 shadow-md">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={leader.name}
                            className={`h-full w-full object-cover ${leader.photoPosition || "object-center"}`}
                          />
                        ) : (
                          <User size={36} className="text-muted-foreground/60" />
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold mb-1.5 text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-[10.5px] sm:text-[11px] font-semibold text-gold uppercase tracking-wider leading-snug">
                        {leader.role}
                      </p>
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
