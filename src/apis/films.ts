import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsFilms = async () => {
  const result = await axios.get(SwapiEndpoint.FILMS);
  return result.data;
};

export const fetchStarWarsFilm = async (filmId: number) => {
  const result = await axios.get(`${SwapiEndpoint.FILMS}/${filmId}`);
  return result.data;
};
