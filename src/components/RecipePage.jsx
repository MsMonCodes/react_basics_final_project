import { Grid, GridItem, Image, Heading, Container, Text, Center, Box, UnorderedList, List, Flex, SimpleGrid, background, filter } from "@chakra-ui/react"
import { data } from "../utils/data";
import { filterProps } from "framer-motion";

// Recipe name
//     <CardHeader
//       mt={0}
//       mb={0}
//       maxH={'fit-content'}
//       as='span'
//       color='blackAlpha.700'
//       sx={{
//         '.hover-box:hover &': {
//           color: 'blackAlpha.800',
//           bgColor: 'orange.400'
//           // bgColor: 'gray.500',
//         },
//       }}
//     >
//       <Heading size={'md'}>{item.recipe.label}
//       </Heading>
//     </CardHeader>

// A picture of the recipe/meal
//     <Image
//       marginBlock={0}
//       src={item.recipe.image}
//       alt={`Image of ${item.recipe.label}.`}
//       objectFit='cover'
//       h={{ base: '150px', lg: '200px' }}
//       // maxH={{ base: '150px', lg: '200px' }}
//       borderBottomRadius={{ base: 0, lg: 0 }}
//     />

// Meal type
//           <Text>{item.recipe.mealType}</Text>

// Dish type
//           <Text fontWeight={'semibold'} >Dish: {item.recipe.dishType}</Text>

// Total cooking time


// Diet label
//           <Text>{(item.recipe.dietLabels.length > 0) ? `Diet: ${item.recipe.dietLabels}` : ``}</Text>

// All health labels
//           <Text>{(item.recipe.healthLabels.length > 0) ? `Health labels: ${item.recipe.healthLabels}` : ``}</Text>

// Cautions
//           <Text fontStyle={'italic'}>
//             {(item.recipe.cautions.length > 0) ? `Allergens: ${item.recipe.cautions}` : ``}
//           </Text>

// Ingredients


// Servings


// Total nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)


export const RecipePage = () => {
    const recipeSelected = (data.hits[10].recipe);
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
        <SimpleGrid justifyContent={'center'} color={'blackAlpha.800'} mx={'10%'}>
            <Box h={'lg'} bgSize={'cover'} sx={backdrop}>
                <Heading w={'container.lg'} position={'absolute'} top={'25%'} px={'5%'} flexWrap={'wrap'} size={'4xl'} color={'whiteAlpha.900'}
                >{recipeSelected.label}</Heading></Box >
            {/* <Box border={'2px'} borderColor={'pink.500'} px={4}>
                navigation bar
            </Box> */}
            <Grid alignContent={'center'} templateColumns={4} size={'fit=contents'} display={'inline-flex'} textAlign={'left'} justifyContent={'center'} py={2}
                gap={'17.8%'}
            // gap={'44'}
            >
                <Box alignContent={'center'}>
                    <Text size={'sm'} py={1}
                    >Dish Type:</Text>
                    <Heading size={'md'} fontWeight={'bold'}
                    >{recipeSelected.dishType}</Heading></Box>
                <Box >
                    <Text size={'sm'} py={1}
                    >Meal Type:</Text>
                    <Heading size={'md'} fontWeight={'bold'}
                    >{recipeSelected.mealType}</Heading></Box>
                <Box>
                    <Text size={'sm'} py={1}
                    >Total Cooking Time:</Text>
                    <Heading size={'md'} fontWeight={'bold'}
                    >{cookingTime(recipeSelected.totalTime)}</Heading></Box>
                <Box>
                    <Text size={'sm'} py={1}
                    >Servings:</Text>
                    <Heading size={'md'} fontWeight={'bold'}
                    >{recipeSelected.yield} portions</Heading></Box>
            </Grid>
            <Box size={'fit=contents'} display={'inline-flex'} gap={'20%'} textAlign={'left'} justifyContent={'center'} py={2}>
            </Box>
            <SimpleGrid columns={2} w={'container.lg'}
            >
                <Box border={'2px'} borderColor={'blue.100'}
                    p={4}>
                    <Heading size={'md'} pb={2}
                    >Diet labels:</Heading>
                    <Text
                    >{(recipeSelected.dietLabels.length > 0) ? `${recipeSelected.dietLabels}` : `unknown`}</Text></Box>
                <Box border={'2px'} borderColor={'blue.300'}
                    p={4}>
                    <Heading size={'md'} pb={2}
                    >Allergens:</Heading>
                    <Text size={'md'}
                    >{recipeSelected.cautions}</Text></Box>
                <Box border={'2px'} borderColor={'blue.200'}
                    p={4}>
                    <Heading size={'md'} pb={2}
                    >Health labels:</Heading>
                    <Text
                    >{recipeSelected.healthLabels}</Text></Box>
                <Box border={'2px'} borderColor={'orange.300'}
                    p={4}>
                    <Heading size={'md'} pb={2}
                    >Ingredients: </Heading>
                    <Text size={'md'}
                    >{recipeSelected.ingredientLines}</Text></Box>
                <Box border={'2px'} borderColor={'yellow.300'}
                    p={4}>
                    <Heading size={'md'} pb={2}
                    >Nutrition:</Heading>
                    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
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
            </SimpleGrid>
            <Box border={'2px'} borderColor={'pink.300'} px={4}>Footer</Box>
        </SimpleGrid >
    );
}


// <UnorderedList
// marginRight={{ lg: 0, base: 3 }}
// styleType={''}
// display={'inline-flex'}
// flexWrap={'wrap'}
// gap={8}
// w={'70vw'}
// // marginLeft={{ lg: 0, base: "10%" }}
// // marginRight={{ lg: 0, base: "10%" }}
// justifyContent={'center'}
// > {data.hits.map((item) => (
// <List
//   key={item.recipe.label}
//   alignItems={'start'}
// >
//   <Card
//     borderRadius={48}
//     bgColor={'orange.50'}
//     // bgColor={'whiteAlpha.50'}
//     // bgColor={'whiteAlpha.900'}
//     overflow={'hidden'}
//     boxSize={'sm'}
//     w={'300px'}
//     h={{ base: 'sm', lg: 'md' }}
//     // h={'minmax(md, lg)'}
//     pb={2}
//     className='hover-box'
//   >
//     <Image
//       marginBlock={0}
//       src={item.recipe.image}
//       alt={`Image of ${item.recipe.label}.`}
//       objectFit='cover'
//       h={{ base: '150px', lg: '200px' }}
//       // maxH={{ base: '150px', lg: '200px' }}
//       borderBottomRadius={{ base: 0, lg: 0 }}
//     />
//     <CardHeader
//       mt={0}
//       mb={0}
//       maxH={'fit-content'}
//       as='span'
//       color='blackAlpha.700'
//       sx={{
//         '.hover-box:hover &': {
//           color: 'blackAlpha.800',
//           bgColor: 'orange.400'
//           // bgColor: 'gray.500',
//         },
//       }}
//     >
//       <Heading size={'md'}>{item.recipe.label}
//       </Heading>
//     </CardHeader>
//     <CardBody
//       mt={-4}
//       as='span'
//       color='blackAlpha.700'
//       sx={{
//         '.hover-box:hover &': {
//           color: 'orange.500',
//           // color: 'gray.500'
//         },
//       }}

//     >
//       <Stack gap={1}>
//         <Box>
//           <Text fontWeight={'semibold'} >Dish: {item.recipe.dishType}</Text>
//           <Text>{item.recipe.mealType}</Text>
//           <Text>{(item.recipe.healthLabels === 'Vegetarian') ? 'Vegetarian' : ''}</Text>
//         </Box>
//         <Box >
//           <Text>{(item.recipe.dietLabels.length > 0) ? `Diet: ${item.recipe.dietLabels}` : ``}</Text>
//           <Box fontStyle={'italic'}>
//             {(item.recipe.cautions.length > 0) ? `Allergens: ${item.recipe.cautions}` : ``}
//           </Box>
//         </Box>
//       </Stack>
//     </CardBody>
//     <CardFooter
//       justify={'center'}
//     // mt={-4}
//     >
//       <Button variant='solid' colorScheme='green'>
//         View recipe
//       </Button>
//     </CardFooter>
//   </Card>
// </List>
// ))} </UnorderedList>