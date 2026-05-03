import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/about", label: "A Empresa" },
  { to: "/services", label: "Serviços" },
  { to: "/projects", label: "Projetos" },
  { to: "/hseq", label: "HSEQ" },
  { to: "/community", label: "Comunidade" },
  { to: "/contact", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-navy-deep/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://strapi-cms.sonangol.co.ao/uploads/sonamet_logo_2f91198dd8.png" 
            alt="Sonamet Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback se a imagem oficial não carregar
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-gold transition-transform group-hover:scale-105">
              <span className="font-display text-lg font-bold text-navy-deep">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white">SONAMET</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Made in Angola</div>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105"
        >
          Solicitar Proposta
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/5">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white/80 hover:text-gold"
                activeProps={{ className: "py-3 text-base font-medium text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
