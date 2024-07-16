import { Box, color, Input } from "@chakra-ui/react"

export const SearchBar = ({ changeFn, ...props }) => {
    const breakpoints = { base: '62em', lg: '30em' };

    return (
        <Box
            // w={'inherit'}
            // w={{ base: '80%', lg: '62.5%' }}
            // w={{ base: '80%', lg: '60%' }}
            w={{ base: '2xs', lg: '4xl' }}
            // m={10}
            pb={6}
            color={'blackAlpha.600'}
            fontSize={'md'}
        >
            <Input onChange={changeFn}
                type={'text'}
                placeholder={'Start typing to search recipes'}
                size={'sm'}
                textAlign={'center'}
                variant='flushed'
                // value={value}
                focusBorderColor={'orange.200'}
                {...props}></Input>
        </Box>
    );
}