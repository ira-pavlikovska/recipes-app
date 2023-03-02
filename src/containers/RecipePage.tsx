import {RecipeType} from "../models";
import React, {useEffect, useState} from "react";
import RecipeComponent from "../components/RecipeComponent";
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import {useNavigate, useParams} from 'react-router-dom';
import {deleteRecipe, getRecipe} from "../api";
import {deleteCurrentRecipe} from "../reducer/recipesReducer";
import {useAppDispatch} from "../hooks/useAppDispatch";

const RecipePage = () => {
    const {recipes} = useAppSelector((state: RootState) => state.recipesReducer);
    const [recipe, setRecipe] = useState<RecipeType>();
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const {id } = useParams();

    const myDelete = (recipe: RecipeType) => {
        deleteRecipe(recipe.recipeId)
            .then(()=> {
                dispatch(deleteCurrentRecipe(recipe.recipeId))
                navigate('/recipes')
            })
            .catch((error:any)=> console.log(JSON.stringify(error)))
           }

    useEffect(() => {
        const rArr = recipes.filter(i => i.recipeId == id)
        const localRecipe = rArr.length > 0 ? rArr[0] : undefined

        if (localRecipe) {
            setRecipe(localRecipe)
        } else {
            // API call with id
            if (typeof id === "string") {
                getRecipe(id)
                    .then((response: any) => {
                        console.log(response)
                        setRecipe(response.data)
                    } )
                    .catch((error: any) => console.log(JSON.stringify(error)));
            }
        }
    }, [recipes])

    return (
        <RecipeComponent recipe={recipe} handleDeleteRecipe={myDelete}/>
    );
};
export default RecipePage;
