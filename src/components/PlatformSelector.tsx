import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
    const { data, error } = usePlatforms()

    if (error) return null;

    const menuItems = data.map((platform) => {
        return (
            <MenuItem
                key={platform.id}
            >
                {platform.name}
            </MenuItem>
        )
    })

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
            >
                Platforms
            </MenuButton>
            <MenuList>
                {menuItems}
            </MenuList>

        </Menu>
    )
}

export default PlatformSelector