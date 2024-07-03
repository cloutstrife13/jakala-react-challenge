import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { PropsWithChildren } from "react";
import { QueryKey } from "../../../utils/enum";
import { useSpeciesQuery } from "../../useSpeciesQuery";

describe("useSpeciesQuery", () => {
  let queryClient: QueryClient;
  let wrapper: React.FC<PropsWithChildren>;

  beforeAll(() => {
    queryClient = new QueryClient();

    wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });

  it("renders the hook", async () => {
    const { useSpeciesByIds } = useSpeciesQuery();
    const { result } = renderHook(() => useSpeciesByIds(["3"]), { wrapper });

    await waitFor(() => {
      const areAllEntriesFetched = result.current.every(
        ({ isSuccess }) => isSuccess
      );

      expect(areAllEntriesFetched).toBeTruthy();
    });
  });

  it("has cached the result", () => {
    const result = queryClient.getQueryCache().find({
      queryKey: [QueryKey.SPECIES, "3"],
    });

    expect(result).toBeDefined();
  });
});
