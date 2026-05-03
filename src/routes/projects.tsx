import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import yardAerial from "@/assets/yard-aerial.jpg";
import welder from "@/assets/welder.jpg";
import heroYard from "@/assets/hero-yard.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos — Sonamet" },
      { name: "description", content: "Portfólio de projetos offshore e EPC/EPCI executados pela Sonamet em Angola." },
      { property: "og:title", content: "Projetos — Sonamet" },
      { property: "og:image", content: heroYard },
    ],
  }),
  component: Projects,
});

const projects = [
  { title: "Estruturas Subsea Águas Profundas", client: "Cliente Major Internacional", scope: "Fabricação", year: "2023", image: heroYard },
  { title: "Manifolds & PLETs", client: "Operadora Offshore", scope: "Engenharia & Fabricação", year: "2022", image: yardAerial },
  { title: "Suction Piles & Anchors", client: "Projeto FPSO", scope: "Fabricação", year: "2022", image: welder },
  { title: "Spool Pieces & Jumpers", client: "EPCI Águas Profundas", scope: "EPCI", year: "2021", image: team },
  { title: "Plataformas Modulares", client: "Sonangol", scope: "EPC", year: "2020", image: yardAerial },
  { title: "Estruturas Topside", client: "Major Oil & Gas", scope: "Fabricação", year: "2019", image: heroYard },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Projetos que demonstram a nossa capacidade."
        description="Décadas de execução em águas rasas e profundas para os principais operadores do setor."
        image={heroYard}
      />

      <section className="py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Seleção" title="Projetos em destaque" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-2xl shadow-elegant aspect-[4/5] cursor-pointer">
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-2">
                    <span>{p.scope}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{p.client}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
