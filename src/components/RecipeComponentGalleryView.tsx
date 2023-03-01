import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {RecipeType} from "../models";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useNavigate} from "react-router-dom";

type Props = {
    recipes: RecipeType[],
}

export default function RecipeComponentGalleryView({recipes}: Props) {
    let navigate = useNavigate();
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <ImageList  cols={4} >
                            {
                                recipes.map((recipe:RecipeType ) =>
                                    (
                                        <ImageListItem key={recipe.imageUrl}>
                                            <img
                                                src={`${recipe.imageUrl}?w=250&fit=crop&auto=format`}
                                                style={{width: 350, height: 350}}
                                                srcSet={`${recipe.imageUrl}?w=250&fit=crop&auto=format&dpr=2 2x`}
                                                alt={recipe.recipeName}
                                                loading="lazy"
                                                onClick={()=> {
                                                    console.log(' go to recipe component')
                                                    navigate(`/recipe/id=${recipe.recipeId}`)
                                                }}
                                            />
                                            <div style={{width: 300, height: 70}}>
                                                <ImageListItemBar
                                                    title={recipe.recipeName}
                                                    position="below"
                                                />
                                            </div>
                                        </ImageListItem>
                                    ))
                            }
                        </ImageList>



                </Grid>

            </Grid>

        </Box>

                )}
