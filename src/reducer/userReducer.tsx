import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
    // user: userT[],
    test: string
}
const initialState = {
    // user:
        // {
        //     product: {
        //         id: 1,
        //         category: 'shampoo',
        //         name: 'Aveda',
        //         price: 5.99,
        //         description: 'scalp balancing shampoo'
        //     },
        //     quantity: 3
        // }

    test: 'hi Mister !!! :)'
} as userState

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        // userLogin:

    }


})

export const {
    // userLogin,
   } = userSlice.actions;

export default userSlice.reducer;
