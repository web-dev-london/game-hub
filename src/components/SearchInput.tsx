import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input
                placeholder='Search games...'
                variant={'filled'}
                borderRadius={'10px'}
            />
        </InputGroup>
    )
}

export default SearchInput