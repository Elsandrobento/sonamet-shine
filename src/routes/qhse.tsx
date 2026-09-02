import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { 
  Leaf, 
  Award, 
  FileText, 
  Download, 
  ShieldCheck 
} from "lucide-react";
import whiteWorkshopImg from "@/assets/qhse-white-workshop.png";
import superduplexWeldingImg from "@/assets/superduplex-welding.png";
import qhseHero from "@/assets/qhse-hero.png";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/qhse")({
  head: () => ({
    meta: [
      { title: "QHSE — Qualidade, Saúde, Segurança & Ambiente | Sonamet" },
      { name: "description", content: "Sistema Integrado de Gestão QHSE da Sonamet com tripla certificação ISO 9001, ISO 14001 e ISO 45001. Cultura de HSE, Regras de Ouro de Segurança e Programa CARE." },
      { property: "og:title", content: "QHSE — Sonamet Industrial S.A." },
      { property: "og:image", content: whiteWorkshopImg },
    ],
  }),
  component: QHSE,
});

function QHSE() {
  const { language, t } = useLanguage();
  const lang = language;

  const isoCertifications = [
    {
      code: "ISO 9001",
      certifiedSince: language === "pt" ? "CERTIFICADA DESDE 2011" : "CERTIFIED SINCE 2011",
      title: language === "pt" ? "Sistema de Gestão da Qualidade" : "Quality Management System",
      desc: language === "pt"
        ? "Garantia da qualidade em todas as etapas da fabricação, qualificação de procedimentos de soldadura (WPQR) e processo integral de entrega para garantir a total satisfação do cliente."
        : "Quality assurance across fabrication, welding qualification (WPQR), and the full project delivery process to ensure complete client satisfaction.",
      pdf: "/documents/SONAMET_ISO_45001.pdf",
    },
    {
      code: "ISO 14001",
      certifiedSince: language === "pt" ? "CERTIFICADA DESDE 2016" : "CERTIFIED SINCE 2016",
      title: language === "pt" ? "Sistema de Gestão Ambiental" : "Environmental Management System",
      desc: language === "pt"
        ? "Minimização rigorosa do impacto ambiental através de práticas sólidas de gestão, controlo de emissões, gestão de resíduos e cumprimento estrito das obrigações de conformidade."
        : "Minimizing adverse environmental impact through strong management practices, emissions monitoring, waste reduction, and compliance fulfillment.",
      pdf: "/documents/SONAMET_ISO_14001.pdf",
    },
    {
      code: "ISO 45001",
      certifiedSince: language === "pt" ? "CERTIFICADA DESDE 2023" : "CERTIFIED SINCE 2023",
      title: language === "pt" ? "Saúde e Segurança Ocupacional" : "Occupational Health & Safety",
      desc: language === "pt"
        ? "Ambiente de trabalho seguro, prevenção de lesões e problemas de saúde relacionados com o trabalho e melhoria contínua do desempenho de Saúde e Segurança no Trabalho."
        : "Safe and healthy workplace, prevention of work-related injury and ill health, and continuous improvement of occupational safety performance.",
      pdf: "/documents/SONAMET_ISO_45001.pdf",
    },
  ];

  const policiesList = [
    { name: lang === "pt" ? "Política de Abuso de Substâncias" : "Substance Abuse Policy", file: "/documents/SON-MGT-PL-003_Substance_Abuse_Policy.pdf" },
    { name: lang === "pt" ? "Política de Controlo da Malária" : "Malaria Control Policy", file: "/documents/SON-MGT-PL-004_Malaria_Control_Policy.pdf" },
    { name: lang === "pt" ? "Política de Não Fumadores" : "Smoking Policy", file: "/documents/SON-MGT-PL-005_Smoking_Policy.pdf" },
    { name: lang === "pt" ? "Política de Responsabilidade Social" : "Social Responsibility Policy", file: "/documents/SON-MGT-PL-008_Social_Responsibility_Policy.pdf" },
    { name: lang === "pt" ? "Política de Aprovisionamento Mineral" : "Mineral Sourcing Policy", file: "/documents/MINERAL_SOURCING_POLICY.pdf" },
    { name: lang === "pt" ? "Política de QHSE" : "QHSE Policy", file: "/documents/SON-MGT-PL-001_QHSE_Policy.pdf" },
  ];

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "QHSE & SUSTENTABILIDADE" : "QHSE & SUSTAINABILITY"}
        title={lang === "pt" ? "Tripla Certificação & Melhoria Contínua" : "Triple Certification & Continuous Improvement"}
        description={lang === "pt"
          ? "A Sonamet opera sob um sistema de gestão integrado e totalmente certificado, cobrindo qualidade, ambiente e saúde e segurança ocupacional, auditado anualmente por entidades terceiras independentes."
          : "Sonamet operates under a fully certified Integrated Management System covering quality, environment, and occupational health & safety, audited annually by independent certification bodies."}
        image={qhseHero}
      />

      {/* TRIPLE ISO CERTIFICATIONS */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "CERTIFICAÇÕES INTERNACIONAIS" : "INTERNATIONAL CERTIFICATIONS"}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              {lang === "pt" ? "Sistema de Gestão Integrado" : "Integrated Management System"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {isoCertifications.map((iso) => (
              <div
                key={iso.code}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-gold hover:shadow-elegant transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-navy whitespace-nowrap shrink-0">
                      {iso.code}
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-gold uppercase tracking-wider bg-secondary px-2.5 py-1 rounded-full border border-border whitespace-nowrap">
                      {iso.certifiedSince}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{iso.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">{iso.desc}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <a
                    href={iso.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase text-navy hover:text-gold transition-colors"
                  >
                    <Download size={14} /> {lang === "pt" ? "VER CERTIFICADO (PDF)" : "VIEW CERTIFICATE (PDF)"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY MANAGEMENT SYSTEM SECTION */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, Description & 4 Stats Cards */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                QHSE
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                {lang === "pt" ? "Sistema de Gestão da Qualidade" : "Quality Management System"}
              </h2>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-8">
                {lang === "pt"
                  ? "A Sonamet possui um Sistema de Gestão da Qualidade robusto e sólido, alinhado com as normas internacionais, com experiência comprovada na soldadura de vários tipos de materiais, tais como aços de alta resistência, super duplex e soldaduras heterogéneas."
                  : "Sonamet has a strong and solid Quality Management System aligned with international standards with proven experience on welding various types of materials such as high strength steels, super duplex, and heterogeneous welds."}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold mb-1">500+</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {lang === "pt" ? "WPQRs Disponíveis" : "WPQRs Available"}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold mb-1">350+</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {lang === "pt" ? "Soldadores Qualificados" : "Qualified Welders"}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold mb-1">~20</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {lang === "pt" ? "Inspetores Locais Qualificados" : "Local Qualified Inspectors"}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold mb-1">&lt;4%</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {lang === "pt" ? "Taxa de Reparação (Small-bore)" : "Weld Repair Rate (Small-bore)"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Navy Card - Super Duplex Fabrication */}
            <div className="lg:col-span-5">
              <div className="bg-navy-deep text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-elegant">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-4">
                  {lang === "pt" ? "DIFERENCIAL-CHAVE" : "KEY DIFFERENTIATOR"}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                  {lang === "pt" ? "Fabricação em Super Duplex" : "Super Duplex Fabrication"}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5">
                  {lang === "pt"
                    ? "Quatro oficinas brancas dedicadas (4.700 m²) para fabricação de aço inoxidável, duplex e super duplex. 9 manifolds montados em simultâneo, 105 entregues até à data, e mais de 12.000 juntas de superduplex de pequeno diâmetro no Kaombo SPS com taxa de reparação de soldadura <4%."
                    : "Four dedicated white workshops (4,700 m²) for stainless steel, duplex and super duplex fabrication. 9 manifolds erected simultaneously, 105 delivered to date, and 12,000+ small-bore superduplex joints on Kaombo SPS with <4% weld repair rate."}
                </p>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-[16/10] bg-navy group">
                  <img
                    src={superduplexWeldingImg}
                    alt="Soldadura Super Duplex — Oficinas Brancas da Sonamet"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                      {lang === "pt"
                        ? "WPQR - Ensaios Mecânicos Realizados por Terceiros"
                        : "WPQR - Mechanical Testing Performed by Third Party"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. HSE CULTURE SECTION */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                <ShieldCheck size={14} className="mr-2" />
                {lang === "pt" ? "CULTURA DE HSE" : "HSE CULTURE"}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Trabalhe com Segurança… Viva com Confiança!
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                {lang === "pt"
                  ? "A Sonamet integra o HSE na sua cultura operacional, promovendo a eliminação de perigos, redução de riscos, prevenção da poluição e melhoria contínua para proteger as nossas pessoas, parceiros, comunidades e o ambiente."
                  : "Sonamet embeds HSE into its operational culture, promoting hazard elimination, risk reduction, pollution prevention and continuous improvement to protect our people, partners, communities and the environment."}
              </p>

              {/* HSE Culture 3 Pillars Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center max-w-5xl mx-auto">
                {/* Card 1: Zero Incidents */}
                <div className="bg-card text-foreground rounded-2xl p-7 border border-border shadow-md flex flex-col items-center hover:border-gold transition-all group">
                  <div className="h-14 w-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-navy-deep mb-2.5">
                    {lang === "pt" ? "Zero Incidentes" : "Zero Incidents"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {lang === "pt"
                      ? "Executar o trabalho sem incidentes para as nossas pessoas, parceiros/clientes e comunidades."
                      : "Execute the work without incidents for our people, our partners/clients and our communities."}
                  </p>
                </div>

                {/* Card 2: Environmental Protection */}
                <div className="bg-card text-foreground rounded-2xl p-7 border border-border shadow-md flex flex-col items-center hover:border-gold transition-all group">
                  <div className="h-14 w-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                    <Leaf size={28} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-navy-deep mb-2.5">
                    {lang === "pt" ? "Proteção Ambiental" : "Environmental Protection"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {lang === "pt"
                      ? "Minimizar o impacto ambiental adverso através de práticas rigorosas de gestão e conformidade."
                      : "Minimizing adverse environmental impact through strong management practices and compliance."}
                  </p>
                </div>

                {/* Card 3: Continuous Improvement */}
                <div className="bg-card text-foreground rounded-2xl p-7 border border-border shadow-md flex flex-col items-center hover:border-gold transition-all group">
                  <div className="h-14 w-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                    <Award size={28} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-navy-deep mb-2.5">
                    {lang === "pt" ? "Melhoria Contínua" : "Continuous Improvement"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {lang === "pt"
                      ? "Melhoria contínua do desempenho dos nossos sistemas de gestão através de auditorias regulares internas e de terceiros."
                      : "Continual improvement of our management systems performance through regular internal and third-party audits."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SONAMET HSE GOLDEN RULES SECTION */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-card border-2 border-border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                  <Award size={16} className="mr-2" />
                  {lang === "pt" ? "REGRAS DE SEGURANÇA" : "SAFETY RULES"}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6">
                  {lang === "pt" ? "Regras de Ouro de HSE da Sonamet" : "Sonamet HSE Golden Rules"}
                </h2>
                <p className="text-foreground/85 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                  {lang === "pt"
                    ? "As Regras de Ouro de HSE da Sonamet fortalecem a nossa cultura de segurança através da responsabilidade pessoal, prevenção, aprendizagem contínua e Autoridade de Paragem de Trabalho (Stop Work Authority)."
                    : "Sonamet's HSE Golden Rules strengthen our safety culture through personal responsibility, prevention, continuous learning and Stop Work Authority."}
                </p>
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs uppercase font-bold text-muted-foreground">
                    {lang === "pt" ? "Documento Oficial de Regras de Ouro" : "Official Golden Rules Document"}
                  </span>
                  <a
                    href="/documents/SONAMET_GOLDEN_RULES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-xs sm:text-sm font-bold uppercase text-white hover:bg-navy-light transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Download size={15} /> {lang === "pt" ? "DESCARREGAR REGRAS DE OURO (PDF)" : "DOWNLOAD GOLDEN RULES (PDF)"}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CARE PROGRAM SECTION */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-card border-2 border-border rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                  <Leaf size={16} className="mr-2" />
                  {lang === "pt" ? "AMBIENTAL" : "ENVIRONMENTAL"}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
                  {lang === "pt" ? "Programa C.A.R.E." : "C.A.R.E. Program"}
                </h2>
                <p className="text-foreground/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {lang === "pt"
                    ? "O Programa SONAMET C.A.R.E. fortalece a nossa cultura ambiental promovendo:"
                    : "The SONAMET C.A.R.E. Program strengthens our environmental culture by promoting:"}
                </p>

                <ul className="space-y-3 text-xs sm:text-sm md:text-base text-foreground/90 bg-secondary/60 p-6 rounded-2xl border border-border">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-semibold">{lang === "pt" ? "Consciencialização ambiental" : "Environmental awareness"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-semibold">{lang === "pt" ? "Responsabilidade pessoal" : "Personal responsibility"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-semibold">{lang === "pt" ? "Boas práticas ambientais" : "Good environmental practices"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-semibold">{lang === "pt" ? "Prevenção da poluição e mudança comportamental" : "Pollution prevention and behavioral change"}</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="/documents/SONAMET_CARE_PROGRAM.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-xs sm:text-sm font-bold uppercase text-white hover:bg-navy-light transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Download size={15} /> {lang === "pt" ? "DESCARREGAR PROGRAMA C.A.R.E. (PDF)" : "DOWNLOAD C.A.R.E. PROGRAM (PDF)"}
                  </a>
                </div>
              </div>

              {/* Operational QHSE Commitment */}
              <div className="mt-8 bg-card border-2 border-border rounded-3xl p-8 sm:p-12 shadow-sm">
                <p className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {lang === "pt"
                    ? "O nosso sucesso depende da melhoria contínua dos nossos processos, protegendo ao mesmo tempo as nossas pessoas, o ambiente e as comunidades onde operamos."
                    : "Our success depends on the continuous improvement of our processes, while protecting our people, the environment and the communities where we operate."}
                </p>
                <h4 className="font-display text-base sm:text-lg font-bold text-navy mb-4">
                  {lang === "pt"
                    ? "Nas nossas operações diárias, estamos comprometidos em:"
                    : "In our daily operations, we are committed to:"}
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm md:text-base text-foreground/90 bg-secondary/60 p-6 rounded-2xl border border-border mb-5">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-medium">{lang === "pt" ? "Proteger a saúde e segurança dos nossos colaboradores" : "Protecting the health and safety of our employees"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-medium">{lang === "pt" ? "Prevenir danos ao meio ambiente" : "Preventing harm to the environment"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-medium">{lang === "pt" ? "Melhorar continuamente a qualidade e o desempenho operacional" : "Continuously improving quality and operational performance"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">▸</span>
                    <span className="font-medium">{lang === "pt" ? "Manter relações positivas com as nossas comunidades locais." : "Maintaining positive relationships with our local communities."}</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed italic border-t border-border pt-4">
                  {lang === "pt"
                    ? "Este compromisso é liderado pela Direção para salvaguardar os interesses dos nossos clientes, colaboradores, acionistas, fornecedores e comunidades."
                    : "This commitment is driven by Management to safeguard the interests of our clients, employees, shareholders, suppliers and communities."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CENTER */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "CENTRO DE DOCUMENTAÇÃO" : "DOCUMENTATION CENTER"}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              {lang === "pt" ? "Políticas Corporativas" : "Corporate Policies"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {policiesList.map((pol) => (
              <a
                key={pol.name}
                href={pol.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-2xl p-5 hover:border-gold hover:shadow-elegant transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-foreground group-hover:text-navy transition-colors">{pol.name}</h5>
                    <span className="text-[10px] text-muted-foreground uppercase">{lang === "pt" ? "DOCUMENTO PDF OFICIAL" : "OFFICIAL PDF"}</span>
                  </div>
                </div>
                <Download size={16} className="text-muted-foreground group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
