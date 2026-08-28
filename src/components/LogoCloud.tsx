import React from "react";

const clients = [
  "Total Energies",
  "Chevron / CABGOC",
  "ExxonMobil",
  "Azule Energy",
  "Sonangol P&P",
  "TechnipFMC",
  "Subsea 7",
  "SLB OneSubsea",
  "Baker Hughes",
];

export function ClientLogoCloud() {
  return (
    <div className="mt-16 border-t border-border pt-16 overflow-hidden">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
        Trabalhando com os líderes da indústria
      </p>
      <div className="flex gap-12 marquee whitespace-nowrap">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex items-center justify-center h-16 px-8 rounded-xl bg-white shadow-sm border border-border grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md min-w-[160px]"
          >
            <span className="text-xl font-black text-navy tracking-tighter italic">{client}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
