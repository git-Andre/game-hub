import useGenres from "../hooks/useGenres.ts";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

export const GenreList = () => {
  const { genres } = useGenres();
  return <><List>
    {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
    </ListItem>)}
  </List></>;
}
