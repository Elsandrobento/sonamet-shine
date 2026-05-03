import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/Section";
import { Shield, Leaf, Award, Users } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/hseq")({
  head: () => ({
    meta: [
      { title: "HSEQ — Sonamet" },
      { name: "description", content: "Saúde, Segurança, Ambiente e Qualidade. Sistema certificado ISO 9001 e cultura de segurança absoluta." },
      { property: "og:title", content: "HSEQ — Sonamet" },
    ],
  }),
  component: HSEQ,
});

const pillars = [
  { icon: Users, title: "Saúde", desc: "Vigilância médica permanente e programas de bem-estar para todos os colaboradores." },
  { icon: Shield, title: "Segurança", desc: "Cultura de safety-first, treino contínuo e zero tolerância a comportamentos inseguros." },
  { icon: Leaf, title: "Ambiente", desc: "Gestão ambiental rigorosa, redução de impacto e práticas sustentáveis no estaleiro." },
  { icon: Award, title: "Qualidade", desc: "Sistema de gestão certificado ISO 9001 com inspeção e END integrados." },
];

function HSEQ() {
  return (
    <>
      <PageHero
        eyebrow="HSEQ"
        title="Saúde, Segurança, Ambiente e Qualidade."
        description="Pilares inegociáveis da nossa operação. A excelência começa na proteção das nossas pessoas e do ambiente."
        image={team}
      />

      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
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

      <section className="py-24 bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Certificações" title="Padrões internacionais auditados." />
            <div className="space-y-4">
              {[
                { code: "ISO 9001", name: "Sistema de Gestão da Qualidade", year: "ISO 9001:2015" },
                { code: "ISO 14001", name: "Sistema de Gestão Ambiental", year: "ISO 14001:2015" },
                { code: "ISO 45001", name: "Saúde e Segurança no Trabalho", year: "ISO 45001:2018" },
              ].map((c) => (
                <div key={c.code} className="flex gap-5 items-center bg-card border border-border rounded-xl p-5">
                  <div className="font-display font-bold text-2xl text-gold w-24">{c.code}</div>
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-navy text-white rounded-2xl p-10 shadow-elegant">
            <div className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Programas HSEQ</div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gold mb-1">Programa CARE</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Compromisso com uma Atitude Respeitosa com o Ambiente. Focado na redução de resíduos e impacto ecológico.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gold mb-1">9 Regras de Ouro</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  As nossas regras inegociáveis de segurança que salvam vidas em todas as operações do estaleiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
