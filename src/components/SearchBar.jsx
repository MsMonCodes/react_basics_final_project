import { Box, color, Input } from "@chakra-ui/react"
import { useState } from "react"

export const SearchBar = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)
    const breakpoints = { base: '62em', lg: '30em' };

    return (
        <Box
            // w={'inherit'}
            // w={{ base: '80%', lg: '62.5%' }}
            w={{ base: '80%', lg: '60%' }}
            pb={8}
            color={'blackAlpha.600'}
            fontSize={'md'}
        >
            <Input
                variant='flushed'
                placeholder={'Start typing to search recipes'}
                textAlign={'center'}
                value={value}
                onChange={handleChange}
                size={'sm'}
                focusBorderColor={'orange.200'}
            />
        </Box>
    );
}