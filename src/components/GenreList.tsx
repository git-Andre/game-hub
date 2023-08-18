import useGenres from "../hooks/useGenres.ts";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import { GameCardSkeleton } from "../GameCardSkeleton.tsx";

export const GenreList = () => {
  const { genres,isLoading,error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  if (isLoading) return skeletons.map(skeleton =>
    <GameCardSkeleton height='50px' key={skeleton}/>)

  return <><List>
    {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
    </ListItem>)}
  </List></>;
}