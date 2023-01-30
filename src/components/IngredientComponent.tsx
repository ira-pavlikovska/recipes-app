import Button from "@mui/material/Button";
import {Ingredient} from "../models";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {
    ingredient: Ingredient
}


const IngredientComponent = ({ingredient}: Props) => {

    return (
        <Grid style={{flex: 12, paddingLeft: 120}} container spacing={2} >
            <Grid item xs={5} ><div>{ingredient.name}</div></Grid>
            <Grid item xs={5} ><div>{ingredient.quantity}</div></Grid>
            <Grid item xs={2} >
                <div><Button>x</Button></div>
            </Grid>
        </Grid>
    );
};
export default IngredientComponent;
