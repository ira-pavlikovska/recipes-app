import Button from "@mui/material/Button";
import {Ingredient, RecipeType} from "../models";
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import RecipeComponent from "../components/RecipeComponent";
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import { useParams } from 'react-router-dom';
import {getRecipe} from "../api";
import {response} from "express";
// type Props = {
//     recipe: RecipeType,
//     handleDeleteRecipe: (recipe: RecipeType) => void
// }

// {recipe, handleDeleteRecipe}: Props

const RecipePage = () => {
    // const {recipes} = useAppSelector((state: RootState) => state.recipesReducer);
    const [recipe, setRecipe] = useState<RecipeType>();
    const {id } = useParams();
    console.log(id)
    useEffect(() => {
        // API call with id
        if (typeof id === "string") {
            getRecipe(id)
                .then((response: any) => {
                    console.log(response)
                    setRecipe(response.data)
        } )
                .catch((error: any) => console.log(JSON.stringify(error)));
        }

        // .then (setRecipe(response))
    }, [])
    // const recipe = recipes.filter(item => item.recipeId == id)[0]
    console.log(recipe)

    return (

        <RecipeComponent recipe={recipe}/>
    );
};
export default RecipePage;
