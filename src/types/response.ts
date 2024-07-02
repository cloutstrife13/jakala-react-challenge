export type PaginatedResponse<SwapiType> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiType[];
};
