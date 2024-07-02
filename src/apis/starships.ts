import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsStarships = async () => {
  const result = await axios.get(SwapiEndpoint.STARSHIPS);
  return result.data;
};

export const fetchStarWarsStarship = async (starshipId: number) => {
  const result = await axios.get(`${SwapiEndpoint.STARSHIPS}/${starshipId}`);
  return result.data;
};
