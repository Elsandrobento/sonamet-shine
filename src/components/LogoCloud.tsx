import React from "react";
import { Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ClientLogoCloud() {
  const { lang } = useLanguage();

  const clientCards = [
    {
      title: "TotalEnergies",
      subtitle: "Girassol · Pazflor · CLOV · Kaombo",
      tags: ["Girassol", "Pazflor", "CLOV", "Kaombo"],
    },
    {
      title: "Chevron / CABGOC",
      subtitle: "Mafumeira · CRX · Lianzi · MaFuSul · Bloco 0",
      subtitleEn: "Mafumeira · CRX · Lianzi · MaFuSul · Block 0",
      tags: ["Mafumeira", "CRX", "Lianzi", "MaFuSul", "Bloco 0"],
    },
    {
      title: "ExxonMobil",
      subtitle: "Kizomba · Gas Gathering · Bloco 15",
      subtitleEn: "Kizomba · Gas Gathering · Block 15",
      tags: ["Kizomba", "Gas Gathering", "Bloco 15"],
    },
    {
      title: "Azule Energy (BP+Eni)",
      subtitle: "Greater Plutonio · GES · Bloco 18",
      subtitleEn: "Greater Plutonio · GES · Block 18",
      tags: ["Greater Plutonio", "GES", "Bloco 18"],
    },
    {
      title: "Sonangol P&P",
      subtitle: "Operações conjuntas e parcerias no Bloco 0",
      subtitleEn: "Joint operations & Block 0 partnerships",
      tags: ["Joint Operations", "Bloco 0"],
    },
    {
      title: "TechnipFMC",
      subtitle: "Estruturas submarinas · Bloco 15/06 · Agogo · CLOV",
      subtitleEn: "Subsea structures · Block 15/06 · Agogo · CLOV",
      tags: ["Subsea Structures", "Bloco 15/06", "Agogo"],
    },
    {
      title: "Subsea 7",
      subtitle: "Parceiro EPCI · Múltiplas campanhas SURF",
      subtitleEn: "EPCI partner · Multiple SURF campaigns",
      tags: ["Parceiro EPCI", "SURF Campaigns"],
    },
    {
      title: "SLB OneSubsea · Baker Hughes · DSME",
      subtitle: "Parceiros internacionais EPC / Submarino",
      subtitleEn: "International EPC & Subsea Partners",
      tags: ["SLB OneSubsea", "Baker Hughes", "DSME"],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {clientCards.map((client) => (
        <div
          key={client.title}
          className="group bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-elegant hover:border-gold transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                <Building2 size={20} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
                {lang === "pt" ? "CLIENTE OFICIAL" : "MAJOR OPERATOR"}
              </span>
            </div>
            
            <h3 className="font-extrabold text-base sm:text-lg text-foreground uppercase tracking-tight leading-tight mb-3 group-hover:text-navy transition-colors">
              {client.title}
            </h3>
            
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-medium">
              {lang === "pt" ? client.subtitle : client.subtitleEn || client.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
            {client.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase bg-secondary text-navy px-2 py-0.5 rounded border border-border/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
