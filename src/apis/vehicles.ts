import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";

export const fetchStarWarsVehicles = async () => {
  const result = await axios.get(SwapiEndpoint.VEHICLES);
  return result.data;
};

export const fetchStarWarsVehicle = async (vehicleId: number) => {
  const result = await axios.get(`${SwapiEndpoint.VEHICLES}/${vehicleId}`);
  return result.data;
};
