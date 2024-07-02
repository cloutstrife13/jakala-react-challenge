import axios from "axios";
import { SwapiEndpoint } from "../utils/enum";
import { PaginatedResponse } from "../types/response";
import { Vehicle } from "../types/swapi";

export const fetchStarWarsVehicles = async (): Promise<
  PaginatedResponse<Vehicle>
> => {
  const result = await axios.get(SwapiEndpoint.VEHICLES);
  return result.data;
};

export const fetchStarWarsVehicle = async (
  vehicleId: number
): Promise<Vehicle> => {
  const result = await axios.get(`${SwapiEndpoint.VEHICLES}/${vehicleId}`);
  return result.data;
};
