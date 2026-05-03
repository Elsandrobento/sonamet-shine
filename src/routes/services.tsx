import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { Anchor, HardHat, Wrench, Cpu, Ship, FileCheck } from "lucide-react";
import welder from "@/assets/welder.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Serviços — Sonamet" },
      { name: "description", content: "Engenharia, fabricação offshore, EPC/EPCI, soldadura especializada e gestão de projetos para óleo e gás." },
      { property: "og:title", content: "Serviços — Sonamet" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Cpu, title: "Engenharia", desc: "Talentos e software de análise avançado para garantir a melhor engenharia em todas as fases.", points: ["Engenharia conceptual e detalhada", "Análise estrutural avançada", "Software especializado", "Equipa multidisciplinar residente"] },
  { icon: Wrench, title: "Fabricação", desc: "Fabricação em aço para águas rasas e profundas em oficinas especializadas (incluindo 'White Workshops').", points: ["Jackets e Decks", "Estruturas Subsea (PLEMs, PLETs)", "Suction Piles", "Oficinas Brancas (Stainless/Duplex)"] },
  { icon: Anchor, title: "EPC / EPCI", desc: "Projetos integrados de Engenharia, Procurement, Construção e Instalação em Luanda e Lobito.", points: ["Gestão integrada de projeto", "Procurement internacional", "Construção e comissionamento", "Instalação offshore"] },
  { icon: Ship, title: "Operações no Estaleiro", desc: "Estaleiro de 80 hectares na Baía do Lobito com infraestrutura portuária de carga pesada.", points: ["80 Hectares de área total", "12 000m² de oficinas cobertas", "Dois cais (6 000 mT loadout)", "Logística marítima integrada"] },
  { icon: HardHat, title: "Construção", desc: "Capacidade anual de 3 milhões de horas-homem produtivas com foco em excelência.", points: ["Soldadura certificada", "Pintura industrial (5 000m²)", "Montagem de grandes estruturas", "Testes de pressão e carga"] },
  { icon: FileCheck, title: "QA/QC e Inspeção", desc: "Sistema de qualidade certificado ISO 9001 com END e inspeção integrados.", points: ["END (radiografia, ultrassons)", "Inspeção dimensional", "Documentação completa", "Traceability total"] },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capacidades"
        title="Soluções integradas para a indústria offshore."
        description="Da engenharia ao comissionamento — entregamos valor em cada fase do ciclo de vida do projeto."
        image={welder}
      />

      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-elegant transition-all">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <s.icon className="text-navy-deep" size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2 items-center text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-navy text-white">
        <div className="container-x">
          <SectionHeader eyebrow="Materiais" title="Soldadura em todo o tipo de aço" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {["Carbon Steel", "Stainless 304/316", "Duplex 22Cr", "SuperDuplex 25Cr", "Clad CRA", "Inconel 625"].map((m) => (
              <div key={m} className="rounded-xl border border-white/15 bg-white/5 backdrop-blur p-5 text-center text-sm font-medium hover:border-gold hover:bg-white/10 transition-all">
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
