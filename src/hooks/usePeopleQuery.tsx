import { useQueries } from "@tanstack/react-query";
import { CACHED_RESPONSE_5M } from "../utils/constant";
import { QueryKey } from "../utils/enum";
import { fetchStarWarsPerson } from "../apis/people";

const usePeopleByIds = (ids: string[]) =>
  useQueries({
    queries: ids.map((id) => ({
      queryKey: [QueryKey.PEOPLE, id],
      queryFn: () => fetchStarWarsPerson(id),
      staleTime: CACHED_RESPONSE_5M,
    })),
  });

export const usePeopleQuery = () => ({
  usePeopleByIds,
});
