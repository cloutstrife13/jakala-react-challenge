import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  SimpleGrid,
  Spinner,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useFilmsQuery } from "../hooks/useFilmsQuery";
import { ErrorComponent, Link } from "@tanstack/react-router";
import { CardSection } from "../components/CardSection";

const Films: React.FC = () => {
  const { useFilms } = useFilmsQuery();

  const { isPending, error, data } = useFilms();

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <SimpleGrid
      columns={3}
      marginLeft={20}
      marginRight={20}
      marginTop={10}
      marginBottom={10}
      spacing={4}
    >
      {data.results.map((film, index) => (
        <Card key={index}>
          <CardHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <CardSection
                title={`${film.title} (${film.release_date.split("-")[0]})`}
                contents={[`Episode ${film.episode_id}`]}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing={4}>
              <CardSection title="Summary" contents={[film.opening_crawl]} />
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
