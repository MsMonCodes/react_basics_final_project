import { Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { RecipeList } from "../components/RecipeList";
import { data } from "../utils/data";
import { ScrollToTopButton } from "../components/BackToTopButton";

export const RecipeSearchPage = ({ clickFn }) => {
    const breakpoints = { base: '62em', lg: '30em' };
    const [searchField, setSearchField] = useState('');
    const handleChange = (event) => {
        return setSearchField(event.target.value);
    }
    const matchedRecipe = data.hits.filter((item) => {
        return item.recipe.label.toLowerCase().includes(searchField.toLowerCase()) || item.recipe.healthLabels.join('').toLowerCase().includes(searchField.toLowerCase())
    })

    window.scrollTo(0, 0);

    return (
        <>
            <SimpleGrid mt={6} overflow-x={0} w={'100%'} justifyItems={'center'} align={'center'} color={'blackAlpha.800'}>
                <Box w={'100%'} mt={{ base: 8, lg: 8 }} mb={{ base: 3, lg: 6 }}>
                    <Heading size={'2xl'}>Your Recipe App</Heading></Box>
                <Box align={'center'} w={{ lg: '80%', base: '100%', }} mt={4} mb={{ base: 0, lg: 10 }}>
                    <SearchBar w={'100%'} changeFn={handleChange} />
                    <RecipeList listItem={matchedRecipe} clickFn={clickFn} /></Box ></SimpleGrid >
            <ScrollToTopButton /></>
    );
}