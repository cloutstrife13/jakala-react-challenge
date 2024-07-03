import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  SimpleGrid,
  Spinner,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useFilmsQuery } from "../hooks/useFilmsQuery";
import { Link } from "@tanstack/react-router";

const Films: React.FC = () => {
  const { useFilms } = useFilmsQuery();

  const { isPending, error, data } = useFilms();

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <SimpleGrid
      columns={3}
      marginLeft={20}
      marginRight={20}
      marginTop={10}
      spacing={4}
    >
      {data.results.map((film, index) => (
        <Card key={index}>
          <CardHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">
                  {film.title} ({film.release_date.split("-")[0]})
                </Heading>
                <Text fontSize="sm">Episode {film.episode_id}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing={4}>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  {film.opening_crawl}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button>
              <Link
                to="/film/$episode"
                params={{
                  episode: String(film.episode_id),
                }}
              >
                Explore
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Films;
