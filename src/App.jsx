import { useState } from 'react';
import { RecipeList } from './components/RecipeList';
import { Card, Stack } from '@chakra-ui/react';
import { FullRecipePage } from './pages/FullRecipePage';
import { RecipeSearchPage } from './pages/RecipeSearchPage';

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();
  // const clickHandler = () => {
  //   setSelectedRecipe(true);
  // }
  // console.log('Please Print');

  return (
    selectedRecipe
      ?
      <FullRecipePage recipeSelection={selectedRecipe} clickFn={setSelectedRecipe} />
      // <RecipeSearchPage clickFn={setSelectedRecipe} />
      :
      <RecipeSearchPage clickFn={setSelectedRecipe} />
    // <FullRecipePage recipeSelection={selectedRecipe} clickFn={setSelectedRecipe} />
  );
}
