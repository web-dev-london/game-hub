import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6];

    const gameSkeletons = isLoading
        && skeletons.map(skeleton =>
            <GameCardContainer
                key={skeleton}
            >
                <GameCardSkeleton />
            </GameCardContainer>
        )
    const gameCards = games.map(game =>
        <GameCardContainer
            key={game.id}
        >
            <GameCard game={game} />
        </GameCardContainer>
    )
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{
                    sm: 1, md: 2, lg: 3, xl: 5
                }}
                spacing={5}
                p={'10px'}
            >

                {gameSkeletons}
                {gameCards}

            </SimpleGrid>
        </>
    )
}

export default GameGrid