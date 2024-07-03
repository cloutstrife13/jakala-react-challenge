import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../views/App";

export const Route = createLazyFileRoute("/")({
  component: App,
});
