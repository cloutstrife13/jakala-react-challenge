import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsFilms } from "../apis/films";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";

export const useFilms = () =>
  useQuery({
    queryKey: [QueryKey.FILMS],
    queryFn: fetchStarWarsFilms,
    staleTime: CACHED_RESPONSE_5M,
  });
