import { describe, expect, it } from "vitest";
import { isStringUrl } from "../../regex";

describe("isStringUrl", () => {
  it("is a URL", () => {
    const input = "http://www.bbc.co.uk/";

    const result = isStringUrl(input);

    expect(result).toBeTruthy();
  });
});
