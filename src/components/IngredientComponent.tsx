import Button from "@mui/material/Button";
import {Ingredient, RecipeType} from "../models";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import List from '@mui/material/List';
import {ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type Props = {
    ingredient: Ingredient
}


const IngredientComponent = ({ingredient}: Props) => {

    return (

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} >
                <Grid item xs={4} ><div>{ingredient.name}</div></Grid>
                <Grid item xs={4} ><div>{ingredient.quantity}</div></Grid>
                <Grid item xs={4} >
                    <div><Button>x</Button></div>
                </Grid>
            </Grid>
        </Box>
    );
};
export default IngredientComponent;
