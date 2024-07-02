import { describe, expect, it } from "vitest";
import { fetchStarWarsVehicle, fetchStarWarsVehicles } from "../../vehicles";

describe("Vehicles API", () => {
  it("fetches vehicles data from SWAPI", async () => {
    const result = await fetchStarWarsVehicles();

    expect(result).toMatchSnapshot();
  });

  it("fetches a vehicle entry from SWAPI", async () => {
    const result = await fetchStarWarsVehicle(4);

    expect(result).toMatchSnapshot();
  });
});
