import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Species } from "../types/swapi";

export const fetchStarWarsSpecies = async <
  SpeciesId extends number | undefined = undefined
>(
  speciesId?: SpeciesId
): Promise<SpeciesId extends number ? Species : PaginatedResponse<Species>> => {
  if (speciesId) {
    const result = await axios.get(`${SwapiEndpoint.SPECIES}/${speciesId}`);
    return result.data;
  }

  const result = await axios.get(`${SwapiEndpoint.SPECIES}`);
  return result.data;
};
