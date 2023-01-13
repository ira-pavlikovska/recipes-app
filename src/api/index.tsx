// @ts-nocheck
// import {UserType} from "../models";

import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';


export function login(username: string, password: string) {
    return axios.post(BASE_URL + 'login',{username, password} )
}
export function getRecipes(userId: number) {
    return axios.get(BASE_URL + 'recipes',{userId} )
}
