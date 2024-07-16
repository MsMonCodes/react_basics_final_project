import { Stack, Grid, GridItem, Image, Heading, Container, Text, Center, Box, UnorderedList, List, Flex, SimpleGrid, background, filter, TableContainer, Table, Divider, Button, useDisclosure } from "@chakra-ui/react"
import { data } from "../utils/data";
import { filterProps } from "framer-motion";

const recipeSelection = (data.hits[7].recipe);

export const FullRecipePage = ({ recipeSelection, clickFn }) => {
    const breakpoints = { base: '62em', lg: '30em' };
    const cookingTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}m`;
    }
    const backdrop = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // boxSize: '250px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background: `url(${recipeSelection.image}) center/cover no-repeat`
    }

    return (
        <Container>
            <SimpleGrid justifyContent={'center'} alignContent={'center'} w={'100%'} color={'blackAlpha.800'}>
                <Box h={{ base: 'sm', lg: 'sm' }} bgSize={'cover'} sx={backdrop}>
                    <Heading w={{ base: 'container.xs', lg: 'container.lg' }} position={'absolute'} px={'5%'}
                        flexWrap={'wrap'} justifyItems={'center'} size={{ base: '3xl', lg: '4xl' }} color={'whiteAlpha.900'}
                    >{recipeSelection.label}</Heading></Box >
                <Grid boxShadow={{ base: 'md', lg: 'md' }}
                    w={{ base: 'sm', lg: 'container.lg' }} alignContent={'center'}
                    justifyContent={'space-evenly'}
                    align={'center'}
                    display={{ base: 'flex', lg: 'inline-flex' }}
                    flexWrap={'wrap'}
                    pt={2} pb={4}
                    rowGap={4}
                >
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}
                        >Dish Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelection.dishType}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}
                        >Meal Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelection.mealType}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}
                        >Cooking Time:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{cookingTime(recipeSelection.totalTime)}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}
                        >Servings:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelection.yield} portions</Heading></GridItem>
                </Grid>
                <SimpleGrid columns={3} w={'container.lg'} gap={20} mt={6}
                // border={'1px'} borderColor={'green.400'}
                // pt={10}
                >
                    <GridItem w={'2xl'} >
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Ingredients: </Heading>
                            <Text size={'md'}>
                                <Box>
                                    {recipeSelection.ingredientLines.map((ingredient) =>
                                        <p>{ingredient}</p>
                                    )}
                                </Box></Text></Box>
                        <Divider orientation='horizontal' w={'100%'}
                            borderColor={'white'}
                        // borderColor={'orange.200'}
                        />
                        <Box py={4} w={'ld'}>
                            <Heading size={'md'} pb={2}
                            >Nutrition:</Heading>
                            <SimpleGrid columns={2} spacingX={10} spacingY={10}>
                                <Box>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.ENERC_KCAL.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.PROCNT.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.FAT.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.CHOCDF.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.CHOLE.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelection.totalNutrients.NA.label}</Text>
                                </Box>
                                <Box>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} {recipeSelection.totalNutrients.ENERC_KCAL.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.PROCNT.quantity.toFixed(0)} {recipeSelection.totalNutrients.PROCNT.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.FAT.quantity.toFixed(0)} {recipeSelection.totalNutrients.FAT.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipeSelection.totalNutrients.CHOCDF.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.CHOLE.quantity.toFixed(0)} {recipeSelection.totalNutrients.CHOLE.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.totalNutrients.NA.quantity.toFixed(0)} {recipeSelection.totalNutrients.NA.unit}</Text>
                                </Box>
                            </SimpleGrid></Box>
                        <Box pt={4}
                        // boxSize={'2xl'}
                        >
                            <Image
                                // w={'4xl'}
                                py={4}
                                w={'100%'}
                                src={recipeSelection.image}
                                alt={`Image of ${recipeSelection.label}.`}
                                objectFit='fill' /></Box></GridItem>
                    <GridItem></GridItem>
                    <GridItem w={'3xs'} pl={7}
                    // bgColor={'red.200'}
                    >
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Diet Labels:</Heading>
                            <Text
                            >{(recipeSelection.dietLabels.length > 0)
                                ? <Box>{recipeSelection.dietLabels.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Divider orientation='horizontal' w={'20vw'}
                            borderColor={'white'}
                        // borderColor={'orange.200'} 
                        />
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Allergens:</Heading>
                            <Text size={'md'}>
                                {(recipeSelection.cautions.length > 0)
                                    ? <Box>{recipeSelection.cautions.map((item) => <p>{item}</p>)}</Box>
                                    : `none known`}</Text></Box>
                        <Divider orientation='horizontal' w={'20vw'}
                            borderColor={'white'}
                        // borderColor={'orange.200'} 
                        />
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Health Labels:</Heading>
                            <Text size={'md'}>
                                <Box>
                                    {recipeSelection.healthLabels.map((healthLabel) =>
                                        <p>{healthLabel}</p>
                                    )}
                                </Box></Text></Box></GridItem>

                </SimpleGrid>
                {/* <Stack mt={12} width={'100%'} height={'100%'}> */}
                {/* < ButtonChoice textColor={'blackAlpha.600'} text={'Confirm order'} clickFn={onOpen} /> */}
                {/* < ButtonChoice textColor={'blackAlpha.600'} text={'Change selection'} clickFn={() => clickFn()} />
                </Stack> */}
                <Box
                    mt={5}
                    height={'100'}
                    className='hover-box'
                // boxShadow={{ base: 'md', lg: 'md' }}
                // dropShadow={'xl'}
                >
                    {/* < ButtonChoice textColor={'blackAlpha.600'} text={'Change selection'} clickFn={() => clickFn()} /> */}
                    <Button
                        onClick={clickFn}
                        // clickFn={() => clickFn()}
                        cursor={'pointer'}
                        // shadow={'2xl'}
                        // color={'orange.700'}
                        // variant={'ghost'} 
                        w={'100%'}
                        as='span'
                        bgColor={'orange.200'}
                        // color={'whiteAlpha.900'}
                        // sx={{
                        //     '.hover-box:hover &': {
                        //         color: 'orange.500',
                        //         bgColor: 'orange.50'
                        //     },
                        // }}
                        color='blackAlpha.700'
                        sx={{
                            '.hover-box:hover &': {
                                color: 'blackAlpha.800',
                                bgColor: 'orange.400'
                                // bgColor: 'gray.500',
                            },
                        }}
                    >
                        {/* <Button variant='solid' > */}
                        Back to Recipe List
                        {/* </Button> */}
                    </Button></Box>
            </SimpleGrid >
            {/* <Box>
                <Image
                    src={recipeSelection.image}
                    alt={`Image of ${recipeSelection.label}.`}
                    objectFit='fill' /></Box> */}
            {/* <Box h={'100px'} bgSize={'cover'} sx={backdrop} /> */}
        </Container >
    );
}