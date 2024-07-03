import { describe, expect, it } from "vitest";
import { fetchStarWarsPeople, fetchStarWarsPerson } from "../../people";

describe("People API", () => {
  it("fetches people data from SWAPI", async () => {
    const result = await fetchStarWarsPeople();

    expect(result).toMatchSnapshot();
  });

  it("fetches a person entry from SWAPI", async () => {
    const result = await fetchStarWarsPerson("1");

    expect(result).toMatchSnapshot();
  });
});
