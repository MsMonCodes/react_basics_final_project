import { Box, Card, CardHeader, Heading, CardBody, CardFooter, Button, List, SimpleGrid, UnorderedList, Image, Text, Show, Flex, Stack, Hide, Divider } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SearchBar } from './SearchBar';
import { useState } from 'react';
import { RecipeCard } from './ui/RecipeCard';

export const RecipeList = ({ listItem, clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  const breakpoints = { base: '62em', lg: '30em' };
  // const { onOpen } = useDisclosure();

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
        align={'center'}
        w={{ lg: '80%', base: '100%', }}
        // justify={'center'}
        mt={6}
        mb={8}
      >
        <UnorderedList
          marginRight={{ lg: 0, base: 3 }}
          styleType={''}
          display={'inline-flex'}
          flexWrap={'wrap'}
          gap={8}
          w={'70vw'}
          // marginLeft={{ lg: 0, base: "10%" }}
          // marginRight={{ lg: 0, base: "10%" }}
          justifyContent={'center'}
          alignContent={'center'}
        > {listItem.map((item) => (
          < RecipeCard listItem={item} clickFn={clickFn} />
        ))} </UnorderedList>
        <Box mt={10} h={{ base: 10, lg: 20 }} w={{ base: '2xs', lg: '4xl' }}>
          <Divider orientation='horizontal' />
        </Box>
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