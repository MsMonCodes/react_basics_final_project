import { Box, Card, CardHeader, Heading, CardBody, CardFooter, Button, List, SimpleGrid, UnorderedList, Image, Text, Show, Flex, Stack } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SearchBar } from '../components/SearchBar';

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  const breakpoints = { base: '62em', lg: '30em' };


  return (
    <SimpleGrid
      overflow-x={0}
      w={'100%'}
      justifyItems={'center'}
      align={'center'}
      color={'blackAlpha.800'}
    // bgColor={'gray.800'}
    // color={'whiteAlpha.800'}
    >
      <Box
        // backgroundImage={"url('./components/ui/images/background_image.jpg')"}
        // backgroundPosition={"center"}
        // backgroundRepeat={"no-repeat"}
        w={'100%'}
        mt={{ base: 8, lg: 8 }}
        mb={{ base: 3, lg: 6 }}
      >
        <Heading
          // color={'blackAlpha.800'}
          size={'2xl'}
        >Your Recipe App</Heading>
      </Box>
      <Box
        align={'center'}
        w={{ lg: '80%', base: '100%', }}
        // justify={'center'}
        mt={6}
        mb={8}
      >
        <SearchBar w={'100%'} />
        <UnorderedList
          marginRight={{ lg: 0, base: 3 }}
          styleType={''}
          display={'inline-flex'}
          flexWrap={'wrap'}
          gap={6}
          // marginLeft={{ lg: 0, base: "10%" }}
          // marginRight={{ lg: 0, base: "10%" }}
          justifyContent={'center'}
        > {data.hits.map((item) => (
          <List
            key={item.recipe.label}
            alignItems={'start'}
          >
            <Card
              borderRadius={48}
              bgColor={'orange.50'}
              // bgColor={'whiteAlpha.50'}
              // bgColor={'whiteAlpha.900'}
              overflow={'hidden'}
              boxSize={'sm'}
              // w={{ base: '80vw', lg: '20vw' }}
              w={{ base: '80vw', lg: '20vw' }}
              h={{ base: 'sm', lg: 'md' }}
              // h={'minmax(md, lg)'}
              pb={2}
              className='hover-box'
            >
              <Image
                marginBlock={0}
                src={item.recipe.image}
                alt={`Image of ${item.recipe.label}.`}
                objectFit='cover'
                h={{ base: '150px', lg: '200px' }}
                // maxH={{ base: '150px', lg: '200px' }}
                borderBottomRadius={{ base: 0, lg: 0 }}
              />
              <CardHeader
                mt={0}
                mb={0}
                maxH={'fit-content'}
                as='span'
                color='blackAlpha.700'
                sx={{
                  '.hover-box:hover &': {
                    color: 'blackAlpha.800',
                    bgColor: 'orange.400'
                    // bgColor: 'gray.500',
                  },
                }}
              >
                <Heading size={'md'}>{item.recipe.label}
                </Heading>
              </CardHeader>
              <CardBody
                mt={-4}
                as='span'
                color='blackAlpha.700'
                sx={{
                  '.hover-box:hover &': {
                    color: 'orange.500',
                    // color: 'gray.500'
                  },
                }}

              >
                <Stack gap={1}>
                  <Box>
                    <Text fontWeight={'semibold'} >Dish: {item.recipe.dishType}</Text>
                    <Text>{item.recipe.mealType}</Text>
                    <Text>{(item.recipe.healthLabels === 'Vegetarian') ? 'Vegetarian' : ''}</Text>
                    {/* <Text>{data.hits.healthLabels.filter(healthLabels === "Vegetarian" || healthLabels === "Vegan")}</Text> */}
                  </Box>
                  <Box >
                    <Text>{(item.recipe.dietLabels.length > 0) ? `Diet: ${item.recipe.dietLabels}` : ``}</Text>
                    <Box fontStyle={'italic'}>
                      {(item.recipe.cautions.length > 0) ? `Allergens: ${item.recipe.cautions}` : ``}
                    </Box>
                  </Box>
                </Stack>
              </CardBody>
              {/* <CardFooter
                justify={'center'}
              // mt={-4}
              >
                <Button variant='solid' colorScheme='green'>
                  View recipe
                </Button>
              </CardFooter> */}
            </Card>
          </List>
        ))} </UnorderedList>
      </Box >

    </SimpleGrid >

  );
}

// <Box>
//   <UnorderedList
//     styleType={' '}
//     spacing={6}
//   > {data.hits.map((item) => (
//     <List
//       key={item.recipe.label}
//     >

//       <Card
//         direction={{ base: 'column', lg: 'row' }}
//         overflow='hidden'
//         variant='outline'
//       >
//         <Image
//           objectFit='cover'
//           maxW={{ base: '100%', lg: '200px' }}
//           src={item.recipe.image}
//           alt={`Image of ${item.recipe.label}.`}
//         />

//         <Stack>
//           <CardBody>
//             <Heading size={'md'}>{item.recipe.label}</Heading>
//             <Stack>
//               <Text py={'2'}>{item.recipe.mealType}</Text>
//               <Text py={'2'}>{item.recipe.dietLabels}</Text>
//               <Box >{`Dish: ${item.recipe.dishType}`} </Box>
//               <Box fontStyle={'italic'} >
//                 {(item.recipe.cautions.length > 0) ? `Cautions: ${item.recipe.cautions}` : ` `}
//               </Box>
//             </Stack>
//           </CardBody>

//           <CardFooter>
//             <Button variant='solid' colorScheme='green'>
//               View recipe
//             </Button>
//           </CardFooter>

//         </Stack>
//       </Card>

//     </List>
//   ))} </UnorderedList>

// </Box>

// <Button>
//   <Flex flexWrap={'wrap'} flexDir={'column'} >
//     <Image borderRadius='full' boxSize='150px' src={item.recipe.image} alt={`Image of ${item.recipe.label}.`} />
//     <Flex>{item.recipe.mealType}</Flex>
//     <Heading size={'md'}>{item.recipe.label}</Heading>
//     <Flex>{ data.hits.healthLabels.filter(healthLabels => (healthLabels === "Vegetarian")) }</Flex>
//     <Flex>{item.recipe.dietLabels}</Flex>
//     <Stack spacing={4}></Stack>
//     <Flex>Dish: {item.recipe.dishType}</Flex>
//     <Flex>Cautions: {item.recipe.cautions}</Flex>
//   </Flex>

// </Button>