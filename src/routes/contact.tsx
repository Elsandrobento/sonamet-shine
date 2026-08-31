import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useState } from "react";
import quay2 from "@/assets/quay-2.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Sonamet Industrial S.A." },
      { name: "description", content: "Let's Build Together. Entre em contacto com a Sonamet. Estaleiro na Baía do Lobito e escritório em Luanda." },
      { property: "og:title", content: "Contacto — Sonamet Industrial S.A." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={t("Vamos Construir Juntos", "Let's Build Together")}
        title="Your Contractor of Choice"
        description={t(
          "A Sonamet recebe potenciais clientes, parceiros e investidores para visitas estruturadas ao estaleiro, com acesso total às oficinas de fabricação, oficinas brancas, spoolbase e cais.",
          "Sonamet welcomes prospective clients, partners and investors for a structured yard tour, full access to fabrication shops, white workshops, spoolbase and quaysides."
        )}
        image={quay2}
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("Informações de Contacto", "Contact Information")}
            </h2>
            <div className="space-y-8">
              {/* Lobito */}
              <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="text-navy-deep" size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                    {t("Estaleiro Lobito (Sede)", "Lobito Yard (HQ)")}
                  </div>
                  <div className="text-foreground font-semibold text-base mb-1">SONAMET INDUSTRIAL S.A.</div>
                  <div className="text-muted-foreground text-sm leading-relaxed mb-2">
                    15 Rua 1.º de Dezembro, Cx n.º 479<br />
                    Lobito, Benguela, República de Angola
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone size={16} className="text-gold" /> Tel: (244) 225 300 002
                  </div>
                </div>
              </div>

              {/* Luanda */}
              <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <Building2 className="text-navy-deep" size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                    {t("Escritório Luanda", "Luanda Office")}
                  </div>
                  <div className="text-foreground font-semibold text-base mb-1">SONAMET INDUSTRIAL S.A.</div>
                  <div className="text-muted-foreground text-sm leading-relaxed mb-2">
                    Rua Domingos Tchekahanga nº 18, Ingombotas, Luanda<br />
                    c/o Edifício de WAPO BP, Cx n.º 5728
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone size={16} className="text-gold" /> Tel: (244) 225 400 011
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                    <Mail className="text-navy-deep" size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                    <div className="text-foreground font-medium text-sm">info@sonamet.com</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                    <Clock className="text-navy-deep" size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                      {t("Horário de Funcionamento", "Working Hours")}
                    </div>
                    <div className="space-y-1.5 text-xs text-foreground font-medium leading-relaxed">
                      <div>
                        <span className="text-muted-foreground block text-[11px]">
                          {t("Segunda a Quinta-feira:", "Monday to Thursday:")}
                        </span>
                        <span className="font-semibold text-foreground">07:00–12:00 & 13:00–17:00</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[11px]">
                          {t("Sexta-feira:", "Friday:")}
                        </span>
                        <span className="font-semibold text-foreground">07:00–12:00 & 13:00–16:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-elegant aspect-video border border-border">
              <iframe
                title="Mapa Sonamet Lobito"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.51%2C-12.39%2C13.59%2C-12.34&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-elegant h-fit">
            <h3 className="text-2xl font-bold mb-2">
              {t("Envie-nos uma mensagem", "Send us a message")}
            </h3>
            <p className="text-muted-foreground mb-8 text-sm">
              {t(
                "Fale com a nossa equipa para agendar visitas ao estaleiro ou pedidos de proposta.",
                "Speak with our team to schedule yard tours or request project proposals."
              )}
            </p>

            {sent ? (
              <div className="rounded-xl bg-gold/10 border border-gold p-6 text-center">
                <div className="font-semibold text-navy-deep">
                  {t("Mensagem enviada com sucesso!", "Message sent successfully!")}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(
                    "Obrigado pelo seu contacto. Entraremos em contacto em breve.",
                    "Thank you for reaching out. We will get back to you shortly."
                  )}
                </p>
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
                  <Field label={t("Nome", "Name")} name="name" required />
                  <Field label={t("Empresa", "Company")} name="company" />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label={t("Telefone", "Phone")} name="phone" />
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {t("Assunto", "Subject")}
                  </label>
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                    <option>{t("Visita Guiada ao Estaleiro (Yard Tour)", "Yard Tour Request")}</option>
                    <option>{t("Pedido de Proposta (EPC / EPCI / Fabricação)", "Proposal Request (EPC / EPCI / Fabrication)")}</option>
                    <option>{t("Parceria Comercial / Subsea", "Commercial / Subsea Partnership")}</option>
                    <option>{t("Carreiras & Recrutamento", "Careers & Recruitment")}</option>
                    <option>{t("Outro Assunto", "Other Subject")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {t("Mensagem", "Message")}
                  </label>
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
                  {t("Enviar mensagem", "Send message")}
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
