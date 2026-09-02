import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { HeartPulse, Droplet, Flame, Sprout, GraduationCap, Pill } from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";
import bloodDonation1 from "@/assets/blood-donation-1.jpg";
import bloodDonation2 from "@/assets/blood-donation-2.jpg";
import bloodDonation3 from "@/assets/blood-donation-3.jpg";
import bloodDonation4 from "@/assets/blood-donation-4.jpg";
import maternityRestinga1 from "@/assets/maternity-restinga-1.jpg";
import maternityRestinga2 from "@/assets/maternity-restinga-2.jpg";
import maternityRestinga3 from "@/assets/maternity-restinga-3.jpg";
import maternityRestinga4 from "@/assets/maternity-restinga-4.jpg";
import polytechnicBelavista1 from "@/assets/polytechnic-belavista-1.png";
import polytechnicBelavista2 from "@/assets/polytechnic-belavista-2.jpg";
import polytechnicBelavista3 from "@/assets/polytechnic-belavista-3.jpg";
import polytechnicBelavista4 from "@/assets/polytechnic-belavista-4.png";
import medicinesDonation1 from "@/assets/medicines-donation-1.png";
import medicinesDonation2 from "@/assets/medicines-donation-2.jpg";
import medicinesDonation3 from "@/assets/medicines-donation-3.jpg";
import medicinesDonation4 from "@/assets/medicines-donation-4.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Comunidade — Sonamet Industrial S.A." },
      { name: "description", content: "Community Impact — CARE ABOUT PEOPLE. Investimento contínuo em saúde, educação, conteúdo local e desenvolvimento sustentável em Benguela." },
      { property: "og:title", content: "Comunidade — Sonamet Industrial S.A." },
    ],
  }),
  component: Community,
});

function Community() {
  const { language, t } = useLanguage();

  const socialActionPillars = [
    {
      icon: HeartPulse,
      title: t("Doações para a Saúde", "Healthcare Donations"),
      points: [
        t("Doação de medicamentos a hospitais locais.", "Donation of medicines to local hospitals."),
        t("Campanhas regulares de doação de sangue organizadas pelos colaboradores em apoio aos hospitais de Benguela.", "Regular blood donation campaigns organized by employees in support of Benguela hospitals."),
      ],
    },
    {
      icon: Flame,
      title: t("Infraestruturas Públicas", "Public Infrastructure"),
      points: [
        t(
          "Financiamento de dois blocos cirúrgicos na maternidade da Restinga, Lobito.",
          "Funding of two surgical departments in maternity hospital in Restinga Lobito."
        ),
        t(
          "Criação de uma Escola Primária no Lobito.",
          "Creation of a Primary School in Lobito."
        ),
        t(
          "Criação do Instituto Politécnico Pe. Martins Ferreira na Bela Vista.",
          "Creation of a Polytechnic Pe. Martins Ferreira in Bela Vista."
        ),
        t(
          "Reabilitação da embarcação do Corpo de Bombeiros do Lobito.",
          "Rehabilitation of the Lobito Fire Brigade boat."
        ),
      ],
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
    { value: "168.479", label: t("Horas de Formação Profissional Desde 2010", "Professional Training Hours Since 2010") },
    { value: "4.906", label: t("Tubistas e Soldadores Formados para Angola", "Pipefitters & Welders Trained for Angola") },
    { value: "200", label: t("Formandos Simultâneos em Pico", "Trainees Simultaneously at Peak") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("Impacto na Comunidade", "Community Impact")}
        title={t("Envolvimento com a Comunidade", "Community Involvement")}
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
              <p className="text-foreground/85 leading-relaxed mb-6 text-sm md:text-base text-justify">
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
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {socialActionPillars.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-elegant transition-all flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shrink-0">
                  <p.icon className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <ul className="text-sm text-muted-foreground leading-relaxed space-y-2.5 mt-1 flex-1">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Social Action: Blood Donation Campaigns */}
          <div className="mt-14 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                <Droplet size={14} />
                <span>{t("Ação de Solidariedade", "Solidarity Initiative")}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                {t(
                  "Campanhas de Doação de Sangue em Apoio aos Hospitais de Benguela",
                  "Blood Donation Campaigns in Support of Benguela Hospitals"
                )}
              </h3>
            </div>

            {/* Photos Grid - 4 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={bloodDonation1}
                  alt="Campanhas de Doação de Sangue — Sonamet"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={bloodDonation2}
                  alt="Campanhas de Doação de Sangue — Apoio aos Hospitais"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={bloodDonation3}
                  alt="Doação de Sangue Voluntária pelos Colaboradores"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={bloodDonation4}
                  alt="Equipa Médica e Colaboradores em Ação Solidária"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Featured Social Action: Maternity Hospital Restinga */}
          <div className="mt-14 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                <HeartPulse size={14} />
                <span>{t("Infraestrutura de Saúde", "Healthcare Infrastructure")}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                {t(
                  "Financiamento de Dois Blocos Cirúrgicos na Maternidade da Restinga, Lobito",
                  "Funding of Two Surgical Departments in Maternity Hospital in Restinga Lobito"
                )}
              </h3>
            </div>

            {/* Photos Grid - 4 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={maternityRestinga1}
                  alt="Restoration of Maternity Ruins — Sonamet & Hyundai Collaboration"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Início do Restauro", "Restoration Phase")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={maternityRestinga2}
                  alt="Completed Modernized Maternity Building"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Instalações Concluídas", "Completed Facilities")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={maternityRestinga3}
                  alt="Patient Recovery & Monitoring Unit"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Equipamentos e Recuperação", "Recovery & Monitoring")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={maternityRestinga4}
                  alt="Modern Surgical Operating Theatre"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Bloco Operatório Moderno", "Surgical Operating Theatre")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Social Action: Polytechnic Pe. Martins Ferreira in Bela Vista */}
          <div className="mt-14 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                <GraduationCap size={14} />
                <span>{t("Educação & Infraestrutura", "Education & Infrastructure")}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                {t(
                  "Criação do Instituto Politécnico Pe. Martins Ferreira na Bela Vista",
                  "Creation of a Polytechnic Pe. Martins Ferreira in Bela Vista"
                )}
              </h3>
            </div>

            {/* Photos Grid - 4 images (Chronological: Construction phase then Final Project) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={polytechnicBelavista3}
                  alt="Campus Layout and Structural Development"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Implantação do Campus", "Campus Infrastructure")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={polytechnicBelavista2}
                  alt="Construction and Scaffolding Phase"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Fase de Construção", "Construction Phase")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={polytechnicBelavista1}
                  alt="Completed Polytechnic Pe. Martins Ferreira Building"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Edifício Principal Concluído", "Completed Main Building")}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={polytechnicBelavista4}
                  alt="Classrooms Building"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-navy-deep/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {t("Salas de Aula", "Classrooms")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Social Action: Donation of Medicines to Local Hospitals */}
          <div className="mt-14 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                <Pill size={14} />
                <span>{t("Apoio Hospitalar & Farmacêutico", "Healthcare & Medical Support")}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                {t(
                  "Doação de Medicamentos a Hospitais Locais",
                  "Donation of Medicines to Local Hospitals"
                )}
              </h3>
            </div>

            {/* Photos Grid - 4 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={medicinesDonation1}
                  alt="Doação de Medicamentos a Hospitais Locais"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={medicinesDonation2}
                  alt="Entrega de Material Hospitalar e Fármacos"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={medicinesDonation3}
                  alt="Doação de Fármacos e EPIs"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-md group aspect-[4/3] bg-navy-deep">
                <img
                  src={medicinesDonation4}
                  alt="Apoio Contínuo a Hospitais de Benguela"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content & Training Centre */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow={t("Conteúdo Local & Pessoas", "Local Content & People")}
            title={t("Investir no Talento Angolano", "Investing in Angolan Talent")}
          />
          <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-border mb-12">
            <h3 className="text-2xl font-bold mb-4">
              {t("Centro de Formação", "Training Center")}
            </h3>
            <p className="text-foreground/80 leading-relaxed max-w-3xl text-sm md:text-base text-justify">
              {t(
                "Instalação de classe mundial com 3.500 m² distribuídos por três oficinas especializadas com 80 cabines de soldadura. O Centro de Formação da Sonamet desenvolve profissionais angolanos altamente qualificados através de formação técnica prática, apoiando a excelência operacional e o crescimento sustentável da indústria de óleo e gás em Angola.",
                "Best-in-class facility covering 3,500 m² across three specialized workshops with 80 welding boxes. Sonamet’s Training Center develops highly skilled Angolan professionals through hands-on technical training, supporting operational excellence and the sustainable growth of Angola’s oil and gas industry."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trainingStats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold transition-all">
                <div className="font-display text-3xl font-bold text-gold mb-2">{s.value}</div>
                <div className="text-xs text-muted-foreground font-medium leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
