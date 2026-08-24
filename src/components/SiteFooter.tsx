import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gradient-navy text-white/80 pt-20 pb-8 border-t border-white/10">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
              <span className="font-display text-lg font-bold text-navy-deep">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white uppercase">SONAMET</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Made in Angola</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-white/75">
            {lang === "pt"
              ? "Joint venture entre a Sonangol (40%) e a Subsea 7 (60%). Soluções integradas de fabricação offshore, engenharia submarina e projetos EPC/EPCI na Baía do Lobito desde 1998."
              : "Joint venture between Sonangol (40%) and Subsea 7 (60%). Integrated offshore fabrication, subsea engineering, and EPC/EPCI solutions in Lobito Bay since 1998."}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gold">
            {lang === "pt" ? "NAVEGAÇÃO" : "NAVIGATION"}
          </h4>
          <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                {lang === "pt" ? "SOBRE NÓS" : "ABOUT US"}
              </Link>
            </li>
            <li>
              <Link to="/yard" className="hover:text-gold transition-colors">
                {lang === "pt" ? "ESTALEIRO" : "YARD"}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gold transition-colors">
                {lang === "pt" ? "PROJETOS" : "PROJECTS"}
              </Link>
            </li>
            <li>
              <Link to="/qhse" className="hover:text-gold transition-colors">
                QHSE
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-gold transition-colors">
                {lang === "pt" ? "COMUNIDADE" : "COMMUNITY"}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors">
                {lang === "pt" ? "CONTACTO" : "CONTACTS"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gold">
            {lang === "pt" ? "CONTACTOS OFICIAIS" : "OFFICIAL CONTACTS"}
          </h4>
          <ul className="space-y-3.5 text-xs">
            <li className="flex gap-2.5 items-start">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase">
                  {lang === "pt" ? "ESTALEIRO LOBITO:" : "LOBITO YARD:"}
                </span>
                <div className="text-white/70 text-[11px] mt-0.5">15 Rua 1.º de Dezembro, Cx n.º 479, Lobito, Benguela</div>
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase">
                  {lang === "pt" ? "ESCRITÓRIO LUANDA:" : "LUANDA OFFICE:"}
                </span>
                <div className="text-white/70 text-[11px] mt-0.5">Rua Domingos Tchekahanga n°18, Ingombotas, Cx n.º 5728</div>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <span className="text-white/90 font-medium">Lobito: (244) 225 300 002</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <span className="text-white/90 font-medium">Luanda: (244) 225 400 011</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest text-gold">
            {lang === "pt" ? "CERTIFICAÇÕES & ÉTICA" : "CERTIFICATIONS & ETHICS"}
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-semibold uppercase">ISO 9001 — Quality Management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-semibold uppercase">ISO 14001 — Environment</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-semibold uppercase">ISO 45001 — Health & Safety</span>
            </li>
            <li className="pt-2">
              <a
                href="/documents/Sonamet_Code_of_Business_Conduct_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gold hover:underline"
              >
                {lang === "pt" ? "CÓDIGO DE CONDUTA OFICIAL (PDF) →" : "OFFICIAL CODE OF CONDUCT (PDF) →"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] uppercase text-white/60">
        <p>© {new Date().getFullYear()} Sonamet Industrial S.A. — Sonangol (40%) & Subsea 7 (60%). All rights reserved.</p>
        <p className="font-bold text-gold">Baía do Lobito • Benguela • Angola</p>
      </div>
    </footer>
  );
}
