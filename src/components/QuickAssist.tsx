import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function QuickAssist() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[340px] rounded-3xl bg-navy-deep/95 p-6 text-white shadow-2xl backdrop-blur-xl border border-white/15"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold uppercase text-gold">
                  {lang === "pt" ? "FALE CONNOSCO" : "CONTACT US"}
                </h3>
                <p className="text-[11px] uppercase text-white/70">
                  {lang === "pt" ? "Equipa técnica de apoio" : "Technical support team"}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Send size={24} />
                </div>
                <p className="font-bold uppercase text-gold">
                  {lang === "pt" ? "MENSAGEM ENVIADA!" : "MESSAGE SENT!"}
                </p>
                <p className="text-xs text-white/70 mt-2">
                  {lang === "pt" ? "Obrigado pelo contacto." : "Thank you for contacting us."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3"
              >
                <div>
                  <input
                    type="text"
                    placeholder={lang === "pt" ? "O seu nome" : "Your name"}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={lang === "pt" ? "O seu email corporativo" : "Your corporate email"}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={lang === "pt" ? "Como podemos ajudar?" : "How can we assist you?"}
                    rows={3}
                    required
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-xs font-bold uppercase tracking-wider text-navy-deep hover:bg-gold-soft transition-colors"
                >
                  <Send size={14} />
                  {lang === "pt" ? "ENVIAR MENSAGEM" : "SEND MESSAGE"}
                </button>
              </form>
            )}

            <div className="mt-6 flex justify-center gap-6 border-t border-white/10 pt-4">
              <a href="tel:+244225300002" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5 text-xs font-semibold" title="Lobito Yard">
                <Phone size={16} className="text-gold" />
                <span>Lobito</span>
              </a>
              <a href="tel:+244225400011" className="text-white/70 hover:text-gold transition-colors flex items-center gap-1.5 text-xs font-semibold" title="Luanda Office">
                <Phone size={16} className="text-gold" />
                <span>Luanda</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-navy-deep shadow-gold ring-4 ring-white/10"
        aria-label="Quick Assist"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
