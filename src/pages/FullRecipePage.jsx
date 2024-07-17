import { Grid, GridItem, Image, Heading, Container, Text, Box, SimpleGrid, Divider, Button, AbsoluteCenter } from "@chakra-ui/react"

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
                w={'100%'}
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
                <Grid
                    boxShadow={{ base: 'md', lg: 'md' }}
                    w={{ base: '100%', lg: 'container.lg' }}
                    alignContent={'center'}
                    justifyContent={'space-evenly'}
                    align={'center'}
                    display={{ base: 'block', lg: 'inline-flex' }}
                    flexWrap={'wrap'}
                    pt={2} pb={4}>
                    <GridItem py={{ base: 4, lg: 0 }} w={{ base: '100%', lg: '25%' }}>
                        <Text py={1}>Dish Type:</Text>
                        <Heading
                            size={'md'}
                            fontWeight={'bold'}>{recipeSelection.recipe.dishType}</Heading></GridItem>
                    <GridItem pb={{ base: 4, lg: 0 }} w={{ base: '100%', lg: '25%' }}>
                        <Text py={1}>Meal Type:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{recipeSelection.recipe.mealType}</Heading></GridItem>
                    <GridItem pb={{ base: 4, lg: 0 }} w={{ base: '100%', lg: '25%' }}>
                        <Text py={1}>Servings:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{recipeSelection.recipe.yield} portions</Heading></GridItem>
                    <GridItem pb={{ base: 4, lg: 0 }} w={{ base: '100%', lg: '25%' }}>
                        <Text py={1}>Cooking Time:</Text>
                        <Heading size={'md'} fontWeight={'bold'}>{(recipeSelection.recipe.totalTime != 0)
                            ? <Box>{cookingTime(recipeSelection.recipe.totalTime)}</Box>
                            : 'unknown'}</Heading></GridItem></Grid>
                <SimpleGrid gridAutoColumns={{ base: 1, lg: 2 }} display={{ base: 'block', lg: 'flex' }} w={'100 %'} mt={6} px={{ base: 4, lg: 0 }}>
                    <GridItem w={'100%'}>
                        <Box py={4} w={'100%'}>
                            <Heading size={'md'} pb={2}>Ingredients:</Heading>
                            <Text size={'md'}>
                                <Box>{recipeSelection.recipe.ingredientLines.map((ingredient) =>
                                    <p>{ingredient}</p>)}</Box></Text></Box>
                        <Box py={4} w={'100%'} >
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
                        <Box py={4} w={{ base: '100%', lg: '95%' }}>
                            <Image
                                boxShadow={{ base: 'md', lg: 'md' }}
                                src={recipeSelection.recipe.image}
                                alt={`Image of ${recipeSelection.recipe.label}.`}
                                objectFit='fill' /></Box></GridItem>
                    <GridItem w={{ base: '100%', lg: '25%' }} textAlign={{ base: 'left', lg: 'center' }} boxShadow={{ base: 'none', lg: 'lg' }} bgColor={{ base: 'none', lg: 'orange.50' }}>
                        <Box py={4} w={'100%'}>
                            <Heading size={'md'} pb={2}>Diet Labels:</Heading>
                            <Text>{(recipeSelection.recipe.dietLabels.length > 0)
                                ? <Box>{recipeSelection.recipe.dietLabels.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Box py={4} w={'100%'}>
                            <Heading size={'md'} pb={2}>Allergens:</Heading>
                            <Text size={'md'}>{(recipeSelection.recipe.cautions.length > 0)
                                ? <Box>{recipeSelection.recipe.cautions.map((item) => <p>{item}</p>)}</Box>
                                : `none known`}</Text></Box>
                        <Box py={4} w={'100%'}>
                            <Heading size={'md'} pb={2}>Health Labels:</Heading>
                            <Text size={'md'}>
                                <Box>{recipeSelection.recipe.healthLabels.map((healthLabel) =>
                                    <p>{healthLabel}</p>
                                )}</Box></Text></Box></GridItem></SimpleGrid></SimpleGrid >
            <Box
                height={'100'}
                className='hover-box'
                position={'center'}
                w={{ base: '100%', lg: '100%' }}>
                <Button
                    ml={{ base: -4, lg: '-14vw' }}
                    borderRadius={{ base: 0, lg: 10 }}
                    position={'fixed'}
                    bottom={{ base: 0, lg: 10 }}
                    onClick={() => clickFn()}
                    cursor={'pointer'}
                    w={{ base: 'full', lg: 'container.lg' }}
                    as='span'
                    bgColor={'orange.200'}
                    color='blackAlpha.700'
                    sx={{
                        '.hover-box:hover &': {
                            color: 'blackAlpha.800',
                            bgColor: 'orange.400'
                        },
                    }}>Back to Recipe List</Button></Box></Container>
    );
}