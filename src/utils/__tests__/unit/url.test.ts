import { beforeAll, describe, expect, it } from "vitest";
import { Species } from "../../../types/swapi";
import { crawlResponseToExtractAllIdsFromUrls } from "../../url";

describe("crawlResponseToExtractAllIdsFromUrls", () => {
  let idMap: Record<string, string | string[]>;

  const input: Species = {
    average_height: "210",
    average_lifespan: "400",
    classification: "mammal",
    created: new Date("2014-12-10T16:44:31.486000Z"),
    designation: "sentient",
    edited: new Date("2014-12-20T21:36:42.142000Z"),
    eye_colors: "blue, green, yellow, brown, golden, red",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    hair_colors: "black, brown",
    homeworld: "https://swapi.dev/api/planets/14/",
    language: "Shyriiwook",
    name: "Wookie",
    people: [
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/80/",
    ],
    skin_colors: "gray",
    url: "https://swapi.dev/api/species/3/",
  };

  beforeAll(() => {
    idMap = crawlResponseToExtractAllIdsFromUrls(input);
  });

  it("finds all IDs from non-array URLs", () => {
    expect(idMap).toEqual(
      expect.objectContaining({
        homeworld: "14",
        url: "3",
      })
    );
  });

  it("finds all IDs from array URLs", () => {
    expect(idMap).toEqual(
      expect.objectContaining({
        films: ["1", "2", "3", "6"],
        people: ["13", "80"],
      })
    );
  });
});
