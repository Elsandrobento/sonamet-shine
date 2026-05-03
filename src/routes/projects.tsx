import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, SectionHeader } from "@/components/Section";
import yardAerial from "@/assets/yard-aerial.jpg";
import welder from "@/assets/welder.jpg";
import heroYard from "@/assets/hero-yard.jpg";
import team from "@/assets/team.jpg";
import { Reveal } from "@/components/Reveal";

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
  { title: "Mafumeira Sul PPP Jacket (5 350 mT)", client: "Chevron", category: "Fabricação", scope: "Fabricação", year: "2015", image: heroYard },
  { title: "CLOV Subsea Structures", client: "TotalEnergies", category: "Subsea", scope: "Fabricação", year: "2014", image: yardAerial },
  { title: "Kizomba Satellites Phase 2", client: "ExxonMobil", category: "EPC", scope: "Fabricação & EPC", year: "2015", image: welder },
  { title: "Block 15/06 East Hub Spools", client: "Eni", category: "Subsea", scope: "Fabricação", year: "2016", image: team },
  { title: "Block 31 SPS Structures", client: "BP", category: "EPC", scope: "EPC", year: "2013", image: yardAerial },
  { title: "Plataformas Modulares Sonangol", client: "Sonangol", category: "EPC", scope: "EPC", year: "2020", image: heroYard },
];

const categories = ["Todos", "Fabricação", "EPC", "Subsea"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  );

  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Projetos que demonstram a nossa capacidade."
        description="Décadas de execução em águas rasas e profundas para os principais operadores do setor."
        image={heroYard}
      />

      <section className="py-24 overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <SectionHeader eyebrow="Seleção" title="Projetos em destaque" />
              
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === cat
                        ? "bg-gold text-navy-deep shadow-gold"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="group relative overflow-hidden rounded-2xl shadow-elegant aspect-[4/5] cursor-pointer"
                >
                  <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>Ver Detalhes</span>
                      <span className="h-px w-8 bg-gold" />
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 mb-2">
                      <span className="bg-white/20 backdrop-blur px-2 py-1 rounded">{p.scope}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-sm text-white/70 mt-2">{p.client}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
