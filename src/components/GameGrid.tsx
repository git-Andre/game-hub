import useGames from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCardSkeleton } from "../GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (<>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
        <GameCardSkeleton key={skeleton}/>
      </GameCardContainer>)}
      {games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    {error && <p>{error}</p>}
  </>);
};
