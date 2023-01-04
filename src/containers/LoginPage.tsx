import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from './../components/Header'

const InputWrapper = styled('div')({
    padding: 20,
});

const StyledPaper = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function LoginPage() {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {/*<Grid item xs={12}>*/}
                {/*    <StyledPaper  style={{paddingTop: 30}}>*/}
                {/*        <Header/>*/}
                {/*    </StyledPaper>*/}
                {/*</Grid>*/}
                <Grid item xs={12} style={{paddingTop: 0}}>
                    <Card style={{display: 'flex', justifyContent:'center',backgroundColor:'#ebeef2', alignItems:'center', minHeight: '100vh'}}>
                        <StyledPaper elevation={3} style={{ width: 650, height: 600, justifyContent:'center', display: 'block', alignItems: 'center'  }}>
                            <InputWrapper>
                               <h2>Login</h2>
                            </InputWrapper>
                            <InputWrapper style={{paddingTop: 50}}>
                                <TextField
                                    required
                                    tabIndex={1}
                                    label="Username"
                                    // value={username}
                                    // onChange={usernameHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <TextField
                                    required
                                    tabIndex={2}
                                    label="Password"
                                    // value={password}
                                    // onChange={passwordHandler}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Button
                                    tabIndex={3}
                                    variant="outlined"
                                    // onClick={signInHandler}
                                >
                                    Sign in
                                </Button>
                            </InputWrapper>
                        </StyledPaper>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginPage;
