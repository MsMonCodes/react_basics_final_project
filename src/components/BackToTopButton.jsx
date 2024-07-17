import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState();

    useEffect(() => {
        const scrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        }
        window.addEventListener('scroll', scrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', scrollButtonVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Box
            height={'100'}
            className={'hover-box'}
            position={'center'}
            w={{ base: 'full', lg: 'fit-content' }}>
            {showButton && (
                <Button
                    borderRadius={{ base: 0, lg: 10 }}
                    position={'fixed'}
                    bottom={{ base: 0, lg: 10 }}
                    left={{ base: 0, lg: '46.5%' }} fontSize={'md'}
                    onClick={scrollToTop}
                    cursor={'pointer'}
                    w={{ base: 'full', lg: 'fit-content' }}
                    as='span'
                    bgColor={'orange.200'}
                    color='blackAlpha.700'
                    sx={{
                        '.hover-box:hover &': {
                            color: 'blackAlpha.800',
                            bgColor: 'orange.400'
                        },
                    }}> Scroll to top </Button>
            )}</ Box>
    )
}

