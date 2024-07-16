import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState();

    useEffect(() => {
        window.addEventListener('scrollUp', () => {
            if (window.scrollY > 50) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Box
            height={'100'}
            className={'hover-box'}
            w={{ base: 'full', lg: 'fit-content' }}
        >{BackToTopButton && (
            <Button
                borderRadius={{ base: 0, lg: 10 }}
                position={'fixed'}
                bottom={{ base: 0, lg: 10 }}
                justifys={'center'}
                alignSelf={'center'}
                left={{ base: 0, lg: '47%' }}
                // left={{ base: '35%', lg: '46.5%' }}
                fontSize={'md'}
                onClick={scrollUp}
                cursor={'pointer'}
                w={{ base: 'full', lg: 'fit-content' }}
                // w={{ base: "full", lg: 150 }}
                // width={{ base: '100vw', lg: 150 }}
                as='span'
                bgColor={'orange.200'}
                color='blackAlpha.700'
                sx={{
                    '.hover-box:hover &': {
                        color: 'blackAlpha.800',
                        bgColor: 'orange.400'
                    },
                }}
            > Scroll to top </Button>
        )}</ Box>
    )
}

