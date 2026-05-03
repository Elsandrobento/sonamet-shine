import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import yardAerial from "@/assets/yard-aerial.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Sonamet" },
      { name: "description", content: "Entre em contacto com a Sonamet. Estaleiro na Baía do Lobito e escritórios em Luanda." },
      { property: "og:title", content: "Contacto — Sonamet" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Fale Connosco"
        title="Vamos conversar sobre o seu próximo projeto."
        description="Disponíveis para responder a pedidos de proposta, parcerias e oportunidades de carreira."
        image={yardAerial}
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Informações de contacto</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Estaleiro Lobito", value: "Baía do Lobito, Província de Benguela, Angola" },
                { icon: MapPin, label: "Escritório Luanda", value: "Luanda, Angola" },
                { icon: Phone, label: "Telefone", value: "+244 272 220 000" },
                { icon: Mail, label: "Email", value: "info@sonamet.com" },
                { icon: Clock, label: "Horário", value: "Segunda a Sexta, 08:00 — 17:00" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="h-11 w-11 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                    <c.icon className="text-navy-deep" size={20} />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-foreground font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden shadow-elegant aspect-video">
              <iframe
                title="Mapa Sonamet Lobito"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.51%2C-12.39%2C13.59%2C-12.34&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-elegant h-fit">
            <h3 className="text-2xl font-bold mb-2">Envie-nos uma mensagem</h3>
            <p className="text-muted-foreground mb-8 text-sm">Responderemos em até 48h úteis.</p>

            {sent ? (
              <div className="rounded-xl bg-gold/10 border border-gold p-6 text-center">
                <div className="font-semibold text-navy-deep">Mensagem enviada!</div>
                <p className="text-sm text-muted-foreground mt-1">Obrigado pelo seu contacto. Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="name" required />
                  <Field label="Empresa" name="company" />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Telefone" name="phone" />
                <div>
                  <label className="block text-sm font-medium mb-1.5">Assunto</label>
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                    <option>Pedido de proposta</option>
                    <option>Parceria comercial</option>
                    <option>Carreiras</option>
                    <option>Imprensa</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Mensagem</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-gold py-3.5 font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}
