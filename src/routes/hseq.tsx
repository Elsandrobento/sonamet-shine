import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hseq")({
  beforeLoad: () => {
    throw redirect({
      to: "/qhse",
    });
  },
});

