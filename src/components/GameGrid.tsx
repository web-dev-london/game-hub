import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const gameSkeletons = isLoading
        && skeletons.map(skeleton =>
            <GameCardContainer
                key={skeleton}
            >
                <GameCardSkeleton />
            </GameCardContainer>
        )
    const gameCards = data?.results.map(game =>
        <GameCardContainer
            key={game.id}
        >
            <GameCard game={game} />
        </GameCardContainer>
    )

    if (error) return <Text>{error.message}</Text>
    return (
        <SimpleGrid
            columns={{
                sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5,
            }}
            spacing={5}
            p={'10px'}
        >

            {gameSkeletons}
            {gameCards}

        </SimpleGrid>
    )
}

export default GameGrid