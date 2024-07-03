import { useQueries } from "@tanstack/react-query";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";
import { fetchStarWarsVehicle } from "../apis/vehicles";

const useVehiclesByIds = (ids: string[]) =>
  useQueries({
    queries: ids.map((id) => ({
      queryKey: [QueryKey.VEHICLES, id],
      queryFn: () => fetchStarWarsVehicle(id),
      staleTime: CACHED_RESPONSE_5M,
    })),
  });

export const useVehiclesQuery = () => ({
  useVehiclesByIds,
});
