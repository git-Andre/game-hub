import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {PlatformIconList} from "./PlatformIconList.tsx";
import {CriticScore} from "../CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface GameCardProps {
    game: Game;
}

export const GameCard = ({game}: GameCardProps) => {
    return (
        <Card  width='273px' borderRadius={10} overflow='hidden'>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};
