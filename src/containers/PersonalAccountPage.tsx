import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";


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
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    console.log(user)


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
                            <InputWrapper>
                                <h2>Personal info</h2>
                            </InputWrapper>

                            <ListItem style={{paddingTop: 20}}>
                                <ListItemText>First name goes here</ListItemText>
                                <IconButton
                                    onClick={() => console.log('clicked Edit first name ')}>
                                    <EditIcon/>
                                </IconButton>
                                {/*<TextField*/}
                                {/*    required*/}
                                {/*    tabIndex={1}*/}
                                {/*    label="First name"*/}
                                {/*    value={firstName}*/}
                                {/*    onChange={firstNameHandler}*/}
                                {/*/>*/}
                            </ListItem>
                            <ListItem style={{paddingTop: 20}}>
                                <ListItemText>Last name goes here</ListItemText>
                                <IconButton
                                    onClick={() => console.log('clicked Edit last name ')}>
                                    <EditIcon/>
                                </IconButton>
                            </ListItem>
                            <ListItem style={{paddingTop: 20}}>
                                <ListItemText>Password goes here</ListItemText>
                                <IconButton
                                    onClick={() => console.log('clicked Edit password ')}>
                                    <EditIcon/>
                                </IconButton>
                            </ListItem>
                            <ListItem style={{paddingTop: 20}}>
                                <ListItemText>Email goes here</ListItemText>
                            </ListItem>
                            <ListItem style={{paddingTop: 20}}>
                                <ListItemText>Username goes here</ListItemText>
                            </ListItem>
                        </StyledList>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PersonalAccountPage;
