import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Anchor, HardHat, Wrench, Shield, Users, Award } from "lucide-react";
import heroYard from "@/assets/hero-yard.jpg";
import yardAerial from "@/assets/yard-aerial.jpg";
import welder from "@/assets/welder.jpg";
import team from "@/assets/team.jpg";
import { SectionHeader } from "@/components/Section";

import { ClientLogoCloud } from "@/components/LogoCloud";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonamet — Your Contractor of Choice | Lobito, Angola" },
      { name: "description", content: "Joint venture Sonangol & Subsea 7. Fabricação offshore, EPC/EPCI e engenharia de classe mundial em Angola desde 1998." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "80ha", label: "Área do Estaleiro" },
  { value: "12 000m²", label: "Oficinas Cobertas" },
  { value: "6 000mT", label: "Capacidade Cais" },
  { value: "3M", label: "Horas-Homem/ano" },
];

const services = [
  { icon: HardHat, title: "Engenharia", desc: "Capacidades de engenharia de alto nível, software de análise avançado e especialistas residentes." },
  { icon: Wrench, title: "Fabricação", desc: "Fabricação de aço para projetos de águas rasas e profundas — Carbon, Stainless, Duplex, SuperDuplex e Clad." },
  { icon: Anchor, title: "EPC / EPCI", desc: "Projetos integrados de Engenharia, Procurement e Construção em Luanda e Lobito." },
  { icon: Shield, title: "HSEQ", desc: "Sistema de gestão certificado ISO 9001, foco absoluto em segurança e ambiente." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroYard})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

        <div className="container-x relative pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
              <span className="h-px w-12 bg-gold" />
              Your Contractor of Choice
            </div>
            <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold text-white text-balance leading-[1.05]">
              Construímos o <span className="text-gold">futuro offshore</span> de Angola.
            </h1>
            <p className="reveal reveal-delay-2 mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Joint venture entre Sonangol e Subsea 7. Há mais de 25 anos a entregar fabricação, engenharia e projetos EPC/EPCI de classe mundial a partir da Baía do Lobito.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
              >
                Os Nossos Serviços <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Falar Connosco
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-navy-deep/60 backdrop-blur-md">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-4 text-center">
                <div className="font-display text-2xl md:text-4xl font-bold text-gold">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={yardAerial}
              alt="Estaleiro Sonamet na Baía do Lobito ao crepúsculo"
              loading="lazy"
              width={1600}
              height={1000}
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-gold rounded-2xl p-6 shadow-gold hidden md:block animate-float">
              <div className="font-display text-4xl font-bold text-navy-deep">25+</div>
              <div className="text-xs uppercase tracking-widest text-navy-deep/80">Anos a entregar excelência</div>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="A Empresa"
              title="Made in Angola. Construído para o mundo."
              description="Estabelecida em 1998 e idealmente localizada na Baía do Lobito, a Sonamet tornou-se uma das mais importantes empresas de construção da região — comprometida com a transferência de tecnologia para a indústria angolana."
            />
            <ul className="space-y-4">
              {[
                "Joint venture entre Sonangol e Subsea 7",
                "Capacidade de 3 milhões de horas-homem produtivas",
                "Maioria de colaboradores angolanos",
                "Modelo de sucesso para desenvolvimento local em África",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
              Conheça a nossa história
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <ClientLogoCloud />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-x">
          <SectionHeader
            eyebrow="Capacidades"
            title="Soluções integradas para óleo e gás"
            description="Da engenharia conceptual à entrega final, cobrimos todo o ciclo de vida dos projetos offshore."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="text-navy-deep" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SHOWCASE */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow="Fabricação"
              title="Aço soldado com a precisão dos melhores."
              description="A Sonamet desenvolveu competências reconhecidas na fabricação de aço para projetos de águas rasas e profundas. A nossa equipa altamente qualificada está apta a fabricar todo o tipo de estruturas offshore."
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Carbon Steel", "Stainless", "Duplex", "SuperDuplex", "Clad", "Inconel"].map((m) => (
                <div key={m} className="rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-center border border-border">
                  {m}
                </div>
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
              Ver capacidades técnicas
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img
              src={welder}
              alt="Soldador Sonamet em ação no estaleiro"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-2xl shadow-elegant w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${team})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              <span className="h-px w-8 bg-gold" />
              Missão & Valores
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Liderar o desenvolvimento e a transferência de tecnologia em Angola.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Users, label: "As Nossas Pessoas" },
              { icon: Shield, label: "Segurança e Ambiente" },
              { icon: Award, label: "Foco no Cliente" },
              { icon: HardHat, label: "Excelência" },
              { icon: Anchor, label: "Comunidade" },
            ].map((v) => (
              <div key={v.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <v.icon className="mx-auto text-gold mb-4" size={32} />
                <div className="text-sm font-semibold">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-12 md:p-20 text-center shadow-elegant">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance max-w-3xl mx-auto">
                Pronto para o seu próximo projeto offshore?
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
                Fale com a nossa equipa de engenharia e descubra como podemos entregar valor ao seu projeto.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
              >
                Solicitar Proposta <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
