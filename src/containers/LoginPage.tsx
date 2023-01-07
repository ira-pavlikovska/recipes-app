import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from "react";
import {login} from "../api"
import {UserTypeResponce, UserType} from "../models";


const InputWrapper = styled('div')({
    padding: 20,
});

const StyledPaper = styled(Paper)(({theme}) => ({
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


function LoginPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userData, setUserData] = useState([]);
    let navigate = useNavigate();

    const usernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const signInHandler = () => {

        login(username, password)
            .then((data: any)=> {
            console.log(JSON.stringify(data))
                navigate('/recipes')
            })
            .catch((error: any)=> {
                console.log("error")
            })
    }



    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{paddingTop: 0}}>
                    <Paper elevation={0} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#ebeef2',
                        alignItems: 'center',
                        minHeight: '100vh'
                    }}>
                        <StyledPaper elevation={3}>
                            <InputWrapper>
                                <h2>Login</h2>
                            </InputWrapper>
                            <InputWrapper style={{paddingTop: 50}}>
                                <TextField
                                    required
                                    tabIndex={1}
                                    label="Username"
                                    value={username}
                                    onChange={usernameHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <TextField
                                    required
                                    tabIndex={2}
                                    label="Password"
                                    value={password}
                                    onChange={passwordHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Button
                                    tabIndex={3}
                                    variant="outlined"
                                    onClick={signInHandler}
                                >
                                    Sign in
                                </Button>
                            </InputWrapper>
                        </StyledPaper>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginPage;
