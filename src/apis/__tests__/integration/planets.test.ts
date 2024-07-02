import { describe, expect, it } from "vitest";
import { fetchStarWarsPlanet, fetchStarWarsPlanets } from "../../planets";

describe("Planets API", () => {
  it("fetches planets data from SWAPI", async () => {
    const result = await fetchStarWarsPlanets();

    expect(result).toMatchSnapshot();
  });

  it("fetches a planet entry from SWAPI", async () => {
    const result = await fetchStarWarsPlanet(1);

    expect(result).toMatchSnapshot();
  });
});
