import React from "react";

const clients = [
  "Sonangol",
  "Subsea 7",
  "TotalEnergies",
  "Chevron",
  "BP",
  "Eni",
  "ExxonMobil",
  "Equinor",
];

export function ClientLogoCloud() {
  return (
    <div className="mt-16 border-t border-border pt-16">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
        Trabalhando com os líderes da indústria
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
        {clients.map((client) => (
          <div
            key={client}
            className="flex items-center justify-center h-12 px-4 rounded-lg bg-secondary/50 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <span className="text-xl font-bold text-foreground/70">{client}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
