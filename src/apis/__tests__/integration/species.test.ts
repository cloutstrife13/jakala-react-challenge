import { describe, expect, it } from "vitest";
import { fetchStarWarsSpecies } from "../../species";

describe("Species API", () => {
  it("fetches species data from SWAPI", async () => {
    const result = await fetchStarWarsSpecies();

    expect(result).toMatchSnapshot();
  });

  it("fetches a species entry from SWAPI", async () => {
    const result = await fetchStarWarsSpecies(3);

    expect(result).toMatchSnapshot();
  });
});
