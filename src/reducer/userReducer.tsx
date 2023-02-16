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
                user: {id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, password: user.password, email: user.email, token: user.token}
            }
        },
        updateCurrentFirstName: (state, action) => {
            const user = action.payload
            state.user = user
        }

    }


})

export const {
    setUser,
    updateCurrentFirstName
   } = userSlice.actions;

export default userSlice.reducer;
