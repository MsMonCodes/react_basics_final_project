import { Box, color, Input } from "@chakra-ui/react"

export const SearchBar = ({ changeFn, ...props }) => {
    const breakpoints = { base: '62em', lg: '30em' };

    return (
        <Box
            w={{ base: '2xs', lg: '4xl' }}
            pb={6}
            color={'blackAlpha.600'}
            fontSize={'md'}>
            <Input onChange={changeFn}
                type={'text'}
                placeholder={'Start typing to search recipes'}
                size={'sm'}
                textAlign={'center'}
                variant={'flushed'}
                focusBorderColor={'orange.200'}
                {...props}></Input></Box>
    );
}