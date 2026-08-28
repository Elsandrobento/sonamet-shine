import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { 
  Shield, 
  Leaf, 
  Award, 
  HeartPulse, 
  CheckCircle2, 
  FileText, 
  Download, 
  Activity, 
  Ambulance, 
  ShieldCheck 
} from "lucide-react";
import whiteWorkshopImg from "@/assets/qhse-white-workshop.png";
import medicalCenterImg from "@/assets/qhse-medical-center.avif";
import yardHero from "@/assets/foto-yard.jpg";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/qhse")({
  head: () => ({
    meta: [
      { title: "QHSE — Qualidade, Saúde, Segurança & Ambiente | Sonamet" },
      { name: "description", content: "Sistema Integrado de Gestão QHSE da Sonamet com tripla certificação ISO 9001 (desde 2011), ISO 14001 (desde 2016) e ISO 45001 (desde 2023). Regras de Ouro de Segurança, Programa CARE e Posto Médico próprio." },
      { property: "og:title", content: "QHSE — Sonamet Industrial S.A." },
      { property: "og:image", content: whiteWorkshopImg },
    ],
  }),
  component: QHSE,
});

function QHSE() {
  const { lang } = useLanguage();

  const isoCertifications = [
    {
      code: "ISO 9001",
      certifiedSince: lang === "pt" ? "CERTIFICADA DESDE 2011" : "CERTIFIED SINCE 2011",
      title: lang === "pt" ? "SISTEMA DE GESTÃO DA QUALIDADE" : "QUALITY MANAGEMENT SYSTEM",
      desc: lang === "pt"
        ? "Garantia da qualidade em todas as etapas da fabricação, qualificação de procedimentos de soldadura (WPQR) e processo integral de entrega para garantir a total satisfação do cliente."
        : "Quality assurance across fabrication, welding qualification (WPQR), and the full project delivery process to ensure complete client satisfaction.",
      pdf: "/documents/SON-MGT-PL-001_QHSE_Policy.pdf",
    },
    {
      code: "ISO 14001",
      certifiedSince: lang === "pt" ? "CERTIFICADA DESDE 2016" : "CERTIFIED SINCE 2016",
      title: lang === "pt" ? "SISTEMA DE GESTÃO AMBIENTAL" : "ENVIRONMENTAL MANAGEMENT SYSTEM",
      desc: lang === "pt"
        ? "Minimização rigorosa do impacto ambiental através de práticas sólidas de gestão, controlo de emissões, gestão de resíduos e cumprimento estrito das obrigações de conformidade."
        : "Minimizing adverse environmental impact through strong management practices, emissions monitoring, waste reduction, and compliance fulfillment.",
      pdf: "/documents/SONAMET_ISO_14001.pdf",
    },
    {
      code: "ISO 45001",
      certifiedSince: lang === "pt" ? "CERTIFICADA DESDE 2023" : "CERTIFIED SINCE 2023",
      title: lang === "pt" ? "SAÚDE E SEGURANÇA OCUPACIONAL" : "OCCUPATIONAL HEALTH & SAFETY",
      desc: lang === "pt"
        ? "Ambiente de trabalho seguro, prevenção de lesões e problemas de saúde relacionados com o trabalho e melhoria contínua do desempenho de Saúde e Segurança no Trabalho."
        : "Safe and healthy workplace, prevention of work-related injury and ill health, and continuous improvement of occupational safety performance.",
      pdf: "/documents/SONAMET_ISO_45001.pdf",
    },
  ];

  const policiesList = [
    { name: lang === "pt" ? "POLÍTICA DE QHSE (REV. 4.0)" : "QHSE POLICY (REV. 4.0)", file: "/documents/SON-MGT-PL-001_QHSE_Policy.pdf" },
    { name: lang === "pt" ? "REGRAS DE OURO DE SEGURANÇA" : "HSE GOLDEN RULES", file: "/documents/SONAMET_GOLDEN_RULES.pdf" },
    { name: lang === "pt" ? "POLÍTICA DE ABUSO DE SUBSTÂNCIAS" : "SUBSTANCE ABUSE POLICY", file: "/documents/SON-MGT-PL-003_Substance_Abuse_Policy.pdf" },
    { name: lang === "pt" ? "POLÍTICA DE CONTROLO DA MALÁRIA" : "MALARIA CONTROL POLICY", file: "/documents/SON-MGT-PL-004_Malaria_Control_Policy.pdf" },
    { name: lang === "pt" ? "POLÍTICA DE NÃO FUMADORES" : "SMOKING POLICY", file: "/documents/SON-MGT-PL-005_Smoking_Policy.pdf" },
    { name: lang === "pt" ? "POLÍTICA DE RESPONSABILIDADE SOCIAL" : "SOCIAL RESPONSIBILITY POLICY", file: "/documents/SON-MGT-PL-008_Social_Responsibility_Policy.pdf" },
    { name: lang === "pt" ? "POLÍTICA DE APROVISIONAMENTO MINERAL" : "MINERAL SOURCING POLICY", file: "/documents/MINERAL_SOURCING_POLICY.pdf" },
    { name: lang === "pt" ? "CERTIFICADO UKAS ISO 14001" : "ISO 14001 CERTIFICATE", file: "/documents/SONAMET_ISO_14001.pdf" },
    { name: lang === "pt" ? "CERTIFICADO ISO 45001" : "ISO 45001 CERTIFICATE", file: "/documents/SONAMET_ISO_45001.pdf" },
    { name: lang === "pt" ? "CÓDIGO DE CONDUTA EMPRESARIAL" : "CODE OF BUSINESS CONDUCT", file: "/documents/Sonamet_Code_of_Business_Conduct_2024.pdf" },
  ];

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "QHSE & SUSTENTABILIDADE" : "QHSE & SUSTAINABILITY"}
        title={lang === "pt" ? "TRIPLA CERTIFICAÇÃO & MELHORIA CONTÍNUA" : "TRIPLE CERTIFICATION & CONTINUOUS IMPROVEMENT"}
        description={lang === "pt"
          ? "A Sonamet opera sob um sistema de gestão integrado e totalmente certificado, cobrindo qualidade, ambiente e saúde e segurança ocupacional, auditado anualmente por entidades terceiras independentes."
          : "Sonamet operates under a fully certified Integrated Management System covering quality, environment, and occupational health & safety, audited annually by independent certification bodies."}
        image={yardHero}
      />

      {/* TRIPLE ISO CERTIFICATIONS */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "CERTIFICAÇÕES INTERNACIONAIS" : "INTERNATIONAL CERTIFICATIONS"}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold uppercase">
              {lang === "pt" ? "SISTEMA DE GESTÃO INTEGRADO" : "INTEGRATED MANAGEMENT SYSTEM"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {isoCertifications.map((iso) => (
              <div
                key={iso.code}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-gold hover:shadow-elegant transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-extrabold text-navy">{iso.code}</span>
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-secondary px-3 py-1 rounded-full border border-border">
                      {iso.certifiedSince}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground mb-3">{iso.title}</h3>
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

      {/* KEY DIFFERENTIATORS: WHITE WORKSHOPS & QUALITY */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "DIFERENCIADOR COMPETITIVO" : "COMPETITIVE DIFFERENTIATOR"}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold uppercase text-navy">
              {lang === "pt" ? "VANTAGEM EM SUPER DUPLEX & QUALIDADE" : "SUPER DUPLEX & QUALITY ADVANTAGE"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                <h4 className="text-base font-bold uppercase text-navy mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  {lang === "pt" ? "OFICINAS BRANCAS & FABRICAÇÃO SUBMARINA" : "WHITE WORKSHOPS & SUBSEA FABRICATION"}
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-foreground/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong>4.700 M²</strong> {lang === "pt" ? "de superfície para pré-fabricação em aço inoxidável e duplex." : "surface for stainless steel, duplex, and super duplex fabrication."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong>9 MANIFOLDS</strong> {lang === "pt" ? "erguidos e montados em simultâneo." : "erected and fabricated simultaneously."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong>105 MANIFOLDS</strong> {lang === "pt" ? "entregues com total segurança até à data." : "safely delivered to global clients to date."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong>12.000+</strong> {lang === "pt" ? "juntas de pequeno diâmetro em superduplex executadas no Kaombo SPS." : "small-bore superduplex joints welded on Kaombo SPS."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong>&lt; 4%</strong> {lang === "pt" ? "de taxa de reparação de soldadura para tubagens de pequeno diâmetro." : "weld repair rate on small-bore piping."}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                <h4 className="text-base font-bold uppercase text-navy mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  {lang === "pt" ? "SISTEMA DE GESTÃO DA QUALIDADE (QMS)" : "QUALITY MANAGEMENT SYSTEM (QMS)"}
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center mb-4">
                  <div className="bg-secondary p-3 rounded-xl border border-border">
                    <div className="font-display text-2xl font-bold text-navy">500+</div>
                    <div className="text-[9px] uppercase font-bold text-muted-foreground mt-1">{lang === "pt" ? "WPQRs DISPONÍVEIS" : "AVAILABLE WPQRS"}</div>
                  </div>
                  <div className="bg-secondary p-3 rounded-xl border border-border">
                    <div className="font-display text-2xl font-bold text-navy">350+</div>
                    <div className="text-[9px] uppercase font-bold text-muted-foreground mt-1">{lang === "pt" ? "SOLDADORES QUALIFICADOS" : "QUALIFIED WELDERS"}</div>
                  </div>
                  <div className="bg-secondary p-3 rounded-xl border border-border">
                    <div className="font-display text-2xl font-bold text-navy">~20</div>
                    <div className="text-[9px] uppercase font-bold text-muted-foreground mt-1">{lang === "pt" ? "INSPETORES LOCAIS" : "LOCAL INSPECTORS"}</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lang === "pt"
                    ? "Ensaios mecânicos e qualificações WPQR realizados por entidades terceiras independentes com rastreabilidade total."
                    : "Mechanical testing and WPQR qualifications conducted by independent third parties with full material traceability."}
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={whiteWorkshopImg}
                alt="Manifold em fabricação na White Workshop da Sonamet"
                loading="lazy"
                width={800}
                height={600}
                className="rounded-3xl shadow-elegant w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/95 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 text-xs uppercase">
                <span className="font-bold text-gold">WHITE WORKSHOP:</span>{" "}
                {lang === "pt"
                  ? "Ambiente controlado com soldadura orbital e proteção contra contaminação cruzada."
                  : "Controlled cleanroom environment with orbital welding and cross-contamination prevention."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE GOLDEN RULES & CARE PROGRAM */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              {lang === "pt" ? "PROGRAMAS HSE" : "HSE PROGRAMMES"}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold uppercase">
              {lang === "pt" ? "REGRAS DE OURO & PROGRAMA C.A.R.E." : "GOLDEN RULES & C.A.R.E. PROGRAMME"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Golden Rules */}
            <div className="bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-gold mb-3 uppercase tracking-wide">
                  {lang === "pt" ? "REGRAS DE OURO DE HSE SONAMET" : "SONAMET HSE GOLDEN RULES"}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                  {lang === "pt"
                    ? "As Regras de Ouro de HSE da Sonamet reforçam uma cultura de segurança sólida, encorajando cada colaborador a assumir a responsabilidade, prevenir situações inseguras, aprender continuamente e parar qualquer ato ou condição insegura (Stop Work Authority)."
                    : "Sonamet's HSE Golden Rules reinforce a strong safety culture, encouraging everyone to take responsibility, prevent unsafe situations, learn continuously, and stop any unsafe act or condition (Stop Work Authority)."}
                </p>
                <ul className="space-y-2 text-xs uppercase text-white/80 mb-6">
                  <li className="flex items-center gap-2">✓ {lang === "pt" ? "Autoridade inegociável de Paragem de Trabalho" : "Non-negotiable Stop Work Authority"}</li>
                  <li className="flex items-center gap-2">✓ {lang === "pt" ? "Avaliação contínua de risco em todas as operações" : "Continuous risk assessment across operations"}</li>
                  <li className="flex items-center gap-2">✓ {lang === "pt" ? "Equipamento de Proteção Individual (EPI) obrigatório" : "Mandatory Personal Protective Equipment (PPE)"}</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/documents/SONAMET_GOLDEN_RULES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase text-navy-deep hover:bg-gold-soft transition-all"
                >
                  <Download size={14} /> {lang === "pt" ? "DESCARREGAR REGRAS DE OURO (PDF)" : "DOWNLOAD GOLDEN RULES (PDF)"}
                </a>
              </div>
            </div>

            {/* CARE Program */}
            <div className="bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Leaf className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-gold mb-3 uppercase tracking-wide">
                  PROGRAMA C.A.R.E.
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                  {lang === "pt"
                    ? "O objetivo do Programa SONAMET C.A.R.E. é fortalecer a cultura ambiental em toda a empresa através de 4 pilares estratégicos:"
                    : "The purpose of the SONAMET C.A.R.E. Programme is to strengthen environmental culture across the company through 4 pillars:"}
                </p>
                <div className="space-y-3 text-xs text-white/80 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-gold uppercase">1. {lang === "pt" ? "SENSIBILIZAÇÃO:" : "AWARENESS:"}</strong> {lang === "pt" ? "Consciencialização sobre os impactos ambientais." : "Raising awareness of Sonamet's environmental footprint."}
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-gold uppercase">2. {lang === "pt" ? "RESPONSABILIDADE:" : "RESPONSIBILITY:"}</strong> {lang === "pt" ? "Promoção da responsabilidade ambiental em todos os níveis." : "Promoting individual and collective environmental responsibility."}
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-gold uppercase">3. {lang === "pt" ? "BOAS PRÁTICAS:" : "BEST PRACTICES:"}</strong> {lang === "pt" ? "Incentivo e monitorização de boas práticas ambientais." : "Encouraging and tracking daily environmental good practices."}
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-gold uppercase">4. {lang === "pt" ? "MUDANÇA COMPORTAMENTAL:" : "BEHAVIORAL CHANGE:"}</strong> {lang === "pt" ? "Ações ativas para prevenção da poluição." : "Driving proactive behavioral change towards pollution prevention."}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] uppercase text-white/70">
                {lang === "pt" ? "Alinhado com a ISO 14001 e a proteção costeira do Lobito." : "Aligned with ISO 14001 and Lobito coastal conservation."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL POST */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-sm grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
                <HeartPulse size={16} className="mr-1.5" />
                {lang === "pt" ? "SAÚDE OCUPACIONAL & EMERGÊNCIA" : "OCCUPATIONAL HEALTH & EMERGENCY"}
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-extrabold uppercase mb-4 text-foreground">
                {lang === "pt" ? "POSTO MÉDICO PRÓPRIO NO ESTALEIRO" : "ON-SITE MEDICAL POST"}
              </h3>
              <p className="text-foreground/85 leading-relaxed text-xs sm:text-base mb-6">
                {lang === "pt"
                  ? "A Sonamet disponibiliza serviços médicos completos aos seus colaboradores e clientes através de um Posto Médico totalmente gerido por médicos e enfermeiros residentes da própria Sonamet."
                  : "Sonamet provides comprehensive medical services to employees and clients through an on-site Medical Post fully operated by Sonamet resident doctors and registered nurses."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-secondary p-4 rounded-xl border border-border">
                  <Activity className="text-navy mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold uppercase text-foreground text-xs sm:text-sm">
                      {lang === "pt" ? "EXAMES MÉDICOS PERIÓDICOS" : "PERIODICAL MEDICAL CHECK-UPS"}
                    </h5>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {lang === "pt" ? "Vigilância médica regular e acompanhamento de saúde contínuo para todos os colaboradores." : "Regular health surveillance and occupational medical check-ups."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-secondary p-4 rounded-xl border border-border">
                  <Ambulance className="text-navy mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold uppercase text-foreground text-xs sm:text-sm">
                      {lang === "pt" ? "PRONTIDÃO PARA EMERGÊNCIAS (2 AMBULÂNCIAS)" : "EMERGENCY RESPONSE (2 AMBULANCES)"}
                    </h5>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {lang === "pt" ? "Capacidade de resposta rápida no estaleiro com 2 ambulâncias totalmente equipadas." : "Rapid on-yard emergency response capability with 2 fully equipped ambulances."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={medicalCenterImg}
                alt="Centro Médico da Sonamet"
                loading="lazy"
                width={800}
                height={600}
                className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md text-white p-4 rounded-2xl text-xs uppercase border border-white/10">
                <span className="font-bold text-gold">SONAMET MEDICAL POST:</span>{" "}
                {lang === "pt" ? "Atendimento médico próprio no estaleiro do Lobito." : "Professional in-house healthcare at Lobito yard."}
              </div>
            </div>
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
            <h2 className="font-display text-2xl md:text-4xl font-extrabold uppercase">
              {lang === "pt" ? "POLÍTICAS CORPORATIVAS & CERTIFICADOS OFICIAIS" : "CORPORATE POLICIES & OFFICIAL CERTIFICATES"}
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
