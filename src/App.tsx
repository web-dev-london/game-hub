import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenreList from "./components/GenreList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import { Platform } from "./hooks/usePlatforms"
import { Genre } from "./hooks/useGenres"

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState({} as GameQuery);


    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr'
                }}
            >
                <GridItem
                    area={'nav'}
                >
                    <Navbar
                        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
                    />
                </GridItem>
                <Show
                    above={'lg'}
                >
                    <GridItem
                        area={'aside'}
                        paddingX={5}
                    >
                        <GenreList
                            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                            selectedGenre={gameQuery.genre}
                        />
                    </GridItem>
                </Show>
                <GridItem
                    area={'main'}
                >
                    <Box
                        pl={2}
                    >
                        <GameHeading
                            gameQuery={gameQuery}
                        />
                        <HStack
                            spacing={3}
                            mb={4}
                        >
                            <PlatformSelector
                                selectedPlatform={gameQuery.platform}
                                onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                            />
                            <SortSelector
                                sortOrder={gameQuery.sortOrder}
                                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                            />
                        </HStack>
                    </Box>
                    <GameGrid
                        gameQuery={gameQuery}
                    />
                </GridItem>
            </Grid>
        </>
    )
}

export default App
