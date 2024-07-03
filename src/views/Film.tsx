import {
  Card,
  CardHeader,
  CardBody,
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
import { usePeopleQuery } from "../hooks/usePeopleQuery";
import { usePlanetsQuery } from "../hooks/usePlanetsQuery";
import { useSpeciesQuery } from "../hooks/useSpeciesQuery";
import { useStarshipsQuery } from "../hooks/useStarshipsQuery";
import { useVehiclesQuery } from "../hooks/useVehiclesQuery";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKey } from "../utils/enum";
import { crawlResponseToExtractAllIdsFromUrls } from "../utils/url";
import { Film } from "../types/swapi";
import { PaginatedResponse } from "../types/response";
import { Link } from "@tanstack/react-router";

const FilmView: React.FC<{ episode: string }> = ({ episode }) => {
  // TODO: Remove the query client and fetch the data instead
  const client = useQueryClient();
  const cachedResult = client
    .getQueryCache()
    .find({ queryKey: [QueryKey.FILMS] });

  if (!cachedResult) {
    return <div>Not found</div>;
  }

  const cachedResponse = cachedResult.state.data as PaginatedResponse<Film>;
  const films = cachedResponse.results as Film[];

  const [film] = films.filter((film) => String(film.episode_id) === episode);
  const dataIds = crawlResponseToExtractAllIdsFromUrls(film);

  const { usePeopleByIds } = usePeopleQuery();
  const { usePlanetsByIds } = usePlanetsQuery();
  const { useSpeciesByIds } = useSpeciesQuery();
  const { useStarshipsByIds } = useStarshipsQuery();
  const { useVehiclesByIds } = useVehiclesQuery();

  // TODO: Move these bit to a reusable component to avoid hook rerender hell
  const peopleData = usePeopleByIds(dataIds.characters as string[]);
  const planetData = usePlanetsByIds(dataIds.planets as string[]);
  const speciesData = useSpeciesByIds(dataIds.species as string[]);
  const starshipsData = useStarshipsByIds(dataIds.starships as string[]);
  const vehiclesData = useVehiclesByIds(dataIds.vehicles as string[]);

  const isLoading = [
    peopleData,
    planetData,
    speciesData,
    starshipsData,
    vehiclesData,
  ].every((dataset) => dataset.some((data) => data.isLoading));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SimpleGrid columns={1} marginLeft={20} marginRight={20} marginTop={10}>
      <Card>
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Button>
                <Link to="/">Back</Link>
              </Button>
            </Box>
            <Box>
              <Heading size="sm">{film.title}</Heading>
              <Text fontSize="sm">Episode {film.episode_id}</Text>
            </Box>
            <Box>
              <Heading size="sm">Director</Heading>
              <Text fontSize="sm">{film.director}</Text>
            </Box>
            <Box>
              <Heading size="sm">Producer</Heading>
              <Text fontSize="sm">{film.producer}</Text>
            </Box>
            <Box>
              <Heading size="sm">Release</Heading>
              <Text fontSize="sm">{film.release_date}</Text>
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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                People
              </Heading>
              <SimpleGrid columns={4} spacing={4}>
                {peopleData.map(({ data: person }) => (
                  <Text pt="2" fontSize="sm">
                    {person?.name}
                  </Text>
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Planets
              </Heading>
              <Text pt="2" fontSize="sm">
                <SimpleGrid columns={4} spacing={4}>
                  {planetData.map(({ data: planet }) => (
                    <Text pt="2" fontSize="sm">
                      {planet?.name}
                    </Text>
                  ))}
                </SimpleGrid>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Species
              </Heading>

              <Text pt="2" fontSize="sm">
                <SimpleGrid columns={4} spacing={4}>
                  {speciesData.map(({ data: species }) => (
                    <Text pt="2" fontSize="sm">
                      {species?.name}
                    </Text>
                  ))}
                </SimpleGrid>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Starships
              </Heading>
              <Text pt="2" fontSize="sm">
                <SimpleGrid columns={4} spacing={4}>
                  {starshipsData.map(({ data: starship }) => (
                    <Text pt="2" fontSize="sm">
                      {starship?.name}
                    </Text>
                  ))}
                </SimpleGrid>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Vehicles
              </Heading>
              <Text pt="2" fontSize="sm">
                <SimpleGrid columns={4} spacing={4}>
                  {vehiclesData.map(({ data: vehicle }) => (
                    <Text pt="2" fontSize="sm">
                      {vehicle?.name}
                    </Text>
                  ))}
                </SimpleGrid>
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default FilmView;
