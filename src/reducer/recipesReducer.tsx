import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RecipeType} from "../models";

interface recipesState {
    recipes: RecipeType[]
}
const initialState = {
    recipes:[]

} as recipesState

export const recipesSlice = createSlice({
    name:'recipe',
    initialState,
    reducers: {
        setRecipes:(state, action:PayloadAction <RecipeType[]>) => {
            state.recipes = action.payload
        },

    }


})

export const {
    setRecipes
} = recipesSlice.actions;

export default recipesSlice.reducer;
