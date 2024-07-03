# jakala-react-challenge

This is a coding challenge for JAKALA

## Libraries

- Vite
- TanStack Router
- TanStack Query
- Chakra UI

## Prerequisites

```bash
brew install node
brew install pnpm
```

## Initialising the repo

```bash
pnpm i
```

## Starting the application

```bash
pnpm dev
```

## Testing the app

```bash
pnpm test
```

## Approach

Since the main task revolves around building a Star Wars themed React application, the SWAPI API was already available early on. This has allowed me to test and create client requests for all possible data objects from the server. I have employed Test-Driven Development in order to test the endpoints as a means of creating snapshots, allowing me to effectively create type definitions to allow IntelliSense to infer the properties of SWAPI data objects.

Given the fact that the data objects were relational in that they are using URLs to refer to other objects, I have extracted their IDs from them to take advantage of TanStack Router's caching capability. This will ensure that we do not fetch the same data every time we revisit sections of that page since the data served is static and we are dealing with multiple requests in parallel. A backend-for-frontend would have made sense to condense the amount of multiple requests into a single one only to allow data transformations being carried out on the server but that was not demanded by the task. An alternative approach would be the use of Next.js to handle the data transformation on the API layer with Next Functions or using server-side components since the data is static and this kind of implementation does not rely on page interactivity.

Using TanStack Router, I was able to embed page navigation between each section of the page. React Router would have also been viable but TanStack Router had better documentation.

Towards the end, I have puzzled all pieces together, using Chakra UI to create the layout of the page. Being a huge fan of the Card component, I have visualised all high level information of each film in a 2x3 Grid, allowing users to transition to a film of their choice. In the more detailed view of the film, more info is being shown with regards to
producer, director, characters, planets, etc. The only thing that I'm criticising is relying on TanStack Query's cache to obtain the film information initially fetched from the main view due to time constraints solely for the sake of getting a basic version working. Despite the compromise, users would not be able to see a film in event of accessing one via e.g. `/film/6`. Furthermore, using two hooks sequentially would have led to a hook hell as I was initially attempting to await all data.

However, I have created a [Pull Request](https://github.com/cloutstrife13/jakala-react-challenge/pull/1) which would effectively resolve the aforementioned problem, handling the data fetching on a nested component level.

Regarding future work, I would add more styling to this application, since it was delivered in a rapid manner with Chakra UI as if it was an MVP. Moreover, additional views should be embedded for the remaining data objects in `/people`, `/planets`, `/species`, `/starships`, and `/vehicles`.
