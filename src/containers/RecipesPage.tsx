import React from 'react';
import {styled} from '@mui/material/styles';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import {useEffect} from "react";
import {getRecipes} from "../api";
import {RecipeType} from "../models";
import Header from "../components/Header";
import RecipeComponent from "../components/RecipeComponent";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {setRecipes} from "../reducer/recipesReducer";
import {useAppDispatch} from "../hooks/useAppDispatch";
import AddRecipeModal from '../components/AddRecipeModal';

function RecipesPage() {

    const [openModal, setOpenModal] = React.useState(false);
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    const {recipes} = useAppSelector((state: RootState) => state.recipesReducer);
    const userId = user.userId
    if (!userId) {
        navigate('/')
    }

    useEffect(() => {
        getRecipes(userId)
            .then((response: any) => dispatch(setRecipes(response.data)))
            .catch((error: any) => console.log(JSON.stringify(error)));
    }, []);

    console.log(`recipes ${JSON.stringify(recipes)}`)

    const handleAddRecipe = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }

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
                    <div style={{alignItems: 'center'}}><Header/></div>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                        <Grid item xs={12} style={{marginTop: 30}}>
                            <span style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                float: 'left',
                                marginLeft: 30
                            }}>My Recipes</span>
                            <span><Button
                                variant="outlined"
                                style={{float: 'right'}}
                                onClick={handleAddRecipe}
                            >
                                Add new Recipe
                            </Button>
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                haveRecipes && (
                                    recipes.map((recipe: RecipeType) => (
                                        <div><RecipeComponent recipe={recipe}/></div>
                                    ))
                                )
                            }
                            <AddRecipeModal handleCloseModal={handleCloseModal} open={openModal} />
                        </Grid>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RecipesPage;

