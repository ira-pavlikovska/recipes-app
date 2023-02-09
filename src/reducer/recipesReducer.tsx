import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RecipeType} from "../models";

interface recipesState {
    recipes: RecipeType[]
}

const initialState = {
    recipes: []

} as recipesState

export const recipesSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setRecipes: (state, action: PayloadAction<RecipeType[]>) => {
            state.recipes = action.payload
        },
        addNewRecipe: (state, action: PayloadAction<RecipeType>) => {
            const recipe = action.payload
            state.recipes = [...state.recipes, recipe]
        },
        updateCurrentRecipe: (state, action: PayloadAction<RecipeType>) => {
            const recipe = action.payload
            console.log(recipe);
            let updatedRecipesArray = state.recipes;
            let idx = updatedRecipesArray.findIndex((item) => item.recipeId === recipe.recipeId)
            updatedRecipesArray.splice(idx, 1, recipe)
            state.recipes = [...updatedRecipesArray]
            console.log(state.recipes);
        },
        deleteCurrentRecipe: (state, action: PayloadAction<string>) => {
            const recipeId = action.payload
            // console.log(recipe.recipeId);
            state.recipes = state.recipes.filter(
                (item: RecipeType) => item.recipeId !== recipeId
            );
        },

    }
})

export const {
    setRecipes,
    addNewRecipe,
    updateCurrentRecipe,
    deleteCurrentRecipe
} = recipesSlice.actions;

export default recipesSlice.reducer;
