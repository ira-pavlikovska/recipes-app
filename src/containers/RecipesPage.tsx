import React from 'react';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import userReducer from '../reducer/userReducer';

function RecipesPage() {
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    console.log(`recipes ${JSON.stringify(user)}`)
    return (
        <div>
            Recipes{user.firstName}
        </div>
    );
}

export default RecipesPage;

