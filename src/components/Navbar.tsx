import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
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
                <SearchInput />
                <ColorModeSwitch />
            </HStack>
        </>
    )
}

export default Navbar