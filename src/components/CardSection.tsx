import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export const CardSection: React.FC<{
  title: string;
  contents: string[];
  columns?: number;
}> = ({ title, contents, columns = 1 }) => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {title}
      </Heading>
      <SimpleGrid columns={columns} spacing={4}>
        {contents.map((content) => (
          <Text pt="2" fontSize="sm">
            {content}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};
