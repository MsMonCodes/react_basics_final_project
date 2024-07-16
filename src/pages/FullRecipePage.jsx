import { Grid, GridItem, Image, Heading, Container, Text, Box, SimpleGrid, Divider, Button } from "@chakra-ui/react"
import { BackToTopButton } from "../components/BackToTopButton";

// const recipeSelection = (data.hits[7].recipe);

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
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background: `url(${recipeSelection.recipe.image}) center/cover no-repeat`
    }

    window.scrollTo(0, 0);

    return (
        <Container>
            <SimpleGrid
                justifyContent={'center'}
                alignContent={'center'}
                w={{ base: '100vw', lg: '100%' }}
                color={'blackAlpha.800'}>
                <Box
                    h={{ base: 'sm', lg: 'sm' }}
                    bgSize={'cover'}
                    sx={backdrop}>
                    <Heading
                        w={{ base: 'container.xs', lg: 'container.lg' }}
                        position={'absolute'}
                        px={'5%'}
                        flexWrap={'wrap'}
                        justifyItems={'center'}
                        size={{ base: '3xl', lg: '4xl' }}
                        color={'whiteAlpha.900'}>
                        {recipeSelection.recipe.label}</Heading></Box >
                <Grid bgColor={'red.100'}
                    // justifyContent={'center'}
                    // alignContent={'center'}
                    // w={{ base: '100vw', lg: '100%' }}

                    boxShadow={{ base: 'md', lg: 'md' }}
                    w={{ base: 'container.xs', lg: 'container.lg' }}
                    alignContent={'center'}
                    justifyContent={'space-evenly'}
                    align={'center'}
                    display={{ base: 'flex', lg: 'inline-flex' }}
                    flexWrap={'wrap'}
                    pt={2} pb={4}
                    rowGap={4}>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}>Dish Type:</Text>
                        <Heading
                            size={'md'}
                            fontWeight={'bold'}>{recipeSelection.recipe.dishType}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}>Meal Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{recipeSelection.recipe.mealType}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}>Cooking Time:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{(recipeSelection.recipe.totalTime != 0)
                            ? <Box>{cookingTime(recipeSelection.recipe.totalTime)}</Box>
                            : 'unknown'}</Heading></GridItem>
                    <GridItem w={{ base: '50%', lg: '25%' }}>
                        <Text py={1}>Servings:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{recipeSelection.recipe.yield} portions</Heading></GridItem></Grid>
                <Grid columns={2} display={'flex'} w={'container.lg'} gap={20} mt={6}>
                    <GridItem w={'2xl'}>
                        <Box py={4}>
                            <Heading size={'md'} pb={2}>Ingredients: </Heading>
                            <Text size={'md'}>
                                <Box>{recipeSelection.recipe.ingredientLines.map((ingredient) =>
                                    <p>{ingredient}</p>)}</Box></Text></Box>
                        <Divider
                            orientation='horizontal' w={'100%'}
                            borderColor={'white'} />
                        <Box py={4} w={'sm'}>
                            <Heading size={'md'} pb={2}>Nutrition:</Heading>
                            <SimpleGrid columns={2} spacingX={10} spacingY={10}>
                                <Box>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.ENERC_KCAL.label}</Text>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.PROCNT.label}</Text>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.FAT.label}</Text>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.CHOCDF.label}</Text>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.CHOLE.label}</Text>
                                    <Text size={'md'} fontWeight={'semibold'} >{recipeSelection.recipe.totalNutrients.NA.label}</Text></Box>
                                <Box>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.ENERC_KCAL.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.PROCNT.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.FAT.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.FAT.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.CHOCDF.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.CHOLE.unit}</Text>
                                    <Text size={'md'} >{recipeSelection.recipe.totalNutrients.NA.quantity.toFixed(0)} {recipeSelection.recipe.totalNutrients.NA.unit}</Text></Box></SimpleGrid></Box>
                        <Box pt={4}>
                            <Image
                                py={4}
                                w={'100%'}
                                src={recipeSelection.recipe.image}
                                alt={`Image of ${recipeSelection.recipe.label}.`}
                                objectFit='fill' /></Box></GridItem>
                    <GridItem w={'3xs'} pl={7}>
                        <Box py={4}>
                            <Heading size={'md'} pb={2}>Diet Labels:</Heading>
                            <Text>{(recipeSelection.recipe.dietLabels.length > 0)
                                ? <Box>{recipeSelection.recipe.dietLabels.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Divider
                            orientation='horizontal' w={'20vw'}
                            borderColor={'white'} />
                        <Box py={4}>
                            <Heading size={'md'} pb={2}>Allergens:</Heading>
                            <Text size={'md'}>{(recipeSelection.recipe.cautions.length > 0)
                                ? <Box>{recipeSelection.recipe.cautions.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Divider
                            orientation='horizontal' w={'20vw'}
                            borderColor={'white'} />
                        <Box py={4}>
                            <Heading size={'md'} pb={2}>Health Labels:</Heading>
                            <Text size={'md'}>
                                <Box>{recipeSelection.recipe.healthLabels.map((healthLabel) =>
                                    <p>{healthLabel}</p>
                                )}</Box></Text></Box></GridItem></Grid>
                <Box
                    // base={{ position: 'sticky', bottom: 0 }}
                    position={{ base: 'sticky', lg: 'static' }}
                    bottom={0}
                    mt={5}
                    height={'100'}
                    className='hover-box'>
                    <Button
                        onClick={() => clickFn()}
                        cursor={'pointer'}
                        w={{ base: '100%', lg: '100%' }}
                        as='span'
                        bgColor={'orange.200'}
                        color='blackAlpha.700'
                        sx={{
                            '.hover-box:hover &': {
                                color: 'blackAlpha.800',
                                bgColor: 'orange.400'
                            },
                        }}>Back to Recipe List</Button></Box></SimpleGrid ></Container >
    );
}