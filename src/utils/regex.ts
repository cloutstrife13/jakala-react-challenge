import urlRegex from "url-regex";

export const isStringUrl = (input: string) => urlRegex().test(input);
