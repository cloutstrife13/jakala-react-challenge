import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsPlanets = async () => {
  const result = await axios.get(SwapiEndpoint.PLANETS);
  return result.data;
};

export const fetchStarWarsPlanet = async (planetId: number) => {
  const result = await axios.get(`${SwapiEndpoint.PLANETS}/${planetId}`);
  return result.data;
};
