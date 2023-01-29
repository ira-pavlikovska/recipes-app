// @ts-nocheck
import React from 'react';
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize"
import TextField from "@mui/material/TextField"
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import {ListItem} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {RecipeType, Ingredient} from "../models";
import RecipeComponent from "./RecipeComponent";

type Props = {
    handleCloseModal: () => void
    open: boolean
}

export default function ModalComponent({handleCloseModal, open}: Props) {
    const [recipeName, setRecipeName] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [instructionStep, setInstructionStep] = useState('');
    const [ingredientObj, setIngredientObj] = useState([]);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const styleDivider = {
        width: '100%',
        maxWidth: 1000,
        bgcolor: 'background.paper',
    };

const handleAddNewIngredient = (name:string, quantity:number) => {
    setIngredientObj([
        ...ingredientObj,
        {
            name,
            quantity
        }
    ])
    setIngredientName('');
    setIngredientQuantity('');
}
    const haveIngredients = ingredientObj.length > 0;
    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Grid container spacing={2}>
                    <List sx={styleDivider}>
                        <Grid item xs={12}>
                            <ListItem>
                                <Typography>Recipe name</Typography>
                                <TextField
                                    placeholder="add recipe name here"
                                    style={{width: 300, marginLeft: 16}}
                                    minRows={1}
                                    value={recipeName}
                                    onChange={(e) => setRecipeName(e.target.value)}
                                />

                            </ListItem>
                            <Divider/>
                        </Grid>

                        <Grid item xs={12}>
                            <ListItem>
                                <Typography>Ingredients</Typography>
                                <TextField
                                    variant="outlined"
                                    placeholder="name"
                                    style={{marginLeft: 30}}
                                    value={ingredientName}
                                    onChange={(e) => setIngredientName(e.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    placeholder="quantity"
                                    value={ingredientQuantity}
                                    style={{marginLeft: 30}}
                                    onChange={(e) => setIngredientQuantity(e.target.value)}
                                />
                                <Button
                                    variant="outlined"
                                    style={{marginLeft: 30}}
                                    onClick={()=> handleAddNewIngredient(ingredientName,ingredientQuantity)}
                                >Add</Button>

                            </ListItem>

                            {
                                haveIngredients && (
                                    ingredientObj.map((ingredient: Ingredient) => (
                                        <div>{ingredient.name} - {ingredient.quantity} </div>
                                    ))
                                )
                            }

                            <Divider/>
                        </Grid>

                        <Grid item xs={12}>
                            <ListItem>
                                <Typography>Instructions</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="step"
                                    value={instructionStep}
                                    style={{marginLeft: 27}}
                                    onChange={(e) => setInstructionStep(e.target.value)}
                                />
                                <Button
                                    variant="outlined"
                                    style={{marginLeft: 30}}
                                >Add</Button>
                            </ListItem>
                            <Divider/>
                        </Grid>

                        <Grid item xs={12}>
                            <ListItem style={{justifyContent: 'right'}}>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained">Cancel</Button>
                                    <Button variant="contained">Save</Button>
                                </Stack>
                            </ListItem>
                        </Grid>
                    </List>
                </Grid>
            </Box>
        </Modal>

    )
}
