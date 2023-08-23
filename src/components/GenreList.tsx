import useGenres, { Genre } from "../hooks/useGenres.ts";
import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
// import { GameCardSkeleton } from "../GameCardSkeleton.tsx";

interface GenreListProps {
  onSelectGenre: ( genre: Genre ) => void
  selectedGenre: Genre | null;
}

export const GenreList = ( { selectedGenre, onSelectGenre }: GenreListProps ) => {

  const { genres } = useGenres();
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // if (error) return null;
  //
  // if (isLoading) return skeletons.map(skeleton => <GameCardSkeleton height='50px' key={skeleton}/>)

  return <>
    <Heading marginY={3}>Genres</Heading>
    <List>
    {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image boxSize='32px'
               objectFit='cover'
               borderRadius={8}
               src={getCroppedImageUrl(genre.image_background)}/>
        <Button onClick={() => onSelectGenre(genre)}
                variant='link'
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                fontSize='lg'>{genre.name}</Button>
      </HStack>
    </ListItem>)}
  </List></>;
}
