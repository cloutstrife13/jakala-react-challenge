import { createLazyFileRoute } from "@tanstack/react-router";
import FilmView from "../views/Film";

export const Route = createLazyFileRoute("/film/$episode")({
  component: FilmAdapter,
});

function FilmAdapter() {
  const { episode } = Route.useParams();

  return <FilmView episode={episode} />;
}
