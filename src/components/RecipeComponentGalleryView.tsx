import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {RecipeType} from "../models";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type Props = {
    recipes: RecipeType[],
}

export default function RecipeComponentGalleryView({recipes}: Props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <ImageList sx={{ width: 1405, height: 600 }}  cols={3}  >
                            {
                                recipes.map((recipe:RecipeType ) =>
                                    (
                                        <ImageListItem key={recipe.imageUrl}>
                                            <img
                                                src={`${recipe.imageUrl}?w=465&fit=crop&auto=format`}
                                                srcSet={`${recipe.imageUrl}?w=465&fit=crop&auto=format&dpr=2 2x`}
                                                alt={recipe.recipeName}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={recipe.recipeName}
                                                position="below"
                                            />
                                        </ImageListItem>
                                    ))
                            }
                        </ImageList>



                </Grid>

            </Grid>

        </Box>

                )}
