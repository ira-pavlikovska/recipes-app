import React from 'react';
import {styled} from '@mui/material/styles';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import userReducer from '../reducer/userReducer';
import Header from "../components/Header";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function RecipesPage() {
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    console.log(`recipes ${JSON.stringify(user)}`)


    const StyledPaper = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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
                        <h4>My Recipes</h4>
<div>
{/*    {*/}
{/*    recipes.map(recipe => (*/}
{/*        <RecipeComponent key={recipe.id} recipe={recipe}*/}
{/*                    />*/}
{/*    ))*/}
{/*}*/}
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

