import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SiteHeader() {
  const { lang, setLang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: lang === "pt" ? "SOBRE NÓS" : "ABOUT US" },
    { to: "/yard", label: lang === "pt" ? "ESTALEIRO" : "YARD" },
    { to: "/projects", label: lang === "pt" ? "PROJETOS" : "PROJECTS" },
    { to: "/qhse", label: "QHSE" },
    { to: "/community", label: lang === "pt" ? "COMUNIDADE" : "COMMUNITY" },
    { to: "/contact", label: lang === "pt" ? "CONTACTO" : "CONTACTS" },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-navy-deep/90 via-navy-deep/40 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://strapi-cms.sonangol.co.ao/uploads/sonamet_logo_2f91198dd8.png" 
            alt="Sonamet Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
              <span className="font-display text-lg font-bold text-navy-deep">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white uppercase">SONAMET</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Made in Angola</div>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white/80 transition-colors hover:text-gold"
              activeProps={{ className: "px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-gold border-b-2 border-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/15 text-xs font-bold">
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "pt"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-gold text-navy-deep shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-deep shadow-gold transition-transform hover:scale-105"
          >
            {lang === "pt" ? "SOLICITAR PROPOSTA" : "REQUEST PROPOSAL"}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-gold text-xs font-bold border border-white/15"
          >
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/10 animate-fade-in">
          <nav className="container-x flex flex-col py-6 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-gold"
                activeProps={{ className: "py-3 text-sm font-bold uppercase tracking-wider text-gold border-l-2 border-gold pl-2" }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/60 font-semibold">IDIOMA / LANGUAGE:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => { setLang("pt"); setOpen(false); }}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${lang === "pt" ? "bg-gold text-navy-deep" : "bg-white/10 text-white"}`}
                >
                  Português
                </button>
                <button
                  onClick={() => { setLang("en"); setOpen(false); }}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${lang === "en" ? "bg-gold text-navy-deep" : "bg-white/10 text-white"}`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center block rounded-full bg-gradient-gold py-3 text-xs font-bold uppercase tracking-wider text-navy-deep shadow-gold"
              >
                {lang === "pt" ? "SOLICITAR PROPOSTA" : "REQUEST PROPOSAL"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
