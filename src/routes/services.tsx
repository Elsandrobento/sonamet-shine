import { createFileRoute } from "@tanstack/react-router";
import { Yard } from "./yard";

export const Route = createFileRoute("/services")({
  component: Yard,
});
