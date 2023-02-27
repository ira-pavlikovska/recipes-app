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
                                                onClick={()=> console.log(' go to recipe component')}
                                            />
                                            <div style={{width: 350, height: 50}}>
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
