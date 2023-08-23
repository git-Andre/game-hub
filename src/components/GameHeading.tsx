import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface GameHeadingProps {
  gameQuery: GameQuery
}

export const GameHeading = ( { gameQuery }: GameHeadingProps ) => {
  return (
    <Heading as='h1'
             fontSize={'7xl'}
             marginBottom={5}
    >
      {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
    </Heading>
  );
};
