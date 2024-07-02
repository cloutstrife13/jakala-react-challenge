import { describe, expect, it } from "vitest";
import { fetchStarWarsFilm, fetchStarWarsFilms } from "../../films";

describe("Films API", () => {
  it("fetches films data from SWAPI", async () => {
    const result = await fetchStarWarsFilms();

    expect(result).toMatchSnapshot();
  });

  it("fetches a film entry from SWAPI", async () => {
    const result = await fetchStarWarsFilm(1);

    expect(result).toMatchSnapshot();
  });
});
