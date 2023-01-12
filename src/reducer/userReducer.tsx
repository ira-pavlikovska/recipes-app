import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserType} from "../models";

interface userState {
    user: UserType
    // test: string
}
const initialState = {
    user:
        {
            // userId: 76,
            // username: 'bob',
            // firstName: 'Bob',
            // password: 'hhg',
            // token: 'ggg',

        }
    // test: 'hi Mister !!! :)'
} as userState

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser:(state, action) => {
            const user = action.payload
            console.log(`reducer ${JSON.stringify(user)}`)
            return {...state,
                user: {userId: user.id, username: user.username, firstName: user.firstName, password: user.password, token: user.token}
            }
        },

    }


})

export const {
    setUser
   } = userSlice.actions;

export default userSlice.reducer;
