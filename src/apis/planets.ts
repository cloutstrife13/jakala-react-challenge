import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Planet } from "../types/swapi";

export const fetchStarWarsPlanets = async (): Promise<
  PaginatedResponse<Planet>
> => {
  const result = await axios.get(SwapiEndpoint.PLANETS);
  return result.data;
};

export const fetchStarWarsPlanet = async (
  planetId: number
): Promise<Planet> => {
  const result = await axios.get(`${SwapiEndpoint.PLANETS}/${planetId}`);
  return result.data;
};
