import { createFileRoute } from "@tanstack/react-router";
import { About } from "./about";
import aboutUsPhoto from "@/assets/about-us-foto.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonamet Industrial S.A. — Your Contractor of Choice | Lobito, Angola" },
      { name: "description", content: "Joint venture Sonangol & Subsea 7. EPC & Complex Offshore Fabrication Proudly Made in Angola Since 1998. Fabricação offshore, EPC/EPCI e engenharia de classe mundial a partir da Baía do Lobito." },
      { property: "og:title", content: "Sonamet Industrial S.A. — Your Contractor of Choice | Lobito, Angola" },
      { property: "og:image", content: aboutUsPhoto },
    ],
  }),
  component: About,
});
