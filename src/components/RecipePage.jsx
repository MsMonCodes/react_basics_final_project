import { Grid, GridItem, Image, Heading, Container, Text, Center, Box, UnorderedList, List, Flex, SimpleGrid, background, filter, TableContainer, Table, Divider } from "@chakra-ui/react"
import { data } from "../utils/data";
import { filterProps } from "framer-motion";

export const RecipePage = () => {
    const recipeSelected = (data.hits[17].recipe);
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
        background: `url(${recipeSelected.image}) center/cover no-repeat`
    }

    return (
        <Container>
            <SimpleGrid justifyContent={'center'} color={'blackAlpha.800'} mx={'10%'}>
                <Box h={'sm'} bgSize={'cover'} sx={backdrop}
                // filter={'auto'} 
                // blur={'2px'}
                >
                    <Heading w={'container.lg'} position={'absolute'} px={'5%'} flexWrap={'wrap'} size={'4xl'} color={'whiteAlpha.900'}
                    >{recipeSelected.label}</Heading></Box >
                <Grid boxShadow={'md'}
                    columns={4} w={'container.lg'} alignContent={'center'}
                    justifyContent='space-evenly'
                    display={'inline-flex'}
                    textAlign={'center'}
                    pt={2} pb={4}
                >
                    <GridItem alignContent={'center'}>
                        <Text py={1}
                        >Dish Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelected.dishType}</Heading></GridItem>
                    <GridItem >
                        <Text py={1}
                        >Meal Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelected.mealType}</Heading></GridItem>
                    <GridItem>
                        <Text py={1}
                        >Cooking Time:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{cookingTime(recipeSelected.totalTime)}</Heading></GridItem>
                    <GridItem>
                        <Text py={1}
                        >Servings:</Text>
                        <Heading size={'md'} fontWeight={'bold'}
                        >{recipeSelected.yield} portions</Heading></GridItem>
                </Grid>
                <SimpleGrid columns={3} w={'container.lg'} gap={10} mt={6}
                // pt={10}
                >
                    <GridItem w={'2xl'} >
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Ingredients: </Heading>
                            <Text size={'md'}>
                                <Box>
                                    {recipeSelected.ingredientLines.map((ingredient) =>
                                        <p>{ingredient}</p>
                                    )}
                                </Box></Text></Box>
                        <Divider orientation='horizontal' w={675} />
                        <Box py={4} w={'ld'}>
                            <Heading size={'md'} pb={2}
                            >Nutrition:</Heading>
                            <SimpleGrid columns={2} spacingX={10} spacingY={10}>
                                <Box>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.ENERC_KCAL.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.PROCNT.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.FAT.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.CHOCDF.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.CHOLE.label}</Text>
                                    <Text size={'md'} fontWeight={'bold'} >{recipeSelected.totalNutrients.NA.label}</Text>
                                </Box>
                                <Box>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} {recipeSelected.totalNutrients.ENERC_KCAL.unit}</Text>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.PROCNT.quantity.toFixed(0)} {recipeSelected.totalNutrients.PROCNT.unit}</Text>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.FAT.quantity.toFixed(0)} {recipeSelected.totalNutrients.FAT.unit}</Text>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipeSelected.totalNutrients.CHOCDF.unit}</Text>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.CHOLE.quantity.toFixed(0)} {recipeSelected.totalNutrients.CHOLE.unit}</Text>
                                    <Text size={'md'} >{recipeSelected.totalNutrients.NA.quantity.toFixed(0)} {recipeSelected.totalNutrients.NA.unit}</Text>
                                </Box>
                            </SimpleGrid></Box>
                        <Box pt={4} boxSize={'2xl'}>
                            <Image
                                src={recipeSelected.image}
                                alt={`Image of ${recipeSelected.label}.`}
                                objectFit='fill' /></Box></GridItem>
                    <GridItem></GridItem>
                    <GridItem w={'xs'}>
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Diet Labels:</Heading>
                            <Text
                            >{(recipeSelected.dietLabels.length > 0)
                                ? <Box>{recipeSelected.dietLabels.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Divider orientation='horizontal' />
                        <Box py={4}>
                            <Heading size={'md'} pb={2}
                            >Allergens:</Heading>
                            <Text size={'md'}>
                                {(recipeSelected.cautions.length > 0)
                                    ? <Box>{recipeSelected.cautions.map((item) => <p>{item}</p>)}</Box>
                                    : `none known`}</Text></Box>
                        <Divider orientation='horizontal' />
                        <Box py={4}>
                            <Heading size={'sm'} pb={2}
                            >Health Labels:</Heading>
                            <Text size={'md'}>
                                <Box>
                                    {recipeSelected.healthLabels.map((healthLabel) =>
                                        <p>{healthLabel}</p>
                                    )}
                                </Box></Text></Box></GridItem>
                </SimpleGrid>
            </SimpleGrid >
            {/* <Box>
                <Image
                    src={recipeSelected.image}
                    alt={`Image of ${recipeSelected.label}.`}
                    objectFit='fill' /></Box> */}
            {/* <Box h={'100px'} bgSize={'cover'} sx={backdrop} /> */}
        </Container >
    );
}