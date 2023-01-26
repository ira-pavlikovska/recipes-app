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

type Props = {
    handleCloseModal: () => void
    open: boolean
}

export default function ModalComponent({handleCloseModal, open}: Props) {
const [recipeName, setRecipeName] = useState('');
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
                                <TextField
                                    placeholder="Recipe name"
                                    style={{ width: 300 }}
                                    minRows={1}
                                    value={recipeName}
                                    onChange={(e)=> setRecipeName(e.target.value)}
                                />

                            </ListItem>
                            <Divider />
                        </Grid>

                        <Grid item xs={12}>
                            <ListItem>
                            <Typography>Ingredients</Typography>
                            <TextField
                                variant="outlined"
                                placeholder="name"
                                value={recipeName}
                                onChange={(e)=> setRecipeName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                placeholder="quantity"
                                value={recipeName}
                                onChange={(e)=> setRecipeName(e.target.value)}
                            />
                            <Button>Add</Button>
                            </ListItem>
                            <Divider />
                        </Grid>

                        <Grid item xs={12}>
                        <ListItem>
                            <Typography>Instructions</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="step"
                                value={recipeName}
                                onChange={(e)=> setRecipeName(e.target.value)}
                            />
                            <Button>Add</Button>
                        </ListItem>
                        </Grid>

                    </List>
                                   </Grid>
            </Box>
        </Modal>

    )
}