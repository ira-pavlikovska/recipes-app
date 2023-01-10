import React from 'react';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import userReducer from '../reducer/userReducer';

function RecipesPage() {
    const {test} = useAppSelector((state: RootState) => state.userReducer);
    console.log(test)
    return (
        <div>
            Recipes {test}
        </div>
    );
}

export default RecipesPage;

