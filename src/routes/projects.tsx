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
  { title: "Mafumeira Sul PPP Jacket (5 350 mT)", client: "Chevron", scope: "Fabricação", year: "2015", image: heroYard },
  { title: "CLOV Subsea Structures", client: "TotalEnergies", scope: "Fabricação", year: "2014", image: yardAerial },
  { title: "Kizomba Satellites Phase 2", client: "ExxonMobil", scope: "Fabricação & EPC", year: "2015", image: welder },
  { title: "Block 15/06 East Hub Spools", client: "Eni", scope: "Fabricação", year: "2016", image: team },
  { title: "Block 31 SPS Structures", client: "BP", scope: "EPC", year: "2013", image: yardAerial },
  { title: "Plataformas Modulares Sonangol", client: "Sonangol", scope: "EPC", year: "2020", image: heroYard },
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
