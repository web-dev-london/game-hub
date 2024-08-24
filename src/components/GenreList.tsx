import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres()
    if (isLoading) return <Spinner />
    if (error) return null;
    return (
        <>
            <Heading
                fontSize={'xl'}
                mb={3}
            >
                Genres
            </Heading>
            <List>
                {data?.results.map((genre: Genre) =>
                    <ListItem
                        key={genre.id}
                        paddingY={'5px'}
                    >
                        <HStack>
                            <Image
                                objectFit={'cover'}
                                boxSize={'32px'}
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace={'normal'}
                                textAlign={'left'}
                                onClick={() => onSelectGenre(genre)}
                                fontWeight={genre.id === selectedGenre?.id ? 'Bold' : 'normal'}
                                variant={'link'}
                                fontSize={'large'}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>)
                }
            </List >
        </>
    )
}

export default GenreList