import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import sonametLogo from "@/assets/sonamet-logo.png";
import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#091b2e] text-white/80 pt-20 pb-8 border-t border-white/10">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={sonametLogo}
              alt="Sonamet Industrial S.A."
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            {t(
              "Joint venture entre a Sonangol e a Subsea 7. Engenharia, Fabricação Offshore e projetos EPC/EPCI em Angola desde 1998.",
              "Joint venture between Sonangol and Subsea 7. EPC & Complex Offshore Fabrication Proudly Made in Angola Since 1998."
            )}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{t("Navegação", "Navigation")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">{t("A Empresa", "About Us")}</Link></li>
            <li><Link to="/yard" className="hover:text-gold transition-colors">Yard</Link></li>
            <li><Link to="/projects" className="hover:text-gold transition-colors">{t("Projetos", "Projects")}</Link></li>
            <li><Link to="/hseq" className="hover:text-gold transition-colors">HSEQ</Link></li>
            <li><Link to="/community" className="hover:text-gold transition-colors">{t("Comunidade", "Community")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">{t("Contacto", "Contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{t("Contactos", "Contacts")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>15 Rua 1.º de Dezembro, Cx n.º 479, Lobito, Benguela, Angola</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0 mt-0.5" />
              <span>(244) 225 300 002</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0 mt-0.5" />
              <span>info@sonamet.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{t("Certificações", "Certifications")}</h4>
          <ul className="space-y-2 text-sm">
            <li>{t("ISO 9001 — Qualidade (desde 2011)", "ISO 9001 — Quality (since 2011)")}</li>
            <li>{t("ISO 14001 — Ambiente (desde 2016)", "ISO 14001 — Environment (since 2016)")}</li>
            <li>{t("ISO 45001 — Segurança (desde 2023)", "ISO 45001 — Safety (since 2023)")}</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
        <p>
          {t(
            `© ${new Date().getFullYear()} Sonamet Industrial S.A. — Joint Venture Sonangol & Subsea 7. Todos os direitos reservados.`,
            `© ${new Date().getFullYear()} Sonamet Industrial S.A. — Sonangol & Subsea 7 Joint Venture. All rights reserved.`
          )}
        </p>
        <p>Baía do Lobito · Angola</p>
      </div>
    </footer>
  );
}
