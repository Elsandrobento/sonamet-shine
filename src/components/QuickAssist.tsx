import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function QuickAssist() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[340px] rounded-2xl bg-navy-deep/95 p-6 text-white shadow-2xl backdrop-blur-xl border border-white/10"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold">{t("Fale Connosco", "Contact Us")}</h3>
                <p className="text-xs text-white/60">{t("A nossa equipa responderá em breve.", "Our team will respond shortly.")}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Send size={24} />
                </div>
                <p className="font-semibold text-gold">{t("Mensagem Enviada!", "Message Sent!")}</p>
                <p className="text-sm text-white/70 mt-2">{t("Obrigado pelo contacto.", "Thank you for contacting us.")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    placeholder={t("O seu nome", "Your name")}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("O seu email", "Your email")}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t("Como podemos ajudar?", "How can we help?")}
                    rows={3}
                    required
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft transition-colors"
                >
                  <Send size={16} />
                  {t("Enviar Mensagem", "Send Message")}
                </button>
              </form>
            )}

            <div className="mt-6 flex justify-center gap-6 border-t border-white/10 pt-4">
              <a href="tel:+244225300002" className="text-white/60 hover:text-gold transition-colors" title="Ligar">
                <Phone size={20} />
              </a>
              <a href="mailto:info@sonamet.com" className="text-white/60 hover:text-gold transition-colors" title="Email">
                <Mail size={20} />
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
