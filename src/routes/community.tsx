import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { HeartPulse, Droplet, Flame, Sprout } from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Comunidade — Sonamet Industrial S.A." },
      { name: "description", content: "Community Impact — Care About People. Investimento contínuo em saúde, educação, conteúdo local e desenvolvimento sustentável em Benguela." },
      { property: "og:title", content: "Comunidade — Sonamet Industrial S.A." },
    ],
  }),
  component: Community,
});

function Community() {
  const { t } = useLanguage();

  const socialActionPillars = [
    {
      icon: HeartPulse,
      title: t("Doações para a Saúde", "Healthcare Donations"),
      desc: t(
        "Doação de medicamentos a hospitais locais.",
        "Donation of Medicines to local hospitals"
      ),
    },
    {
      icon: Droplet,
      title: t("Campanhas de Doação de Sangue", "Blood Donation Campaigns"),
      desc: t(
        "Campanhas regulares organizadas pelos colaboradores em apoio aos hospitais de Benguela.",
        "Regular campaigns organized by employees in support of Benguela hospitals"
      ),
    },
    {
      icon: Flame,
      title: t("Infraestruturas Públicas", "Public Infrastructure"),
      desc: t(
        "Reabilitação da embarcação do Corpo de Bombeiros do Lobito.",
        "Rehabilitation of the Lobito Fire Brigade boat"
      ),
    },
    {
      icon: Sprout,
      title: t("Ação Ambiental", "Environmental Action"),
      points: [
        t("Campanhas de plantação de árvores dentro e fora do estaleiro.", "Tree Planting Campaigns inside and outside of the yard."),
        t("Identificação de focos de mosquitos, fumigações e distribuição de mosquiteiros.", "Identification of mosquitos breeding sites, Fumigations and Mosquitos nets distribution."),
        t("Celebração do Dia Nacional do Ambiente com a comunidade local.", "National Environment Day celebration with Local community."),
        t("Controlo do consumo de energia e água e emissões de CO2.", "Control the energy and water consumption and CO2 emissions."),
        t("Reabilitação do mangal do Lobito para assegurar que espécies como o Flamingo Rosa permaneçam no seu habitat natural.", "Rehabilitation of the Lobito mangrove and ensure that species such as the Pink Flamingo remains in its natural habitat."),
      ],
    },
  ];

  const trainingStats = [
    { value: "80%", label: t("Força de Trabalho Angolana (Decreto Presidencial 271/20)", "Angolan Workforce (Decreto Presidencial 271/20)") },
    { value: "168.479", label: t("Horas de Formação Profissional Desde 2010", "Professional Training Hours Since 2010") },
    { value: "4.906", label: t("Tubistas e Soldadores Formados para Angola", "Pipefitters & Welders Trained for Angola") },
    { value: "200", label: t("Formandos Simultâneos em Pico", "Trainees Simultaneously at Peak") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Impacto na Comunidade", "Community Impact")}
        title={t("Cuidar das Pessoas", "Care About People")}
        description={t(
          "Para além do estaleiro, a Sonamet investe na saúde e no bem-estar a longo prazo dos seus trabalhadores, das suas famílias e das comunidades da Província de Benguela.",
          "Beyond the yard, Sonamet invests in the long-term health and wellbeing of its workers, their families and the communities of Benguela Province."
        )}
        image={communityHero}
      />

      {/* Malaria Control Programme */}
      <section className="py-24">
        <div className="container-x">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-elegant relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
                {t("Ativo Desde 2002", "Active Since 2002")}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {t("Programa de Controlo da Malária (MCP)", "Malaria Control Programme (MCP)")}
              </h3>
              <p className="text-foreground/85 leading-relaxed mb-6 text-sm md:text-base">
                {t(
                  "Lançado em 2002 com especialistas de Angola, França e Camarões, o MCP protege a força de trabalho da Sonamet e as comunidades circundantes. A pedido do Ministério da Saúde, o programa foi estendido a nove aldeias em Balombo, combinando rastreio e tratamento com distribuição de mosquiteiros, campanhas de consciencialização e desinfestação.",
                  "Launched in 2002 with experts from Angola, France and Cameroon, the MCP protects Sonamet's workforce and surrounding communities. At the request of the Ministry of Health, the programme has been extended to nine villages in Balombo, combining testing and treatment with mosquito-net distribution, awareness campaigns and fumigation."
                )}
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-6">
                <div>
                  <div className="font-display text-3xl font-bold text-gold">5.388</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t("Testes efetuados (2022–2024)", "Tests carried out (2022–2024)")}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gold">3.103</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t("Casos positivos tratados (2022–2024)", "Positive cases treated (2022–2024)")}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-gold">9</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t("Aldeias cobertas em Balombo", "Villages covered in Balombo")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow={t("Responsabilidade Social", "Social Responsibility")}
            title={t("Integrado na Nossa Forma de Operar", "Built Into How We Operate")}
            description={t(
              "Investimento social contínuo e ações concretas na saúde, ambiente e comunidade.",
              "Continuous social investment and concrete actions in healthcare, environment and community."
            )}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {socialActionPillars.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-elegant transition-all flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shrink-0">
                  <p.icon className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                {p.points ? (
                  <ul className="text-sm text-muted-foreground leading-relaxed space-y-2.5 mt-1 flex-1">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content & Training Centre */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow={t("Conteúdo Local & Pessoas", "Local Content & People")}
            title={t("Investir no Talento Angolano", "Investing in Angolan Talent")}
            description={t(
              "Totalmente alinhados com o Decreto Presidencial 271/20 — fazendo do conteúdo local uma vantagem competitiva estrutural e não uma mera obrigação. 80% da força de trabalho da Sonamet é angolana.",
              "Fully aligned with Decreto Presidencial 271/20 — making local content a structural competitive advantage, not a compliance obligation. 80% of Sonamet's workforce is Angolan."
            )}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {trainingStats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold transition-all">
                <div className="font-display text-3xl font-bold text-gold mb-2">{s.value}</div>
                <div className="text-xs text-muted-foreground font-medium leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold mb-4">
              {t("Centro de Formação — Concebido Especificamente em Angola", "Training Centre — Purpose-built in Angola")}
            </h3>
            <p className="text-foreground/80 leading-relaxed max-w-3xl mb-6 text-sm md:text-base">
              {t(
                "Instalação de classe mundial com 3.500 m² distribuídos por três oficinas especializadas com 80 cabines de soldadura. Concebido para qualificar a próxima geração de especialistas angolanos para a fabricação offshore complexa.",
                "Best-in-class facility covering 3,500 m² across three specialized workshops with 80 welding boxes. Designed to qualify the next generation of Angolan specialists for complex offshore fabrication."
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
