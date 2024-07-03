import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { PropsWithChildren } from "react";
import { QueryKey } from "../../../utils/enum";
import { useVehiclesQuery } from "../../useVehiclesQuery";

describe("useVehiclesQuery", () => {
  let queryClient: QueryClient;
  let wrapper: React.FC<PropsWithChildren>;

  beforeAll(() => {
    queryClient = new QueryClient();

    wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });

  it("renders the hook", async () => {
    const { useVehiclesByIds } = useVehiclesQuery();
    const { result } = renderHook(() => useVehiclesByIds(["4"]), { wrapper });

    await waitFor(() => {
      const areAllEntriesFetched = result.current.every(
        ({ isSuccess }) => isSuccess
      );

      expect(areAllEntriesFetched).toBeTruthy();
    });
  });

  it("has cached the result", () => {
    const result = queryClient.getQueryCache().find({
      queryKey: [QueryKey.VEHICLES, "4"],
    });

    expect(result).toBeDefined();
  });
});
