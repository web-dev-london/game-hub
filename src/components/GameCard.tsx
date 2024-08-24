import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const platform = game.parent_platforms.map(p => p.platform)
    return (
        <>
            <Card

            >
                <Image
                    src={getCroppedImageUrl(game.background_image)}
                />
                <CardBody>
                    <HStack
                        mb={3}
                        justifyContent={'space-between '}
                    >
                        <PlatformIconList platforms={platform} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading
                        fontSize={'2xl'}
                    >
                        {game.name}
                        <Emoji
                            rating={game.rating_top}
                        />
                    </Heading>
                </CardBody>
            </Card>
        </>
    )
}

export default GameCard