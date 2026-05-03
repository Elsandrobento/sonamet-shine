import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import yardAerial from "@/assets/yard-aerial.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "A Empresa — Sonamet" },
      { name: "description", content: "Conheça a Sonamet, joint venture Sonangol & Subsea 7, líder em construção offshore em Angola desde 1998." },
      { property: "og:title", content: "A Empresa — Sonamet" },
      { property: "og:image", content: yardAerial },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "1998", title: "Fundação", desc: "Sonamet é estabelecida na Baía do Lobito como joint venture entre Sonangol e Subsea 7." },
  { year: "2005", title: "Expansão do Estaleiro", desc: "Ampliação significativa das capacidades de fabricação para águas profundas." },
  { year: "2011", title: "Certificação ISO 9001:2008", desc: "Sistema de Gestão da Qualidade certificado internacionalmente." },
  { year: "2015", title: "Unidade EPC/EPCI Luanda", desc: "Abertura da unidade de negócio de projetos integrados em Luanda." },
  { year: "Hoje", title: "2 500+ Colaboradores", desc: "Capacidade de 3 milhões de horas-homem produtivas, maioria angolana." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title="25 anos a construir o offshore angolano."
        description="Uma joint venture entre Sonangol e Subsea 7, a Sonamet é hoje uma das mais importantes empresas de construção da região."
        image={yardAerial}
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader eyebrow="Visão Geral" title='Made in Angola: a nossa abordagem ao trabalho.' />
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>Adotando uma abordagem "Made in Angola", o objetivo da Sonamet é participar ativamente na transferência de tecnologia para a indústria angolana.</p>
              <p>No pico da sua atividade, a Sonamet tem capacidade para executar 3 milhões de horas-homem produtivas e empregar cerca de 2 500 pessoas. A maioria dos seus colaboradores é angolana, e a empresa é reconhecida como um modelo de sucesso para o desenvolvimento local e a transferência de conhecimento em África.</p>
              <p>Desde o início, a Sonamet tem estado comprometida com a melhoria contínua da qualidade das operações e produtos que fornece à indústria de óleo e gás, focando-se no cumprimento integral dos requisitos de segurança e ambiente.</p>
            </div>
          </div>
          <div>
            <img src={team} alt="Equipa Sonamet" loading="lazy" width={1280} height={900} className="rounded-2xl shadow-elegant w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-x">
          <SectionHeader eyebrow="A Nossa História" title="Marcos que definiram a Sonamet" align="center" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative mb-12 md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="font-display text-3xl font-bold text-gold">{m.year}</div>
                  <h3 className="text-xl font-semibold mt-2">{m.title}</h3>
                  <p className="text-muted-foreground mt-2">{m.desc}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-gradient-gold ring-4 ring-secondary md:-translate-x-1.5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Missão & Valores" title="Aquilo em que acreditamos" align="center" />
          <div className="max-w-3xl mx-auto text-center text-lg text-foreground/85 leading-relaxed mb-16">
            Entregar projetos de Engenharia, Procurement e Construção de última geração para a indústria de óleo e gás em Angola. Liderar o desenvolvimento e a transferência de tecnologia para participar no crescimento de longo prazo da indústria local e do capital humano.
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {["As Nossas Pessoas", "Segurança e Ambiente", "Foco no Cliente", "Compromisso com a Excelência", "Envolvimento na Comunidade"].map((v) => (
              <div key={v} className="rounded-2xl border-2 border-border p-6 text-center hover:border-gold hover:bg-secondary transition-all">
                <div className="font-semibold text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
