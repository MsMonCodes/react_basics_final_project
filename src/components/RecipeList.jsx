import { Box, UnorderedList } from '@chakra-ui/react';
import { RecipeCard } from './ui/RecipeCard';

export const RecipeList = ({ listItem, clickFn }) => {
  const breakpoints = { base: '62em', lg: '30em' };

  return (
    <UnorderedList
      marginRight={{ lg: 0, base: 3 }}
      styleType={''}
      display={'inline-flex'}
      flexWrap={'wrap'}
      gap={10}
      w={'70vw'}
      justifyContent={'center'}
      alignContent={'center'}>
      {listItem.map((item) => (
        <RecipeCard key={item.recipe.label} listItem={item} clickFn={clickFn} />
      ))} </UnorderedList>
  );
}