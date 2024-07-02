import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Person } from "../types/swapi";

export const fetchStarWarsPeople = async (): Promise<
  PaginatedResponse<Person>
> => {
  const result = await axios.get(SwapiEndpoint.PEOPLE);
  return result.data;
};

export const fetchStarWarsPerson = async (
  personId: number
): Promise<Person> => {
  const result = await axios.get(`${SwapiEndpoint.PEOPLE}/${personId}`);
  return result.data;
};
