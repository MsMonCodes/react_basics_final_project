import { Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { RecipeList } from "../components/RecipeList";
import { data } from "../utils/data";
// import { RecipePage } from "../RecipePage";

export const RecipeSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');
    const handleChange = (event) => {
        return setSearchField(event.target.value);
    }
    const matchedRecipe = data.hits.filter((item) => {
        return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>
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
                    w={'100%'}
                    mt={{ base: 8, lg: 8 }}
                    mb={{ base: 3, lg: 6 }}>
                    <Heading
                        // color={'blackAlpha.800'}
                        size={'2xl'}
                    >Your Recipe App</Heading></Box>
                <Box
                    align={'center'}
                    w={{ lg: '80%', base: '100%', }}
                    // justify={'center'}
                    mt={6}
                    mb={8}>
                    <SearchBar w={'100%'} changeFn={handleChange} />
                    <RecipeList listItem={matchedRecipe} clickFn={clickFn} />
                    <Box mt={10} h={{ base: 10, lg: 20 }} w={{ base: '2xs', lg: '4xl' }}>
                        <Divider orientation='horizontal' /></Box></Box >
            </SimpleGrid >
        </>
    );
}