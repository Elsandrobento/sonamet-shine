import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { 
  Users, 
  Heart, 
  TreePine, 
  Droplet, 
  Building, 
  Waves,
  CheckCircle2
} from "lucide-react";
import trainingImg from "@/assets/community-training.jpg";
import bloodDonationImg from "@/assets/community-blood-donation.jpg";
import childrenImg from "@/assets/community-children.jpg";
import treePlantingImg from "@/assets/community-tree-planting.png";
import schoolImg from "@/assets/community-school-catumbela.png";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Comunidade & Conteúdo Local — Sonamet Industrial S.A. | Benguela" },
      { name: "description", content: "Impacto comunitário e talento angolano na Sonamet: 80% de taxa de angolanização (Decreto Presidencial 271/20), Centro de Formação com 168.479 horas de treino, Programa de Controlo da Malária ativo desde 2002 e proteção ambiental do mangal do Lobito." },
      { property: "og:title", content: "Comunidade & Conteúdo Local — Sonamet Industrial S.A." },
      { property: "og:image", content: trainingImg },
    ],
  }),
  component: Community,
});

function Community() {
  const { lang } = useLanguage();

  const mcpStats = [
    { value: "5.388", label: lang === "pt" ? "TESTES REALIZADOS" : "TESTS CONDUCTED", desc: "2022–2024" },
    { value: "3.103", label: lang === "pt" ? "CASOS TRATADOS" : "POSITIVE CASES TREATED", desc: "2022–2024" },
    { value: "9 ALDEIAS", label: lang === "pt" ? "COBERTURA NO BALOMBO" : "VILLAGES IN BALOMBO", desc: lang === "pt" ? "A pedido do MINSA" : "Health Ministry request" },
    { value: "DESDE 2002", label: lang === "pt" ? "PROGRAMA ATIVO" : "ACTIVE PROGRAMME", desc: lang === "pt" ? "Mais de 20 anos de ação" : "Over 20 years of action" },
  ];

  const trainingStats = [
    { value: "80%", label: lang === "pt" ? "TAXA DE ANGOLANIZAÇÃO" : "ANGOLANIZATION RATE", desc: "Dec. Presidencial 271/20" },
    { value: "168.479", label: lang === "pt" ? "HORAS DE FORMAÇÃO" : "TRAINING HOURS", desc: lang === "pt" ? "Ministradas desde 2010" : "Delivered since 2010" },
    { value: "4.906", label: lang === "pt" ? "TUBISTAS & SOLDADORES" : "FABRICATORS & WELDERS", desc: lang === "pt" ? "Profissionais formados" : "Trained for Angola" },
    { value: "200", label: lang === "pt" ? "FORMANDOS EM PICO" : "PEAK TRAINEES", desc: lang === "pt" ? "Capacidade em simultâneo" : "Simultaneous capacity" },
    { value: "3.500 M²", label: lang === "pt" ? "ÁREA DO CENTRO" : "CENTRE SURFACE", desc: lang === "pt" ? "3 oficinas · 80 cabines" : "3 workshops · 80 booths" },
  ];

  const socialActions = [
    {
      title: lang === "pt" ? "DOAÇÃO DE MEDICAMENTOS & APOIO À SAÚDE" : "HOSPITAL MEDICINE DONATIONS",
      desc: lang === "pt"
        ? "Doações regulares de medicamentos e materiais hospitalares essenciais para os hospitais e centros de saúde da província de Benguela."
        : "Regular donations of essential medicines and hospital supplies to local hospitals and healthcare clinics in Benguela Province.",
      icon: Heart,
      image: childrenImg
    },
    {
      title: lang === "pt" ? "CAMPANHAS DE DOAÇÃO DE SANGUE" : "BLOOD DONATION CAMPAIGNS",
      desc: lang === "pt"
        ? "Campanhas periódicas organizadas ativamente pelos colaboradores da Sonamet para reforçar os bancos de sangue dos hospitais de Benguela e Lobito."
        : "Regular employee-driven blood donation campaigns in support of Benguela and Lobito regional hospitals.",
      icon: Droplet,
      image: bloodDonationImg
    },
    {
      title: lang === "pt" ? "INFRAESTRUTURAS & BOMBEIROS DO LOBITO" : "COMMUNITY SUPPORT & FIRE BRIGADE",
      desc: lang === "pt"
        ? "Reabilitação integral da embarcação do Corpo de Bombeiros do Lobito, apoio a escolas e recuperação de equipamentos comunitários."
        : "Comprehensive overhaul of the Lobito Fire Brigade boat, school infrastructure support, and local civic assistance.",
      icon: Building,
      image: schoolImg
    },
    {
      title: lang === "pt" ? "AÇÃO AMBIENTAL & PRESERVAÇÃO DO FLAMINGO-ROSA" : "MANGROVE & PINK FLAMINGO CONSERVATION",
      desc: lang === "pt"
        ? "Campanhas de plantação de árvores dentro e fora do estaleiro, controlo de emissões e reabilitação do mangal do Lobito para salvaguarda do Flamingo-Rosa."
        : "Tree planting campaigns inside and outside the yard, carbon monitoring, and Lobito mangrove rehabilitation to preserve Pink Flamingo habitat.",
      icon: TreePine,
      image: treePlantingImg
    }
  ];

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "RESPONSABILIDADE SOCIAL & CONTEÚDO LOCAL" : "SOCIAL RESPONSIBILITY & LOCAL CONTENT"}
        title={lang === "pt" ? "CARE ABOUT PEOPLE: INVESTIR NO TALENTO ANGOLANO" : "CARE ABOUT PEOPLE: INVESTING IN ANGOLAN TALENT"}
        description={lang === "pt"
          ? "Para além dos limites do estaleiro, a Sonamet investe continuamente na saúde a longo prazo, no bem-estar dos colaboradores e famílias, e no desenvolvimento sustentável das comunidades de Benguela."
          : "Beyond the yard, Sonamet invests in the long-term health and wellbeing of its workers, their families, and the communities of Benguela Province."}
        image={trainingImg}
      />

      {/* LOCAL CONTENT & TRAINING CENTRE */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {lang === "pt" ? "CONTEÚDO LOCAL & PESSOAS" : "LOCAL CONTENT & PEOPLE"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-foreground mb-6 leading-tight">
                {lang === "pt" ? "INVESTIR NO TALENTO DE ANGOLA" : "INVESTING IN ANGOLAN TALENT"}
              </h2>
              <p className="text-foreground/85 text-base leading-relaxed mb-6">
                {lang === "pt"
                  ? "A Sonamet tem 80% da sua força de trabalho composta por cidadãos angolanos, em plena conformidade com o Decreto Presidencial 271/20 — tornando o conteúdo local numa vantagem competitiva estrutural."
                  : "80% of Sonamet's workforce is Angolan, fully aligned with Presidential Decree 271/20 — making local content a structural competitive advantage."}
              </p>

              <div className="bg-secondary border border-border rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-gold flex items-center justify-center text-navy-deep font-bold text-sm">
                    80%
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base uppercase">{lang === "pt" ? "TAXA DE ANGOLANIZAÇÃO" : "ANGOLANIZATION RATE"}</h4>
                    <span className="text-xs text-muted-foreground uppercase">Decreto Presidencial 271/20</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  {lang === "pt"
                    ? "O desenvolvimento de competências técnicas nacionais é a pedra angular da nossa sustentabilidade operacional. Formamos os melhores profissionais da indústria em soldadura especializada, tubagem, mecânica e liderança."
                    : "Developing national technical skills is the cornerstone of our sustainability. We train industry-leading professionals in specialized welding, pipefitting, mechanics, and leadership."}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-foreground/90 uppercase font-semibold">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span><strong>{lang === "pt" ? "CENTRO DE FORMAÇÃO:" : "TRAINING CENTRE:"}</strong> {lang === "pt" ? "Instalação de topo construída em Angola." : "Best-in-class purpose-built facility in Angola."}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span><strong>3.500 M²</strong> {lang === "pt" ? "com 3 oficinas dedicadas e 80 cabines de soldadura." : "with 3 dedicated workshops and 80 welding booths."}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span><strong>4.906 {lang === "pt" ? "PROFISSIONAIS" : "SPECIALISTS"}</strong> {lang === "pt" ? "capacitados e certificados." : "trained and certified for the industry."}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src={trainingImg}
                  alt="Centro de Formação Profissional Sonamet"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 text-xs uppercase">
                  <span className="font-bold text-gold">{lang === "pt" ? "CENTRO DE FORMAÇÃO:" : "TRAINING CENTRE:"}</span>{" "}
                  {lang === "pt" ? "Mais de 168.479 horas de treino desde 2010." : "Over 168,479 training hours delivered since 2010."}
                </div>
              </div>
            </div>
          </div>

          {/* Training Numbers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
            {trainingStats.map((st, idx) => (
              <Reveal key={st.label} delay={idx * 0.04}>
                <div className="bg-card border border-border rounded-2xl p-5 text-center hover:border-gold hover:shadow-elegant transition-all h-full flex flex-col justify-center">
                  <div className="font-display text-2xl lg:text-3xl font-bold text-navy">{st.value}</div>
                  <div className="text-[11px] font-bold uppercase text-foreground mt-2">{st.label}</div>
                  <div className="text-[10px] uppercase text-muted-foreground mt-0.5">{st.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MALARIA CONTROL PROGRAMME (MCP) */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              {lang === "pt" ? "SAÚDE PÚBLICA & IMPACTO COMUNITÁRIO" : "PUBLIC HEALTH & COMMUNITY IMPACT"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "PROGRAMA DE CONTROLO DA MALÁRIA (MCP)" : "MALARIA CONTROL PROGRAMME (MCP)"}
            </h2>
            <p className="mt-4 text-white/85 text-xs sm:text-base leading-relaxed">
              {lang === "pt"
                ? "Lançado em 2002 com peritos de Angola, França e Camarões, o MCP protege a força de trabalho da Sonamet e as comunidades vizinhas. A pedido do Ministério da Saúde, o programa foi estendido a nove aldeias no município do Balombo, combinando testagem, tratamento imediato, distribuição de mosquiteiros, campanhas de sensibilização e fumigação."
                : "Launched in 2002 with experts from Angola, France, and Cameroon, the MCP protects Sonamet's workforce and surrounding communities. Extended to nine villages in Balombo at the Ministry of Health's request, combining testing, treatment, mosquito-net distribution, awareness campaigns, and fumigation."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mcpStats.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/15 rounded-3xl p-6 text-center backdrop-blur-md hover:bg-white/10 hover:border-gold transition-all">
                <div className="font-display text-3xl font-bold text-gold">{item.value}</div>
                <div className="text-xs font-bold uppercase text-white mt-2">{item.label}</div>
                <div className="text-[10px] uppercase text-white/70 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 border border-white/15 rounded-2xl p-6 max-w-4xl mx-auto text-center text-xs uppercase text-white/90 leading-relaxed">
            <strong>{lang === "pt" ? "METODOLOGIA ABRANGENTE:" : "COMPREHENSIVE APPROACH:"}</strong>{" "}
            {lang === "pt"
              ? "Identificação de criadouros de mosquitos, fumigações periódicas, diagnóstico precoce e terapêuticas gratuitas."
              : "Breeding site identification, systematic fumigations, rapid diagnosis, and free treatment distribution."}
          </div>
        </div>
      </section>

      {/* SOCIAL RESPONSIBILITY */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
              {lang === "pt" ? "RESPONSABILIDADE SOCIAL" : "SOCIAL RESPONSIBILITY"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              {lang === "pt" ? "AÇÕES CONCRETAS INTEGRADAS NA OPERAÇÃO" : "CONCRETE ACTIONS EMBEDDED IN OUR WORK"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialActions.map((action) => (
              <div
                key={action.title}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:border-gold hover:shadow-elegant transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep">
                  <img
                    src={action.image}
                    alt={action.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-white">
                    <div className="h-10 w-10 rounded-xl bg-gradient-gold flex items-center justify-center text-navy-deep shrink-0 shadow-gold">
                      <action.icon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold uppercase">{action.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {action.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Highlight: Mangrove & Pink Flamingo */}
          <div className="mt-16 bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-sm grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
                <Waves size={16} className="mr-1.5" />
                {lang === "pt" ? "PRESERVAÇÃO DO ECOSSISTEMA NATURAL" : "NATURAL ECOSYSTEM CONSERVATION"}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-4 text-navy">
                {lang === "pt" ? "REABILITAÇÃO DO MANGAL & PROTEÇÃO DO FLAMINGO-ROSA" : "MANGROVE RESTORATION & PINK FLAMINGO HABITAT"}
              </h3>
              <p className="text-foreground/85 leading-relaxed text-xs sm:text-base mb-4">
                {lang === "pt"
                  ? "A Sonamet assume um compromisso diário com a proteção da biodiversidade costeira de Benguela. As nossas iniciativas incluem a celebração do Dia Nacional do Ambiente com a comunidade, plantação de árvores e a reabilitação contínua da zona de mangal da Baía do Lobito para proteger o habitat natural do Flamingo-Rosa."
                  : "Sonamet takes active responsibility for protecting coastal biodiversity. Initiatives include National Environment Day celebrations, extensive tree planting, and restoring the Lobito Bay mangrove ecosystem to safeguard the natural Pink Flamingo population."}
              </p>
              <p className="text-xs text-muted-foreground font-bold uppercase">
                ISO 14001 • {lang === "pt" ? "COMPROMISSO AMBIENTAL C.A.R.E." : "C.A.R.E. ENVIRONMENTAL COMMITMENT"}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-center">
              <div className="bg-secondary rounded-2xl p-6 border border-border text-center w-full">
                <div className="font-display text-3xl font-bold text-gold uppercase">{lang === "pt" ? "DIA DO AMBIENTE" : "ENVIRONMENT DAY"}</div>
                <div className="text-xs uppercase text-muted-foreground mt-1">{lang === "pt" ? "Ações anuais de plantação e limpeza" : "Annual planting & cleanup campaigns"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
