import useGames from "../hooks/useGames.ts";
import {GameCard} from "./GameCard.tsx";
import {SimpleGrid} from "@chakra-ui/react";

export const GameGrid = () => {
  const {games, error}=  useGames();
    return <>
        <SimpleGrid columns={{sm:1, md: 2, lg:3, xl:5}} padding='10px' spacing={10}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
        {error && <p>{error}</p>}
    </>;
};
