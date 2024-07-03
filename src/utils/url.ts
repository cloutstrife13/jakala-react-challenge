import { isStringUrl } from "./regex";

const getIdFromUrl = (url: string) => {
  const [id] = String(url)
    .split("/")
    .filter((str) => str)
    .reverse();

  return id;
};

export const crawlResponseToExtractAllIdsFromUrls = <
  SwapiResponse extends object
>(
  response: SwapiResponse
): Record<keyof SwapiResponse, SwapiResponse[keyof SwapiResponse]> =>
  Object.entries(response)
    .map(([key, value]) => {
      if (typeof value === "string" && isStringUrl(value)) {
        const id = getIdFromUrl(value);

        return { [key]: id };
      }

      if (Array.isArray(value) && value.every(isStringUrl)) {
        const ids = value.map(getIdFromUrl);

        return { [key]: ids };
      }

      return {};
    })
    .reduce(
      (prev, next) => ({ ...prev, ...next }),
      {} as Record<keyof SwapiResponse, SwapiResponse[keyof SwapiResponse]>
    );
