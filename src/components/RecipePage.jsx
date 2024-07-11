import { Grid, GridItem, Image, Heading, Container, Text, Center, Box, UnorderedList, List } from "@chakra-ui/react"
import { data } from "../utils/data";

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
    const recipeSelected = (data.hits[0].recipe);

    return (
        <Center>
            <Box border={'2px'} borderColor={'orange.300'}
                h={'lg'} bgSize={'contain'} w={'50vw'}
            // mx={'10px'} bgImage={recipeSelected.image}
            // bgPos={'center'} objectFit={'cover'} bgRepeat={'no-repeat'}
            >
                <Image src={recipeSelected.image} alt={`Image of ${recipeSelected.label}.`}
                    backgroundPosition={'center'}
                    filter={''}
                />
                <Heading
                    w={'container.lg'}
                    position={'absolute'}
                    align={'center'}
                    top={'20%'}
                    left={'23%'}
                    flexWrap={'wrap'}
                    size={'4xl'}
                >{recipeSelected.label}</Heading>
            </Box >
            <Box border={'2px'} borderColor={'orange.300'} px={4}> </Box>
            <Box border={'2px'} borderColor={'pink.500'} px={4}>navigation bar</Box>
            <Box border={'2px'} borderColor={'green.100'} px={4}>
                <Text>{recipeSelected.mealType}</Text>
            </Box>
            <Box border={'2px'} borderColor={'green.200'} px={4}>
                <Text>Dish: {recipeSelected.dishType}</Text>
            </Box>
            <Box border={'2px'} borderColor={'green.300'} px={4}>

            </Box>
            <Box border={'2px'} borderColor={'blue.100'} px={4}>

            </Box>
            <Box border={'2px'} borderColor={'blue.200'} px={4}>

            </Box>
            <Box border={'2px'} borderColor={'blue.300'} px={4}>

            </Box>
            <Box border={'2px'} borderColor={'yellow.300'} px={4} p={4}>
                <Heading size={'lg'} pb={2}>Nutrition: </Heading>
                <Grid pb={1} templateAreas={`"label", "quantity"`} templateColumns={'2fr, 1fr'} >
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading gridAreasize={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.ENERC_KCAL.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} {recipeSelected.totalNutrients.ENERC_KCAL.unit}</Text>
                    </GridItem>
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading size={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.PROCNT.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.PROCNT.quantity.toFixed(0)} {recipeSelected.totalNutrients.PROCNT.unit}</Text>
                    </GridItem>
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading size={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.FAT.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.FAT.quantity.toFixed(0)} {recipeSelected.totalNutrients.FAT.unit}</Text>
                    </GridItem>
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading size={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.CHOCDF.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipeSelected.totalNutrients.CHOCDF.unit}</Text>
                    </GridItem>
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading size={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.CHOLE.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.CHOLE.quantity.toFixed(0)} {recipeSelected.totalNutrients.CHOLE.unit}</Text>
                    </GridItem>
                    <GridItem display={'inline-flex'} gap={4}>
                        <Heading size={'md'} verticalAlign={'center'}>{recipeSelected.totalNutrients.NA.label}</Heading>
                        <Text size={'md'}>{recipeSelected.totalNutrients.NA.quantity.toFixed(0)} {recipeSelected.totalNutrients.NA.unit}</Text>
                    </GridItem>
                </Grid>
                {/* {data.hits.map((item) => ( */}
                {/* <UnorderedList
                    marginRight={{ lg: 0, base: 3 }}
                    styleType={''}
                    display={'inline-flex'}
                    flexWrap={'wrap'}
                    gap={8}
                    w={'70vw'}
                    // marginLeft={{ lg: 0, base: "10%" }}
                    // marginRight={{ lg: 0, base: "10%" }}
                    justifyContent={'center'}
                >
                    {recipeSelected.totalNutrients.map((item) => (
                        <List
                            key={item.recipeSelected.label}
                            alignItems={'start'}
                        >
                            <Box>
                                <Text>{item.totalNutrients}</Text>
                            </Box>
                        </List>
                    ))}
                </UnorderedList> */}
                {/* <List>
                {recipeSelected.totalNutrients}
                Energy in kcal, protein, fat, carbs, cholesterol, sodium
                </List> */}
            </Box>
            <Box border={'2px'} borderColor={'red.300'} px={4}>

            </Box>
            <Box border={'2px'} borderColor={'pink.300'} px={4}>

            </Box>

        </Center >
        // <Grid
        //     templateAreas={
        //         `"hero hero hero"
        //         "nav nav nav"
        //         "meal dish time"
        //         "ingredients ingredients diet"   
        //         "ingredients ingredients health"                
        //         "ingredients ingredients cautions"                
        //         "ingredients ingredients servings"                
        //         "ingredients ingredients nutrients"
        //         "footer footer footer"`}
        //     gridTemplateRows={'3fr 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
        //     gridTemplateColumns={'1fr 3fr 1fr'}
        //     gap='1'
        //     color='blackAlpha.800'
        //     // fontWeight='bold'
        //     align={'center'}
        //     marginInline={'25vw'}
        // >

        //     <GridItem bg='orange.300' area={'hero'} insetInline={'auto'}
        //         backgroundImage={recipeSelected.image}>
        //         {/* <Image src={recipeSelected.image} alt={`Image of ${recipeSelected.label}.`}
        //             objectFit={'full'}
        //             backgroundPosition={'center'}
        //             filter={''}
        //         /> */}
        //         <Heading
        //             w={'container.lg'}
        //             alignSelf={'center'}
        //             position={'absolute'}
        //             // justify={'center'}
        //             // alignf={'center'}
        //             top={'20%'}
        //             left={'23%'}
        //             flexWrap={'wrap'}
        //             size={'4xl'}
        //         // transform={'translate(-50%, -50%'}
        //         >{recipeSelected.label}</Heading>
        //     </GridItem>

        //     <GridItem pl='2' bg='pink.500' area={'nav'}>
        //         navigation bar
        //     </GridItem>

        //     <GridItem pl='2' bg='green.100' area={'meal'}>
        //         <Text>{recipeSelected.mealType}</Text>
        //     </GridItem>

        //     <GridItem pl='2' bg='green.200' area={'dish'}>
        //         <Text>Dish: {recipeSelected.dishType}</Text>
        //     </GridItem>

        //     <GridItem pl='2' bg='green.300' area={'time'}>
        //         cooking time block
        //     </GridItem>

        //     <GridItem pl='2' bg='blue.100' area={'diet'}>
        //         diet labels block
        //     </GridItem>

        //     <GridItem pl='2' bg='blue.200' area={'health'}>
        //         {(recipeSelected.dietLabels.length > 0) ? `Diet: ${recipeSelected.dietLabels}` : `Diet: unknown`}
        //     </GridItem>

        //     <GridItem pl='2' bg='blue.300' area={'cautions'}>
        //         allergens block
        //     </GridItem>

        //     <GridItem pl='2' bg='gray.300' area={'servings'}>
        //         servings block
        //     </GridItem>

        //     <GridItem pl='2' bg='yellow.300' area={'nutrients'}>
        //         nutrients block
        //     </GridItem>

        //     <GridItem pl='2' bg='red.300' area={'ingredients'}>
        //         ingredients block
        //     </GridItem>

        //     <GridItem pl='2' bg='pink.500' area={'footer'}>
        //         Footer
        //     </GridItem>

        // </Grid>
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