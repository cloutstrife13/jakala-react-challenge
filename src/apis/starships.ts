import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Starship } from "../types/swapi";

export const fetchStarWarsStarships = async (): Promise<
  PaginatedResponse<Starship>
> => {
  const result = await axios.get(SwapiEndpoint.STARSHIPS);
  return result.data;
};

export const fetchStarWarsStarship = async (
  starshipId: string
): Promise<Starship> => {
  const result = await axios.get(`${SwapiEndpoint.STARSHIPS}/${starshipId}`);
  return result.data;
};
