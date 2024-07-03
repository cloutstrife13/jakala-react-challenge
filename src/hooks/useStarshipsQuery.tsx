import { useQueries } from "@tanstack/react-query";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";
import { fetchStarWarsStarship } from "../apis/starships";

const useStarshipsByIds = (ids: string[]) =>
  useQueries({
    queries: ids.map((id) => ({
      queryKey: [QueryKey.STARSHIPS, id],
      queryFn: () => fetchStarWarsStarship(id),
      staleTime: CACHED_RESPONSE_5M,
    })),
  });

export const useStarshipsQuery = () => ({
  useStarshipsByIds,
});
