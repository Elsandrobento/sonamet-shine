import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { Shield, Leaf, Award } from "lucide-react";
import droneYard from "@/assets/drone-yard.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/hseq")({
  head: () => ({
    meta: [
      { title: "QHSE — Sonamet Industrial S.A." },
      { name: "description", content: "Triple-certified, Independent Audit, Continuous Improvement. ISO 9001 (since 2011), ISO 14001 (since 2016), ISO 45001 (since 2023)." },
      { property: "og:title", content: "QHSE — Sonamet Industrial S.A." },
    ],
  }),
  component: HSEQ,
});

function HSEQ() {
  const { t } = useLanguage();

  const isoCertifications = [
    {
      code: "ISO 9001",
      name: t("Sistema de Gestão da Qualidade", "Quality Management System"),
      year: t("Certificado desde 2011", "Certified since 2011"),
      desc: t(
        "Garantia da qualidade em toda a fabricação, qualificação de soldadura e processo completo de entrega do projeto para assegurar a satisfação do cliente.",
        "Quality assurance across fabrication, welding qualification, and the full project delivery process to ensure client satisfaction."
      ),
    },
    {
      code: "ISO 14001",
      name: t("Sistema de Gestão Ambiental", "Environmental Management System"),
      year: t("Certificado desde 2016", "Certified since 2016"),
      desc: t(
        "Minimização do impacto ambiental adverso através de práticas de gestão rigorosas e cumprimento de todas as obrigações de conformidade.",
        "Minimizing adverse environmental impact through strong management practices and fulfilment of compliance obligations."
      ),
    },
    {
      code: "ISO 45001",
      name: t("Saúde e Segurança Ocupacional", "Occupational Health & Safety"),
      year: t("Certificado desde 2023", "Certified since 2023"),
      desc: t(
        "Ambiente de trabalho seguro, prevenção de lesões e doenças profissionais nos trabalhadores e melhoria contínua do desempenho de SST.",
        "Safe workplace, prevention of work-related injury and ill health to workers and continual improvement of OH&S performance."
      ),
    },
  ];

  const qmsStats = [
    { value: "500+", label: t("WPQRs Disponíveis", "WPQRs Available") },
    { value: "350+", label: t("Soldadores Qualificados", "Qualified Welders") },
    { value: "~20", label: t("Inspetores Locais Qualificados", "Local Qualified Inspectors") },
    { value: "<4%", label: t("Taxa Reparação Solda (Diâmetro Reduzido)", "Weld Repair Rate (Small-bore)") },
  ];

  return (
    <>
      <PageHero
        eyebrow="QHSE"
        title={t("Triplamente Certificado, Auditoria Independente, Melhoria Contínua", "Triple-certified, Independent Audit, Continuous Improvement")}
        description={t(
          "A Sonamet opera sob um sistema de gestão integrado e totalmente certificado que cobre a qualidade, ambiente e saúde e segurança ocupacional, auditado anualmente por entidades terceiras independentes.",
          "Sonamet operates under a fully certified, integrated management system covering quality, environment and occupational health & safety audited annually by independent third parties."
        )}
        image={droneYard}
      />

      {/* ISO Certifications */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow={t("Certificações", "Certifications")}
            title={t("Sistemas de Gestão Integrados", "Integrated Management Systems")}
            description={t(
              "Auditados anualmente por entidades terceiras independentes para garantir conformidade contínua com os mais altos padrões internacionais.",
              "Audited annually by independent third parties to guarantee continuous compliance with the highest international standards."
            )}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {isoCertifications.map((c) => (
              <div key={c.code} className="bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-elegant transition-all">
                <div className="font-display font-bold text-3xl text-gold mb-2">{c.code}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{c.year}</div>
                <h3 className="text-xl font-semibold mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System & Differentiators */}
      <section className="py-24 bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow={t("Gestão da Qualidade", "Quality Management")}
              title={t("Sistema de Gestão da Qualidade", "Quality Management System")}
              description={t(
                "A Sonamet possui um Sistema de Gestão da Qualidade sólido e alinhado com as normas internacionais, com experiência comprovada na soldadura de diversos tipos de materiais, tais como aços de alta resistência, super duplex e soldas heterogéneas.",
                "Sonamet has a strong and solid Quality Management System aligned with international standards with proven experience on welding various types of materials such as high strength steels, super duplex, and heterogeneous welds."
              )}
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              {qmsStats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="font-display text-3xl font-bold text-gold mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">
              {t("* Ensaios mecânicos de WPQR realizados por entidades terceiras.", "* WPQR Mechanical Testing performed by Third Party.")}
            </p>
          </div>
          <div className="bg-gradient-navy text-white rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
              {t("Competências Diferenciadoras", "Key Differentiators")}
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {t("Fabricação em Super Duplex", "Super Duplex Fabrication")}
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {t(
                    "Quatro oficinas brancas dedicadas (4.700 m²) para a fabricação em aço inoxidável, duplex e super duplex. 9 manifolds montados simultaneamente, 105 entregues até à data e mais de 12.000 juntas de diâmetro reduzido em superduplex no projeto Kaombo SPS com taxa de reparação de solda < 4%.",
                    "Four dedicated white workshops (4,700 m²) for stainless steel, duplex and super duplex fabrication. 9 manifolds erected simultaneously, 105 delivered to date, and 12,000+ small-bore superduplex joints on Kaombo SPS with <4% weld repair rate."
                  )}
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">
                  {t("Linhas de Fluxo Rígidas & Spoolbase", "Rigid Flowlines & Spoolbase")}
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {t(
                    "Spoolbase com aproximadamente 1.000 m de comprimento (~32.500 m²), equipada com oficina de 130 m e rack de armazenamento de 700–918 m. Capacidade para produzir todos os produtos de linhas de fluxo rígidas, incluindo pipe-in-pipe e produtos com revestimento de polímeros.",
                    "Spoolbase approximately 1,000 m long (~32,500 m²), equipped with 130 m long workshop and 700–918 m stalk rack. Capability to produce all rigid flowline products including pipe-in-pipe and polymer lined products."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Culture */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow={t("Cultura de Segurança", "Safety Culture")}
            title={t("Cultura de Segurança Sonamet", "Sonamet Safety Culture")}
            description={t(
              "Compromisso absoluto com a segurança de todos os colaboradores, parceiros e comunidades em cada etapa da operação.",
              "Absolute commitment to the safety of all employees, partners and communities at every operational step."
            )}
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: t("Zero Acidentes", "Zero Incidents"),
                desc: t(
                  "Executar o trabalho sem incidentes para as nossas pessoas, parceiros/clientes e comunidades.",
                  "Execute the work without incidents for our people, our partners/clients and our communities."
                ),
              },
              {
                icon: Leaf,
                title: t("Proteção Ambiental", "Environmental Protection"),
                desc: t(
                  "Minimização do impacto ambiental adverso através de práticas de gestão rigorosas e conformidade.",
                  "Minimizing adverse environmental impact through strong management practices and compliance."
                ),
              },
              {
                icon: Award,
                title: t("Melhoria Contínua", "Continuous Improvement"),
                desc: t(
                  "Melhoria contínua do desempenho de SST através de auditorias internas e externas regulares.",
                  "Continual improvement of OH&S performance through regular internal and third-party audits."
                ),
              },
            ].map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-gold transition-all">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-5">
                  <p.icon className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
