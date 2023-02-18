// @ts-nocheck
// import {UserType} from "../models";

import axios from 'axios';
import {RecipeType} from "../models";

const BASE_URL = 'http://localhost:4000/';


export function login(username: string, password: string) {
    return axios.post(BASE_URL + 'login',{username, password} )
}

export function getRecipes(userId: number, keyword: string) {
    return axios.get(BASE_URL + `recipes?userId=${userId}&keyword=${keyword}` )
}

export function addRecipe(recipe: RecipeType) {
    return axios.put(BASE_URL + 'recipe',recipe )
}

export function updateRecipe(recipe: RecipeType) {
    return axios.patch(BASE_URL + 'recipe',recipe )
}

export function deleteRecipe(recipeId: string) {
    return axios.delete(BASE_URL + `recipe/${recipeId}` )
}
export function updateUserInfo(user: UserType) {
    return axios.patch(BASE_URL + 'user', user )
}
