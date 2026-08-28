import React from "react";
import logoTotalEnergies from "@/assets/clients/logo-totalenergies.png";
import logoChevron from "@/assets/clients/logo-chevron.png";
import logoExxonMobil from "@/assets/clients/logo-exxonmobil.png";
import logoSonangol from "@/assets/clients/logo-sonangol.png";
import logoTechnipFMC from "@/assets/clients/logo-technipfmc.png";
import logoSubsea7 from "@/assets/clients/logo-subsea7.png";
import logoOneSubsea from "@/assets/clients/logo-onesubsea.png";
import logoYinson from "@/assets/clients/logo-yinson.png";
import logoDsme from "@/assets/clients/logo-dsme.png";
import logoBakerAzule from "@/assets/clients/logo-baker-azule.png";

const clients = [
  { name: "Total Energies", logo: logoTotalEnergies },
  { name: "Chevron / CABGOC", logo: logoChevron },
  { name: "ExxonMobil", logo: logoExxonMobil },
  { name: "Azule Energy", logo: logoBakerAzule },
  { name: "Sonangol P&P", logo: logoSonangol },
  { name: "TechnipFMC", logo: logoTechnipFMC },
  { name: "Subsea 7", logo: logoSubsea7 },
  { name: "SLB OneSubsea", logo: logoOneSubsea },
  { name: "Yinson Production", logo: logoYinson },
  { name: "DSME", logo: logoDsme },
];

export function ClientLogoCloud() {
  return (
    <div className="mt-16 border-t border-border pt-16 overflow-hidden">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10 text-center">
        Trabalhando com os líderes da indústria
      </p>
      <div className="flex gap-8 marquee whitespace-nowrap">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center justify-center h-20 px-6 rounded-xl bg-white shadow-sm border border-border/80 transition-all duration-300 hover:shadow-md min-w-[170px]"
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-12 max-w-[140px] object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

