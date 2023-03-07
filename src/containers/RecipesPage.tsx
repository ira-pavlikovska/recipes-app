import React, {useState} from 'react';
import {useAppSelector} from '../hooks/useAppSelector';
import {RootState} from "../store";
import {useEffect} from "react";
import {deleteRecipe, getRecipes} from "../api";
import {RecipeType} from "../models";
import Header from "../components/Header";
import RecipeComponent from "../components/RecipeComponent";
import RecipeComponentGalleryView from "../components/RecipeComponentGalleryView";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";
import {setRecipes, updateCurrentRecipe, deleteCurrentRecipe} from "../reducer/recipesReducer";
import {useAppDispatch} from "../hooks/useAppDispatch";
import AddRecipeModal from '../components/AddRecipeModal';
import {
    MyRecipes,
    StyledHeader,
    StyledButton,
    StyledContainer,
    ViewLabel,
    GalleryIcon,
    ListIcon,
    StyledPaper
} from "./RecipesPage.styles";

function RecipesPage() {
    const [keyword, setKeyword] = useState<string>('');
    const [openModal, setOpenModal] = React.useState(false);
    const [galleryMode, setGalleryMode] = React.useState(true);
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    const {recipes} = useAppSelector((state: RootState) => state.recipesReducer);
    const userId = user.id
    if (!userId) {
        navigate('/')
    }

    useEffect(() => {
        getRecipes(userId, keyword)
            .then((response: any) => dispatch(setRecipes(response.data)))
            .catch((error: any) => console.log(JSON.stringify(error)));
    }, [keyword]);

    // console.log(`recipes ${JSON.stringify(recipes)}`)

    const handleAddRecipe = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleDeleteRecipe = (res: RecipeType) => {
        deleteRecipe(res.recipeId)
            .then((resp) => {
                if (resp.status === 200) {
                    dispatch(deleteCurrentRecipe(res.recipeId))
                } else {
                    console.log('Recipe did not delete from Server')
                }
            })
            .catch((error: any) => console.log(JSON.stringify(error)))

        console.log('delete')
    }

    const haveRecipes = recipes.length > 0;

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledHeader data-testid={'header-element'}><Header keyword={keyword} setKeyword={setKeyword}/></StyledHeader>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3} style={{height: !haveRecipes ? 300 : ''}}>
                        <Grid item xs={12}>
                            <StyledContainer>
                                <MyRecipes data-testid={'title-element'}>My Recipes</MyRecipes>
                                <ViewLabel>View</ViewLabel>
                                <GalleryIcon
                                    onClick={() => setGalleryMode(true)}
                                />
                                <ListIcon
                                    data-testid={'list-mode-icon'}
                                    onClick={() => setGalleryMode(false)}
                                />
                                <StyledButton
                                    variant="outlined"
                                    data-testid={'add-recipe-button'}
                                    onClick={handleAddRecipe}
                                >
                                    Add new Recipe
                                </StyledButton>
                            </StyledContainer>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                haveRecipes && galleryMode ? (
                                        <div>
                                            <RecipeComponentGalleryView recipes={recipes}/>
                                        </div>
                                    ) :
                                    (
                                        recipes.map((recipe: RecipeType) => (
                                            <div>
                                                <RecipeComponent recipe={recipe}
                                                                 handleDeleteRecipe={handleDeleteRecipe}/>
                                            </div>
                                        ))

                                    )
                            }
                            {
                                !haveRecipes ? `0 results for ${keyword}` : ''
                            }
                            <AddRecipeModal handleCloseModal={handleCloseModal} open={openModal}/>
                        </Grid>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RecipesPage;

