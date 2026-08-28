import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import sonametLogo from "@/assets/sonamet-logo.png";
import { useLanguage } from "@/context/LanguageContext";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const nav = [
    { to: "/about", label: t("A Empresa", "About Us") },
    { to: "/yard", label: "Yard" },
    { to: "/projects", label: t("Projetos", "Projects") },
    { to: "/qhse", label: "QHSE" },
    { to: "/community", label: t("Comunidade", "Community") },
    { to: "/contact", label: t("Contacto", "Contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#091b2e]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-[#091b2e]/95 via-[#091b2e]/70 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        {/* Original Sonamet Logo — Rendered directly with 100% opacity */}
        <Link to="/about" className="flex items-center gap-3">
          <img 
            src={sonametLogo} 
            alt="Sonamet Industrial S.A." 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3.5 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
              activeProps={{ className: "px-3.5 py-2 text-sm font-medium text-gold font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Language Selector + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/15">
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                language === "pt"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                language === "en"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
          >
            {t("Solicitar Proposta", "Request Proposal")}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Language Switcher Mobile */}
          <div className="flex items-center gap-0.5 bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/15">
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2 py-0.5 text-xs font-bold rounded-full transition-all ${
                language === "pt"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 text-xs font-bold rounded-full transition-all ${
                language === "en"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <nav className="container-x flex flex-col py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white/80 hover:text-gold border-b border-white/5"
                activeProps={{ className: "py-3 text-base font-semibold text-gold border-b border-white/5" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy-deep shadow-gold"
              >
                {t("Solicitar Proposta", "Request Proposal")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
