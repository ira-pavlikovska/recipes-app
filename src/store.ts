import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
import recipesReducer from './reducer/recipesReducer';
export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        recipesReducer: recipesReducer,
    }

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
