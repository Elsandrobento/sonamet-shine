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
import yardHero from "@/assets/foto-yard.jpg";
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
  const { lang } = useLanguage();

  const isoCertifications = [
    {
      code: "ISO 9001",
      certifiedSince: lang === "pt" ? "CERTIFICADA DESDE 2011" : "CERTIFIED SINCE 2011",
      title: lang === "pt" ? "SISTEMA DE GESTÃO DA QUALIDADE" : "QUALITY MANAGEMENT SYSTEM",
      desc: lang === "pt"
        ? "Garantia da qualidade em todas as etapas da fabricação, qualificação de procedimentos de soldadura (WPQR) e processo integral de entrega para garantir a total satisfação do cliente."
        : "Quality assurance across fabrication, welding qualification (WPQR), and the full project delivery process to ensure complete client satisfaction.",
      pdf: "/documents/SONAMET_ISO_45001.pdf",
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

      {/* 1. HSE CULTURE SECTION */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                <ShieldCheck size={14} className="mr-2" />
                HSE CULTURE
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
                TRABALHE COM SEGURANÇA, VIVA COM CONFIANÇA
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
                {lang === "pt"
                  ? "A Sonamet integra o HSE na sua cultura operacional, promovendo a eliminação de perigos, redução de riscos, prevenção da poluição e melhoria contínua para proteger as nossas pessoas, parceiros, comunidades e o ambiente."
                  : "Sonamet embeds HSE into its operational culture, promoting hazard elimination, risk reduction, pollution prevention and continuous improvement to protect our people, partners, communities and the environment."}
              </p>
              <div>
                <a
                  href="/documents/SON-MGT-PL-001_QHSE_Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs sm:text-sm font-bold uppercase text-navy-deep hover:bg-gold-soft transition-all shadow-md hover:scale-[1.02]"
                >
                  <Download size={16} /> {lang === "pt" ? "VER POLÍTICA HSE (PDF)" : "VIEW HSE POLICY (PDF)"}
                </a>
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
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-navy mb-6">
                  SONAMET HSE GOLDEN RULES
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
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-navy mb-4">
                  CARE PROGRAM
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
