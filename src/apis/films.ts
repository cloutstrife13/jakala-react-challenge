import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Film } from "../types/swapi";

export const fetchStarWarsFilms = async (): Promise<
  PaginatedResponse<Film>
> => {
  const result = await axios.get(SwapiEndpoint.FILMS);
  return result.data;
};

export const fetchStarWarsFilm = async (filmId: number): Promise<Film> => {
  const result = await axios.get(`${SwapiEndpoint.FILMS}/${filmId}`);
  return result.data;
};
