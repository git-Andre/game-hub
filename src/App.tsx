import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar.tsx";
import { GameGrid } from "./components/GameGrid.tsx";
import { GenreList } from "./components/GenreList.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import { Genre } from "./hooks/useGenres.ts";
import { Platform } from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App () {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return <Grid
    templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`, }}
    templateColumns={{ base: '1fr', lg: '16% 1fr' }}>

    <GridItem area='nav'><NavBar/></GridItem>
    <Show above={'lg'}>
      <GridItem area={'aside'} paddingX={5}>
        <GenreList onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre}/>
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <HStack  spacing={5} paddingLeft={2} marginBottom={4}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })}/>
        <SortSelector/>
      </HStack>
      <GameGrid
        gameQuery={gameQuery}/>
    </GridItem>

  </Grid>
}

export default App
