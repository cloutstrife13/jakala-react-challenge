import { useQueries } from "@tanstack/react-query";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";
import { fetchStarWarsPlanet } from "../apis/planets";

const usePlanetsByIds = (ids: string[]) =>
  useQueries({
    queries: ids.map((id) => ({
      queryKey: [QueryKey.PLANETS, id],
      queryFn: () => fetchStarWarsPlanet(id),
      staleTime: CACHED_RESPONSE_5M,
    })),
  });

export const usePlanetsQuery = () => ({
  usePlanetsByIds,
});
