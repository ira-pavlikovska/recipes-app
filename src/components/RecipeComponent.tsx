import Button from "@mui/material/Button";
import {RecipeType} from "../models";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {
    recipe: RecipeType
}


const RecipeComponent = ({recipe}: Props) => {

    return (

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div style={{marginTop: 30}}>
                        <img style={{width: 400, height: 400}} src={recipe.imageUrl}/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div style={{marginTop: 30}}>
                        <h3>{recipe.recipeName}</h3>
                    </div>
                    <div>
                        Ingredients:{recipe.ingredients.map(ingredient => (
                        <div>{ingredient.name} - {ingredient.quantity}</div>
                    ))}
                    </div>
                    <div style={{margin: 20}}>Instructions:{recipe.instructions.map(instruction => (
                        <div>{instruction}</div>
                    ))}</div>
                </Grid>
            </Grid>
        </Box>
    );
};
export default RecipeComponent;
