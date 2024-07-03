import { Spinner } from "@chakra-ui/react";
import { UseQueryResult } from "@tanstack/react-query";
import { CardSection } from "./CardSection";

export const CardSectionAsync: React.FC<{
  title: string;
  fetchDataset: () => UseQueryResult<{ name: string }, Error>[];
}> = ({ title, fetchDataset }) => {
  const dataset = fetchDataset();
  const isLoading = dataset.some((data) => data.isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  const contents = dataset.map(({ data }) => data?.name ?? "");

  return <CardSection title={title} contents={contents} columns={4} />;
};
