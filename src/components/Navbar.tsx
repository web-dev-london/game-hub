import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack
                p={'10px'}
            >
                <Image
                    boxSize={'60px'}
                    src={logo}
                    alt={'Logo '}
                />
                <SearchInput
                    onSearch={onSearch}
                />
                <ColorModeSwitch />
            </HStack>
        </>
    )
}

export default Navbar