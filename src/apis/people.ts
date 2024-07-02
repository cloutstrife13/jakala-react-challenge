import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsPeople = async () => {
  const result = await axios.get(SwapiEndpoint.PEOPLE);
  return result.data;
};

export const fetchStarWarsPerson = async (personId: number) => {
  const result = await axios.get(`${SwapiEndpoint.PEOPLE}/${personId}`);
  return result.data;
};
