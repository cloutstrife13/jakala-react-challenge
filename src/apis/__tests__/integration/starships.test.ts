import { describe, expect, it } from "vitest";
import { fetchStarWarsStarship, fetchStarWarsStarships } from "../../starships";

describe("Starships API", () => {
  it("fetches starships data from SWAPI", async () => {
    const result = await fetchStarWarsStarships();

    expect(result).toMatchSnapshot();
  });

  it("fetches a starship entry from SWAPI", async () => {
    const result = await fetchStarWarsStarship(2);

    expect(result).toMatchSnapshot();
  });
});
