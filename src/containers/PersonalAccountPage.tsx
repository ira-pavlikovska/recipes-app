import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import {useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {UserType} from "../models";
import {updateUserInfo} from "../api"
import {updateCurrentRecipe} from "../reducer/recipesReducer";
import {updateCurrentUserInfo} from "../reducer/userReducer";

const InputWrapper = styled('div')({
    padding: 20,
});

const StyledList = styled(List)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 650,
    height: 600,
    justifyContent: 'center',
    display: 'block',
    alignItems: 'center'

}));


function PersonalAccountPage() {
    const dispatch = useAppDispatch();
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    console.log(user)

    const [updatedUser, setUpdatedUser] = useState<UserType>(user);


    const handleEdit = () => {
        setShowEdit(true);
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

                    <List style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#ebeef2',
                        alignItems: 'center',
                        minHeight: '100vh'
                    }}>

                        <StyledList>
                                <div style={{fontSize: 25, display: 'inline'}}>Personal info</div>
                                <IconButton
                                    style={{ display: 'inline', marginLeft: 20}}
                                    onClick={handleEdit}>
                                    <EditIcon/>
                                </IconButton>

                            {
                                (!showEdit) ?
                                    <>
                                        <ListItem style={{paddingTop: 20}}>
                                            <ListItemText>First name</ListItemText>
                                            <ListItemText>{user.firstName}</ListItemText>
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
                                            <ListItemText>Last name</ListItemText>
                                            <ListItemText>{user.lastName}</ListItemText>
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
                                            <ListItemText>Password</ListItemText>
                                            <ListItemText>{user.password}</ListItemText>
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
                                            <ListItemText>Email</ListItemText>
                                            <ListItemText>{user.email}</ListItemText>
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
                                            <ListItemText>Username</ListItemText>
                                            <ListItemText>{user.username}</ListItemText>
                                        </ListItem>
                                    </>

                                    :
                                    <>
                                        <ListItem style={{paddingTop: 20}}>
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
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
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
                                        </ListItem>
                                        <ListItem style={{paddingTop: 20}}>
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
                                        </ListItem>
                                    </>
                            }

                            <Button
                                style={{marginTop: 50}}
                                onClick={handleSave}>
                                Save
                            </Button>
                            <Button
                                style={{marginTop: 50}}
                                onClick={handleSave}>
                                Cancel
                            </Button>
                        </StyledList>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PersonalAccountPage;
