import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { Card, Stack } from '@chakra-ui/react';
import { RecipePage } from './components/RecipePage';

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(false);
  const clickHandler = () => {
    setSelectedDrink(true);
  }
  // console.log('Please Print');
  return (
    selectedRecipe
      ?
      console.log('fill this in later')
      // < RecipePage />
      :
      < RecipeListPage />
    // <RecipePage />
  );
}
