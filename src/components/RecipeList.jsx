import { Box, UnorderedList } from '@chakra-ui/react';
import { RecipeCard } from './ui/RecipeCard';
import { data } from '../utils/data';

export const RecipeList = ({ listItem, clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  const breakpoints = { base: '62em', lg: '30em' };
  // const { onOpen } = useDisclosure();

  return (
    <UnorderedList
      marginRight={{ lg: 0, base: 3 }}
      styleType={''}
      display={'inline-flex'}
      flexWrap={'wrap'}
      gap={10}
      w={'70vw'}
      justifyContent={'center'}
      alignContent={'center'}
    > {listItem.map((item) => (
      < RecipeCard key={item.recipe.label} listItem={item} clickFn={clickFn} />
    ))} </UnorderedList>
  );
}