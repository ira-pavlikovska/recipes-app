import Button from "@mui/material/Button";
import {Ingredient, RecipeType} from "../models";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import AddRecipeModal from "./AddRecipeModal";

type Props = {
    recipe?: RecipeType,
    handleDeleteRecipe?: (recipe: RecipeType) => void
}


const RecipeComponent = ({recipe, handleDeleteRecipe}: Props) => {

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    if (!recipe) {
        return <div></div>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div style={{marginTop: 30, marginLeft: 30}}>
                        <img style={{width: 350, height: 350}}
                             src={recipe.imageUrl ? recipe.imageUrl : 'https://via.placeholder.com/350x350?text=Yammy!'}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div style={{marginTop: 30, color: '#1976d2', fontSize: 20}}>
                        <div data-testid={'recipe-name'}>{recipe.recipeName}</div>
                        {handleDeleteRecipe && (
                            <Button
                                data-testid={'delete-button'}
                                variant="outlined"
                                style={{float: 'right', marginRight: 20, marginTop: 20}}
                                onClick={()=> handleDeleteRecipe(recipe)}
                            >Delete</Button>
                        )}
                        <Button
                            data-testid={'edit-button'}
                            variant="outlined"
                            style={{float: 'right', marginRight: 20, marginTop: 20}}
                            onClick={handleOpenModal}
                        >Edit</Button>

                    </div>
                    <div style={{marginTop: 30, textAlign: 'left', color: 'rgba(0, 0, 0, 0.6)'}}>
                        <span style={{fontWeight: 'bold'}}> Ingredients:</span>{recipe.ingredients.map(ingredient => (
                        <div>{ingredient.name} - {ingredient.quantity}</div>
                    ))}
                    </div>
                    <div style={{marginTop: 30, textAlign: 'left', color: 'rgba(0, 0, 0, 0.6)'}}><span
                        style={{fontWeight: 'bold'}}>Instructions:</span>{recipe.instructions.map(instruction => (
                        <div>{instruction}</div>
                    ))}</div>
                    <AddRecipeModal recipe={recipe} handleCloseModal={handleCloseModal} open={openModal}/>
                </Grid>
            </Grid>
        </Box>
    );
};
export default RecipeComponent;
