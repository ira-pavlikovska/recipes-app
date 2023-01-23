import React from 'react';
import {styled} from '@mui/material/styles';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import userReducer from '../reducer/userReducer';
import {useEffect, useState} from "react";
import {getRecipes} from "../api";
import {RecipeType} from "../models";
import Header from "../components/Header";
import RecipeComponent from "../components/RecipeComponent";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function RecipesPage() {
    const [recipes, setRecipes] = useState <RecipeType[]>([])
    const {user} = useAppSelector((state: RootState) => state.userReducer);

    const userId = user.userId

    useEffect(() => {
        getRecipes(userId)
            .then((response: any) =>
                setRecipes(response.data)
            )
            .catch((error: any) => console.log(JSON.stringify(error)));
    }, []);

    console.log(`recipes ${JSON.stringify(recipes)}`)

    const StyledPaper = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const haveRecipes = recipes.length > 0;

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledPaper elevation={3} style={{paddingTop: 30}}>
                        <Header />
                    </StyledPaper>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                        <h2 style={{paddingBottom: 30}}>My Recipes</h2>
<div>
    {
        haveRecipes? recipes.map((recipe,index) => (
        <div key ={index}> <RecipeComponent  recipe={recipe}/> </div>
        )): ''
}
</div>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RecipesPage;

