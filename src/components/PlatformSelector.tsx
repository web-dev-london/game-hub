import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms()

    if (error) return null;

    const menuItems = data?.results.map((platform) => {
        return (
            <MenuItem
                onClick={() => onSelectPlatform(platform)}
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
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {menuItems}
            </MenuList>

        </Menu>
    )
}

export default PlatformSelector