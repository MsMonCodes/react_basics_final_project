import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, List, SimpleGrid, UnorderedList, Image, Text, Show, Flex, Stack } from '@chakra-ui/react';
import { data } from '../utils/data';

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  const breakpoints = { base: '62em', sm: '30em' };
  // const breakpoints = [{ sm: '30em', md: '48em', lg: '62em' }];


  return (
    <SimpleGrid
      overflow-x={'none'}
      h={"md"}
      w={'100%'}
      marginLeft={{ sm: 0, base: "20%" }}
      marginRight={{ sm: 0, base: "20%" }}
      justifyContent={'center'}
      justifyItems={'center'}
      align={'center'}
      // bgColor={'green.100'}
      bgColor={'white'}
    >

      <Box
        // justify={'center'}
        w={'100%'}
        mt={'4rem'}
        mb={'4rem'}
      >
        <Heading
          // color={'green.400'}
          color={'blackAlpha.800'}
          size={'2xl'}
        >Your Recipe App</Heading>
      </Box>
      <Flex
        align={'center'}
        marginInlineStart={10}
        marginInlineEnd={10}
        bgColor={'White'}
        w={'100%'}
        mt={6}
        mb={8}
      >
        <UnorderedList
          styleType={' '}
          display={'inline-flex'}
          flexWrap={'wrap'}
          gap={6}
          marginLeft={{ sm: 0, base: "10%" }}
          marginRight={{ sm: 0, base: "10%" }}
          justifyContent={'center'}
        > {data.hits.map((item) => (
          <List
            key={item.recipe.label}
            alignItems={'start'}
          >
            <Card
              borderRadius={48}
              bgColor={'orange.50'}
              overflow={'hidden'}
              boxSize={'sm'}
              w={{ sm: '20vw', base: '80vw' }}
              h={'md'}
              pb={4}
              className='hover-box'
            >
              <Image
                borderRadius={[48, 48, 0, 0]}
                marginBlock={0}
                src={item.recipe.image}
                alt={`Image of ${item.recipe.label}.`}
                objectFit='cover'
                maxH={{ base: '250px', sm: '200px' }}
                borderBottomRadius={{ base: 0 }}
              />
              <CardHeader
                mt={0}
                mb={2}
                maxH={'10ch'}

                as='span'
                color='blackAlpha.800'
                sx={{
                  '.hover-box:hover &': {
                    color: 'blackAlpha.800',
                    bgColor: 'orange.400'
                  },
                }}
              >
                <Heading size={'md'}>{item.recipe.label}
                </Heading>
              </CardHeader>
              <CardBody
                as='span'
                color='blackAlpha.700'
                sx={{
                  '.hover-box:hover &': {
                    color: 'orange.400',
                  },
                }}

              >
                {/* <Text>{data.hits.healthLabels.filter(healthLabels === "Vegetarian" || healthLabels === "Vegan")}</Text> */}
                <Stack gap={1}>
                  <Box>
                    <Text fontWeight={'semibold'} >Dish: {item.recipe.dishType}</Text>
                    <Text>{item.recipe.mealType}</Text>
                  </Box>
                  <Box >
                    <Text>{(item.recipe.dietLabels.length > 0) ? `Diet: ${item.recipe.dietLabels}` : ""}</Text>
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
      </Flex >

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
//         direction={{ base: 'column', sm: 'row' }}
//         overflow='hidden'
//         variant='outline'
//       >
//         <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '200px' }}
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