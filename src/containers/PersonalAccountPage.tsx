import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import {useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {UserType} from "../models";
import {updateUserInfo} from "../api"
import {updateCurrentUserInfo} from "../reducer/userReducer";
import {
    ListWrapper,
    LabelStyled,
    IconButtonStyled,
    ListItemStyled,
    ListItemEditStyled,
    ListItemButtons,
    StyledList
} from "./PersonalAccountPage.styles";


function PersonalAccountPage() {
    const dispatch = useAppDispatch();
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    console.log(user)

    const [updatedUser, setUpdatedUser] = useState<UserType>(user);


    const handleEdit = () => {
        setShowEdit(true);
    }

    const handleCancel = () => {
        setShowEdit(false);
    }


    const handleSave = () => {
        updateUserInfo(
            updatedUser
        )
            .then((response: any) => {
                console.log(JSON.stringify(response))
                dispatch(updateCurrentUserInfo(response.data))

            })
            .catch((error: any) => console.log("error")
            )
        setShowEdit(false);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{paddingTop: 0}}>
                    <ListWrapper>
                        <StyledList>
                            <LabelStyled>Personal info</LabelStyled>
                            <IconButtonStyled
                                onClick={handleEdit}>
                                <EditIcon/>
                            </IconButtonStyled>
                            {
                                (!showEdit) ?
                                    <>
                                        <ListItemStyled>
                                            <ListItemText>First name</ListItemText>
                                            <ListItemText>{user.firstName}</ListItemText>
                                        </ListItemStyled>
                                        <ListItemStyled>
                                            <ListItemText>Last name</ListItemText>
                                            <ListItemText>{user.lastName}</ListItemText>
                                        </ListItemStyled>
                                        <ListItemStyled>
                                            <ListItemText>Password</ListItemText>
                                            <ListItemText>{user.password}</ListItemText>
                                        </ListItemStyled>
                                        <ListItemStyled>
                                            <ListItemText>Email</ListItemText>
                                            <ListItemText>{user.email}</ListItemText>
                                        </ListItemStyled>
                                        <ListItemStyled>
                                            <ListItemText>Username</ListItemText>
                                            <ListItemText>{user.username}</ListItemText>
                                        </ListItemStyled>
                                    </>
                                    :
                                    <>
                                        <ListItemEditStyled>
                                            <ListItemText>First name</ListItemText>
                                            <TextField
                                                required
                                                tabIndex={1}
                                                label="First name"
                                                value={updatedUser.firstName}
                                                onChange={(e) => {
                                                    setUpdatedUser({...updatedUser, firstName: e.target.value})
                                                }}
                                            />
                                        </ListItemEditStyled>
                                        <ListItemEditStyled>
                                            <ListItemText>Last name</ListItemText>
                                            <TextField
                                                required
                                                tabIndex={1}
                                                label="Last name"
                                                value={updatedUser.lastName}
                                                onChange={(e) => {
                                                    setUpdatedUser({...updatedUser, lastName: e.target.value})
                                                }}
                                            />
                                        </ListItemEditStyled>
                                        <ListItemEditStyled>
                                            <ListItemText>Password</ListItemText>
                                            <TextField
                                                required
                                                tabIndex={1}
                                                label="Password"
                                                value={updatedUser.password}
                                                onChange={(e) => {
                                                    setUpdatedUser({...updatedUser, password: e.target.value})
                                                }}
                                            />
                                        </ListItemEditStyled>
                                        <ListItemButtons>
                                            <Button
                                                onClick={handleSave}>
                                                Save
                                            </Button>
                                            <Button
                                                onClick={handleCancel}>
                                                Cancel
                                            </Button>
                                        </ListItemButtons>
                                    </>
                            }
                        </StyledList>
                    </ListWrapper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PersonalAccountPage;
