import useGames from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCardSkeleton } from "../GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { Genre } from "../hooks/useGenres.ts";

interface GameGridProps {selectedGenre: Genre | null}

export const GameGrid = ( { selectedGenre }: GameGridProps ) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (<>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
        <GameCardSkeleton height={'200px'}/>
      </GameCardContainer>)}
      {games.map(game => <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>)}
    </SimpleGrid>
    {error && <p>{error}</p>}
  </>);
};
