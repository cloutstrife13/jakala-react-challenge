import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsSpecies = async (speciesId?: number) => {
  if (speciesId) {
    const result = await axios.get(`${SwapiEndpoint.SPECIES}/${speciesId}`);
    return result.data;
  }

  const result = await axios.get(`${SwapiEndpoint.SPECIES}`);
  return result.data;
};
