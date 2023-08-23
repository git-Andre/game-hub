import { Game } from "../hooks/useGames.ts";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList.tsx";
import { CriticScore } from "../CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import { GameCardContainer } from "./GameCardContainer.tsx";

interface GameCardProps {
  game: Game;
}

export const GameCard = ( { game }: GameCardProps ) => {
  return (<GameCardContainer>
    <Card>
      <Image
        objectFit='cover'
        src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize='2xl' marginTop={3}>{game.name}</Heading>
      </CardBody>
    </Card>
  </GameCardContainer>);
};
