import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { MapPin, Phone, Clock, Send, Building2, CheckCircle2, ShieldCheck, Compass } from "lucide-react";
import { useState } from "react";
import yardAerial from "@/assets/yard-dji-0200.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contactos — Sonamet Industrial S.A. | Lobito & Luanda" },
      { name: "description", content: "Contacte a Sonamet Industrial S.A. Estaleiro no Lobito (15 Rua 1.º de Dezembro) e Escritório em Luanda (Rua Domingos Tchekahanga n°18). Visitas estruturadas ao estaleiro e pedidos de proposta." },
      { property: "og:title", content: "Contactos — Sonamet Industrial S.A." },
      { property: "og:image", content: yardAerial },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "Pedido de Proposta",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow={lang === "pt" ? "VAMOS CONSTRUIR JUNTOS" : "LET'S BUILD TOGETHER"}
        title={lang === "pt" ? "O SEU EMPREITEIRO DE CONFIANÇA" : "YOUR CONTRACTOR OF CHOICE"}
        description={lang === "pt"
          ? "A Sonamet recebe clientes, parceiros e investidores para visitas estruturadas ao estaleiro, com acesso integral às oficinas de fabricação, oficinas brancas, spoolbase e cais."
          : "Sonamet welcomes prospective clients, partners, and investors for a structured yard tour, with full access to fabrication shops, white workshops, spoolbase, and quaysides."}
        image={yardAerial}
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Official Contact Locations & Hours */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
                {lang === "pt" ? "INFORMAÇÕES OFICIAIS" : "OFFICIAL INFORMATION"}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-foreground">
                {lang === "pt" ? "INSTALAÇÕES & ESCRITÓRIOS" : "FACILITIES & OFFICES"}
              </h2>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {lang === "pt"
                  ? "Estamos sediados na Baía do Lobito e contamos com escritório de coordenação executiva em Luanda."
                  : "Headquartered in Lobito Bay with an executive liaison office in Luanda."}
              </p>
            </div>

            {/* Lobito Yard */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-gold transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <Building2 className="text-navy-deep" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                    {lang === "pt" ? "SEDE & ESTALEIRO PRINCIPAL" : "HEADQUARTERS & MAIN YARD"}
                  </div>
                  <h3 className="text-xl font-bold uppercase text-navy mb-2">LOBITO, BENGUELA</h3>
                  <div className="space-y-1 text-xs sm:text-sm text-foreground/85">
                    <p className="font-bold">SONAMET INDUSTRIAL S.A.</p>
                    <p>15 Rua 1.º de Dezembro, Cx n.º 479</p>
                    <p>Lobito, Benguela — República de Angola</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm font-bold text-navy">
                    <Phone size={16} className="text-gold" />
                    <span>Tel: (244) 225 300 002</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Luanda Office */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-gold transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <Compass className="text-navy-deep" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">
                    {lang === "pt" ? "ESCRITÓRIO DE REPRESENTAÇÃO" : "REPRESENTATIVE OFFICE"}
                  </div>
                  <h3 className="text-xl font-bold uppercase text-navy mb-2">LUANDA</h3>
                  <div className="space-y-1 text-xs sm:text-sm text-foreground/85">
                    <p className="font-bold">SONAMET INDUSTRIAL S.A.</p>
                    <p>Rua Domingos Tchekahanga n°18, Ingombotas</p>
                    <p>c/o Edifício de WAPO BP, Cx n.º 5728</p>
                    <p>Luanda — República de Angola</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm font-bold text-navy">
                    <Phone size={16} className="text-gold" />
                    <span>Tel: (244) 225 400 011</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Operating Hours */}
            <div className="bg-secondary rounded-3xl p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-navy flex items-center justify-center text-gold">
                  <Clock size={20} />
                </div>
                <h4 className="text-base font-extrabold uppercase text-navy">
                  {lang === "pt" ? "HORÁRIO DE FUNCIONAMENTO OFICIAL" : "OFFICIAL OPERATING HOURS"}
                </h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-foreground/90">
                <div className="flex justify-between py-1.5 border-b border-border/60">
                  <span className="font-semibold uppercase">{lang === "pt" ? "SEGUNDA A QUINTA-FEIRA:" : "MONDAY TO THURSDAY:"}</span>
                  <span className="font-bold text-navy">07:00–12:00 & 13:00–17:00</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold uppercase">{lang === "pt" ? "SEXTA-FEIRA:" : "FRIDAY:"}</span>
                  <span className="font-bold text-navy">07:00–12:00 & 13:00–16:00</span>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border aspect-video">
              <iframe
                title="Mapa Estaleiro Sonamet Lobito"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.51%2C-12.39%2C13.59%2C-12.34&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Contact Form & Yard Tour Request */}
          <div className="bg-card border-2 border-border rounded-3xl p-8 lg:p-10 shadow-elegant">
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2">
              {lang === "pt" ? "ENVIE-NOS UMA MENSAGEM" : "SEND US A MESSAGE"}
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-2 text-foreground">
              {lang === "pt" ? "SOLICITAR PROPOSTA OU VISITA" : "REQUEST PROPOSAL OR YARD TOUR"}
            </h3>
            <p className="text-muted-foreground mb-8 text-xs sm:text-sm leading-relaxed">
              {lang === "pt"
                ? "Preencha o formulário abaixo para pedidos comerciais, visitas técnicas ao estaleiro ou assuntos institucionais."
                : "Fill out the form below for commercial tenders, technical yard tour bookings, or institutional inquiries."}
            </p>

            {sent ? (
              <div className="rounded-2xl bg-gold/15 border-2 border-gold p-8 text-center animate-fade-in">
                <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-navy-deep shadow-gold">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold uppercase text-navy-deep">
                  {lang === "pt" ? "MENSAGEM ENVIADA COM SUCESSO!" : "MESSAGE SENT SUCCESSFULLY!"}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80 mt-2 max-w-md mx-auto">
                  {lang === "pt"
                    ? "Obrigado pelo seu contacto. A equipa da Sonamet analisará o seu pedido e responderá com brevidade."
                    : "Thank you for contacting us. The Sonamet team will review your request and get back to you promptly."}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase text-navy hover:text-gold tracking-wider"
                >
                  {lang === "pt" ? "ENVIAR NOVA MENSAGEM" : "SEND ANOTHER MESSAGE"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      {lang === "pt" ? "NOME COMPLETO *" : "FULL NAME *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === "pt" ? "Ex.: Eng. António Silva" : "e.g. John Smith"}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      {lang === "pt" ? "EMPRESA / ORGANIZAÇÃO" : "COMPANY / ORGANIZATION"}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={lang === "pt" ? "Ex.: Operadora / Empreiteiro" : "e.g. Operator / Contractor"}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      {lang === "pt" ? "EMAIL CORPORATIVO *" : "CORPORATE EMAIL *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      {lang === "pt" ? "TELEFONE DE CONTACTO" : "PHONE NUMBER"}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(+244) 9XX XXX XXX"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    {lang === "pt" ? "ASSUNTO / TIPO DE PEDIDO" : "SUBJECT / REQUEST TYPE"}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option>{lang === "pt" ? "Pedido de Proposta (RFP / Tender)" : "Tender / Request for Proposal (RFP)"}</option>
                    <option>{lang === "pt" ? "Agendamento de Visita ao Estaleiro (Yard Tour)" : "Yard Tour Booking Request"}</option>
                    <option>{lang === "pt" ? "Fabricação em Águas Rasas / Profundas" : "Shallow / Deepwater Fabrication"}</option>
                    <option>{lang === "pt" ? "Serviços de Spoolbase & Flowlines" : "Spoolbase & Flowlines Services"}</option>
                    <option>{lang === "pt" ? "Desmantelamento (Decommissioning)" : "Decommissioning Services"}</option>
                    <option>{lang === "pt" ? "Armazenagem & Logística Portuária" : "Quayside Storage & Logistics"}</option>
                    <option>{lang === "pt" ? "Outro Assunto" : "Other Inquiry"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    {lang === "pt" ? "MENSAGEM / ESCOPO DO PROJETO *" : "MESSAGE / PROJECT SCOPE *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === "pt" ? "Descreva o âmbito do seu projeto, prazos previstos e requisitos técnicos..." : "Describe your project scope, timeline, and technical requirements..."}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-gold py-4 font-bold uppercase tracking-wider text-navy-deep shadow-gold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Send size={18} />
                  {lang === "pt" ? "ENVIAR MENSAGEM" : "SEND MESSAGE"}
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-border/80 text-xs text-muted-foreground flex items-center gap-2 uppercase font-semibold">
              <ShieldCheck size={16} className="text-gold shrink-0" />
              <span>{lang === "pt" ? "Garantimos total confidencialidade e resposta por equipas técnicas." : "Strict confidentiality and response by technical teams."}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
