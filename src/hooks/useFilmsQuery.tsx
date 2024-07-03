import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsFilm, fetchStarWarsFilms } from "../apis/films";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";

const useFilms = () =>
  useQuery({
    queryKey: [QueryKey.FILMS],
    queryFn: fetchStarWarsFilms,
    staleTime: CACHED_RESPONSE_5M,
  });

const useFilm = (id: string) =>
  useQuery({
    queryKey: [QueryKey.FILMS, id],
    queryFn: () => fetchStarWarsFilm(id),
    staleTime: CACHED_RESPONSE_5M,
  });

export const useFilmsQuery = () => ({
  useFilms,
  useFilm,
});
