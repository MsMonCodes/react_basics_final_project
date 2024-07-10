import { Box, color, Input } from "@chakra-ui/react"
import { useState } from "react"

export const SearchBar = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)
    const breakpoints = { base: '62em', lg: '30em' };

    return (
        <Box
            w={{ base: '80%', lg: '64%' }}
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