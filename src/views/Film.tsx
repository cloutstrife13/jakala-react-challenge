import {
  Card,
  CardHeader,
  CardBody,
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
import { crawlResponseToExtractAllIdsFromUrls } from "../utils/url";
import { ErrorComponent, Link } from "@tanstack/react-router";
import { CardSectionAsync } from "../components/CardSectionAsync";
import { CardSection } from "../components/CardSection";
import { useFilmsQuery } from "../hooks/useFilmsQuery";

const FilmView: React.FC<{ episode: string }> = ({ episode }) => {
  const { useFilm } = useFilmsQuery();

  const { isPending, error, data: film } = useFilm(episode);

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const dataIds = crawlResponseToExtractAllIdsFromUrls(film);

  const { usePeopleByIds } = usePeopleQuery();
  const { usePlanetsByIds } = usePlanetsQuery();
  const { useSpeciesByIds } = useSpeciesQuery();
  const { useStarshipsByIds } = useStarshipsQuery();
  const { useVehiclesByIds } = useVehiclesQuery();

  const peopleData = () => usePeopleByIds(dataIds.characters as string[]);
  const planetData = () => usePlanetsByIds(dataIds.planets as string[]);
  const speciesData = () => useSpeciesByIds(dataIds.species as string[]);
  const starshipsData = () => useStarshipsByIds(dataIds.starships as string[]);
  const vehiclesData = () => useVehiclesByIds(dataIds.vehicles as string[]);

  return (
    <SimpleGrid
      columns={1}
      marginLeft={20}
      marginRight={20}
      marginTop={10}
      marginBottom={10}
    >
      <Card>
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Button>
                <Link to="/">Back</Link>
              </Button>
            </Box>
            <CardSection
              title={film.title}
              contents={[`Episode ${film.episode_id}`]}
            />
            <CardSection title="Director" contents={[film.director]} />
            <CardSection title="Producer" contents={[film.producer]} />
            <CardSection title="Release" contents={[film.release_date]} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <CardSection title="Summary" contents={[film.opening_crawl]} />
            <CardSectionAsync title="People" fetchDataset={peopleData} />
            <CardSectionAsync title="Planets" fetchDataset={planetData} />
            <CardSectionAsync title="Species" fetchDataset={speciesData} />
            <CardSectionAsync title="Starships" fetchDataset={starshipsData} />
            <CardSectionAsync title="Vehicles" fetchDataset={vehiclesData} />
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default FilmView;
