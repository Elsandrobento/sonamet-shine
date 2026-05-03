import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { GraduationCap, HeartPulse, Sprout } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Comunidade — Sonamet" },
      { name: "description", content: "Programas sociais e desenvolvimento da comunidade da província de Benguela." },
      { property: "og:title", content: "Comunidade — Sonamet" },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Responsabilidade Social"
        title="Crescer com a comunidade que nos acolhe."
        description="A Sonamet desempenha um papel ativo no desenvolvimento social da comunidade de Benguela."
        image={team}
      />

      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Programas Sociais"
            title="Investimento contínuo em educação, saúde e sustentabilidade"
            description="Os numerosos projetos sociais conduzidos e financiados pela Sonamet têm contribuído para melhorar a educação e a saúde em toda a província."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "Educação", desc: "Apoio a escolas, bolsas de estudo e formação técnica para jovens angolanos." },
              { icon: HeartPulse, title: "Saúde", desc: "Programas e infraestruturas de saúde para a comunidade de Benguela." },
              { icon: Sprout, title: "Sustentabilidade", desc: "Conteúdo local e desenvolvimento sustentável da província de Benguela." },
            ].map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-elegant transition-all">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5">
                  <p.icon className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-navy text-white">
        <div className="container-x grid md:grid-cols-3 gap-8 text-center">
          {[
            { v: "85%+", l: "Colaboradores Angolanos" },
            { v: "20+", l: "Anos de impacto social" },
            { v: "1000s", l: "Beneficiários diretos" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl font-bold text-gold">{s.v}</div>
              <div className="text-sm uppercase tracking-widest text-white/60 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
