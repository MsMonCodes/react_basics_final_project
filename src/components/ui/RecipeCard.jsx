import { Box, Card, CardHeader, Heading, CardBody, Image, Text, Stack, } from '@chakra-ui/react';

export const RecipeCard = ({ listItem, clickFn }) => {

  const breakpoints = { base: '62em', lg: '30em' };

  return (
    <Card onClick={() => clickFn(listItem)}
      cursor={'pointer'}
      borderRadius={48}
      bgColor={'orange.50'}
      overflow={'hidden'}
      w={{ base: 'xs', lg: '300px' }}
      h={{ base: 'fit-content', lg: 'xl' }}
      pb={2}
      className='hover-box'>
      <Image
        marginBlock={0}
        src={listItem.recipe.image}
        alt={`Image of ${listItem.recipe.label}.`}
        objectFit='cover'
        h={{ base: '150px', lg: '200px' }}
        borderBottomRadius={{ base: 0, lg: 0 }} />
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
          },
        }}>
        <Heading size={'md'}>{listItem.recipe.label}</Heading></CardHeader>
      <CardBody
        mt={-4}
        as='span'
        color='blackAlpha.700'
        sx={{
          '.hover-box:hover &': {
            color: 'orange.500'
          },
        }}>
        <Stack gap={1} fontSize={'md'}>
          <Box py={2}><Text fontSize={'lg'} fontWeight={'semibold'} py={0}>{(listItem.recipe.mealType).join('/').toLowerCase()}</Text>
            <Box display={'inline-flex'} gap={2} justifyContent={'center'}>
              <Text fontSize={'lg'}>{listItem.recipe.dishType}</Text></Box></Box>
          <Box>{(listItem.recipe.cautions.length > 0)
            ? <Box>
              <Text>Allergens:</Text>
              <Text fontWeight={'semibold'}>{(listItem.recipe.cautions).join(', ').toLowerCase()}</Text></Box>
            : ''
          }
          </Box>
          <Box>{(listItem.recipe.healthLabels.includes("Vegetarian", "Vegan"))
            ? <Box display={'inline'} gap={2} justifyContent={'center'}><Text
            >Health Labels:</Text>
              {(listItem.recipe.healthLabels.includes("Vegan"))
                ? <Text fontWeight={'semibold'}>vegetarian/vegan</Text>
                : <Text fontWeight={'semibold'}>vegetarian</Text>}</Box>
            : ''}
          </Box>
          <Box gap={2} justifyContent={'center'}>{(listItem.recipe.dietLabels.length > 0)
            ? <Box>
              <Text>Diet Labels:</Text>
              <Text fontWeight={'semibold'}>{(listItem.recipe.dietLabels).join(', ').toLowerCase()}</Text></Box>
            : ' '}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}