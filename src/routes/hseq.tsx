import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/hseq")({
  component: () => <Navigate to="/qhse" replace />,
});
