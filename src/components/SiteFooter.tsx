import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-navy text-white/80 pt-20 pb-8">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold">
              <span className="font-display text-lg font-bold text-navy-deep">S</span>
            </div>
            <div className="font-display text-lg font-bold text-white">SONAMET</div>
          </div>
          <p className="text-sm leading-relaxed">
            Joint venture entre Sonangol e Subsea 7. Construção, fabricação e EPC/EPCI para a indústria de óleo e gás em Angola desde 1998.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">A Empresa</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Serviços</Link></li>
            <li><Link to="/projects" className="hover:text-gold transition-colors">Projetos</Link></li>
            <li><Link to="/hseq" className="hover:text-gold transition-colors">HSEQ</Link></li>
            <li><Link to="/community" className="hover:text-gold transition-colors">Comunidade</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contactos</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> Baía do Lobito, Benguela, Angola</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> +244 272 220 000</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> info@sonamet.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Certificações</h4>
          <ul className="space-y-2 text-sm">
            <li>ISO 9001 — Qualidade</li>
            <li>ISO 14001 — Ambiente</li>
            <li>ISO 45001 — Segurança</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Sonamet — Sonangol & Subsea 7 Joint Venture. Todos os direitos reservados.</p>
        <p>Lobito Bay · Angola</p>
      </div>
    </footer>
  );
}
