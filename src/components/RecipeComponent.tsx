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
                <Grid item xs={12} md={4}>
                    <div style={{marginTop: 30}}>
                        <img style={{width: 350, height: 350}} src={recipe.imageUrl}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div style={{marginTop: 30, color: '#1976d2'}}>
                        <h3>{recipe.recipeName}</h3>
                    </div>
                    <div style={{marginTop: 30, textAlign: 'left'}}>
                       <span style={{fontWeight: 'bold'}}> Ingredients:</span>{recipe.ingredients.map(ingredient => (
                        <div>{ingredient.name} - {ingredient.quantity}</div>
                    ))}
                    </div>
                    <div style={{marginTop: 30, textAlign: 'left'}}><span style={{fontWeight: 'bold'}}>Instructions:</span>{recipe.instructions.map(instruction => (
                        <div>{instruction}</div>
                    ))}</div>
                </Grid>
            </Grid>
        </Box>
    );
};
export default RecipeComponent;
