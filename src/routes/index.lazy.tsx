import { createLazyFileRoute } from "@tanstack/react-router";
import Films from "../views/Films";

export const Route = createLazyFileRoute("/")({
  component: Films,
});
