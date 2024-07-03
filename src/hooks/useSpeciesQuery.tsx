import { useQueries } from "@tanstack/react-query";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";
import { fetchStarWarsSpecies } from "../apis/species";

const useSpeciesByIds = (ids: string[]) =>
  useQueries({
    queries: ids.map((id) => ({
      queryKey: [QueryKey.SPECIES, id],
      queryFn: () => fetchStarWarsSpecies(id),
      staleTime: CACHED_RESPONSE_5M,
    })),
  });

export const useSpeciesQuery = () => ({
  useSpeciesByIds,
});
