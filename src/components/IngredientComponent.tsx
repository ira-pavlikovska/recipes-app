import Button from "@mui/material/Button";
import {Ingredient} from "../models";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {
    ingredient: Ingredient,
    handleDeleteIngredient: (ingredient: Ingredient) => void
}


const IngredientComponent = ({ingredient, handleDeleteIngredient}: Props) => {


    return (
        <Grid style={{flex: 12, paddingLeft: 120}} container spacing={2}>
            <Grid item xs={5}>
                <div data-testid={'ingredient-name'}>{ingredient.name}</div>
            </Grid>
            <Grid item xs={5}>
                <div data-testid={'ingredient-quantity'}>{ingredient.quantity}</div>
            </Grid>
            <Grid item xs={2}>
                <div><Button
                    style={{marginLeft: 17}}
                    onClick={() => handleDeleteIngredient(ingredient)}
                >x</Button></div>
            </Grid>
        </Grid>
    );
};
export default IngredientComponent;
