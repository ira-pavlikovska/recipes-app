import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../hooks/useAppDispatch'
import {setUser} from "../reducer/userReducer";
import {ChangeEvent, useState} from "react";
import {login} from "../api"
import {InputWrapper, InputWrapperUsername, PaperWrapper, ErrorMessage} from "./LoginPage.styles";


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


function CreateAccountPage() {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    let navigate = useNavigate();

    const usernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    // const createAccountHandler = () => {
    //
    //     createAccount(username, password, email)
    //         .then((response: any) => {
    //             // console.log(JSON.stringify(response))
    //             dispatch(setUser(response.data))
    //             navigate('/recipes')
    //         })
    //         .catch((error: any) => {
    //             console.log("error")
    //         })
    // }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{paddingTop: 0}}>
                    <PaperWrapper elevation={0}>
                        <StyledPaper elevation={3}>
                            <InputWrapper>
                                <h2>Create a new account</h2>
                            </InputWrapper>
                            <InputWrapperUsername>
                                <TextField
                                    sx={{width: 227}}
                                    variant="outlined"
                                    tabIndex={1}
                                    label="Username"
                                    value={username}
                                    onChange={usernameHandler}
                                />
                            </InputWrapperUsername>
                            <InputWrapper>
                                <TextField
                                    sx={{width: 227}}
                                    variant="outlined"
                                    tabIndex={2}
                                    label="Password"
                                    value={password}
                                    onChange={passwordHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <TextField
                                    sx={{width: 227}}
                                    variant="outlined"
                                    tabIndex={2}
                                    label="Email"
                                    value={email}
                                    onChange={emailHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Button
                                    tabIndex={3}
                                    variant="outlined"
                                    // onClick={createAccountHandler}
                                >
                                    Create account
                                </Button>
                            </InputWrapper>
                        </StyledPaper>
                    </PaperWrapper>
                </Grid>
            </Grid>
        </Box>
    )
        ;
}

export default CreateAccountPage;
