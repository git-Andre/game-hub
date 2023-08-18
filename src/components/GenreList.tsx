import useGenres, { Genre } from "../hooks/useGenres.ts";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import { GameCardSkeleton } from "../GameCardSkeleton.tsx";

interface GenreListProps {onSelectGenre: ( genre: Genre ) => void}

export const GenreList = ( { onSelectGenre }: GenreListProps ) => {

  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  if (isLoading) return skeletons.map(skeleton => <GameCardSkeleton height='50px' key={skeleton}/>)

  return <><List>
    {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
      </HStack>
    </ListItem>)}
  </List></>;
}
