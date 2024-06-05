import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import useGames from '../hooks/useGames';


const GameGrid = () => {
    const { games, error } = useGames()

    const gameItems = games.map(game => <ListItem key={game.id}>{game.name}</ListItem>)

    return (
        <>
            {error && <Text>{error}</Text>}
            <UnorderedList>
                {gameItems}
            </UnorderedList>
        </>
    )
}

export default GameGrid