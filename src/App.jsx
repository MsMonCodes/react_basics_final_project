import { useState } from 'react';
import { RecipeList } from './components/RecipeList';
import { Card, Stack } from '@chakra-ui/react';
import { FullRecipePage } from './pages/FullRecipePage';
import { RecipeSearchPage } from './pages/RecipeSearchPage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    selectedRecipe
      ? <FullRecipePage recipeSelection={selectedRecipe} clickFn={setSelectedRecipe} />
      : <RecipeSearchPage clickFn={setSelectedRecipe} />
  );
}
