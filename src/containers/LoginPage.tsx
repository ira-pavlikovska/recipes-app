import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../hooks/useAppDispatch'
import { setUser } from "../reducer/userReducer";
import {ChangeEvent, useState} from "react";
import {login} from "../api"
import {InputWrapper, InputWrapperUsername, PaperWrapper} from "./LoginPage.styles";


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
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    let navigate = useNavigate();

    const usernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleErrors = (data:any) => {
        console.log(data)
        if(data.data.error === true){
            setError(data.data.errorText)
            return true
        }
        return false
    }

    const signInHandler = () => {

        login(username, password)
            .then((response: any)=> {
            console.log(JSON.stringify(response))
                if(handleErrors(response)) return

                localStorage.setItem('token', response.data.token)
                dispatch(setUser(response.data))
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
                    <PaperWrapper elevation={0}>
                        <StyledPaper elevation={3}>
                            <InputWrapper>
                                <h2>Login</h2>
                            </InputWrapper>
                            <InputWrapperUsername>
                                <TextField
                                    required
                                    tabIndex={1}
                                    label="Username"
                                    value={username}
                                    onChange={usernameHandler}
                                    data-testid={'username-input'}
                                />
                            </InputWrapperUsername>
                            <InputWrapper>
                                <TextField
                                    required
                                    tabIndex={2}
                                    label="Password"
                                    value={password}
                                    onChange={passwordHandler}
                                    data-testid={'password-input'}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Button
                                    tabIndex={3}
                                    variant="outlined"
                                    onClick={signInHandler}
                                    data-testid={'login-button'}
                                >
                                    Sign in
                                </Button>
                            </InputWrapper>
                            <InputWrapper>
                                {error && (
                                    <div data-testid={'error-message'}> {error}</div>
                                )}
                            </InputWrapper>
                        </StyledPaper>
                    </PaperWrapper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginPage;
