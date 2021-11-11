import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginBg from '../../../images/banner/banner4.jpg';


const useStyles = makeStyles({
    root: {
        "&:hover": {
            background: '#ff9933',
        }
    }
});
const Register = () => {
    const classes = useStyles();

    const { signUpUsingEmail, isLoading, userError, user } = useAuth();

    const history = useHistory();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameOnBlur = e => {
        setName(e.target.value);
    }
    const handleemailOnBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordOnBlur = e => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        const newUser = { name, email, password }
        signUpUsingEmail(newUser.email, newUser.password, newUser.name, history);

        console.log(newUser);
        e.target.reset();
        e.preventDefault();
    }


    return (
        <Container sx={{ mt: 4 }}>
            <Grid container alignItems="stretch" spacing={0}>
                <Grid item xs={12} md={6} sx={{ boxShadow: 2, p: 2 }} className="grid-section make-border-radius">
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created.</Alert>}
                    {userError && <Alert severity="error">{userError}</Alert>}
                    {
                        !isLoading && <form onSubmit={handleRegister}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Sign up your account
                                </Typography>
                                <TextField
                                    sx={{ width: '75%', m: 2, }}
                                    label="Enter Your name"
                                    id="filled-size-small"
                                    variant="filled"
                                    size="small"
                                    name="name"
                                    onBlur={handleNameOnBlur}
                                />
                                <TextField
                                    sx={{ width: '75%', m: 2, }}
                                    label="Enter Your Email"
                                    id="filled-size-small"
                                    variant="filled"
                                    size="small"
                                    name="email"
                                    onBlur={handleemailOnBlur}
                                />
                                <TextField
                                    sx={{ width: '75%', m: 2, }}
                                    label="Enter Your Password"
                                    id="filled-size-small"
                                    variant="filled"
                                    size="small"
                                    name="password"
                                    onBlur={handlePasswordOnBlur}
                                />
                                <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold' }} type="submit" variant="contained" className={classes.root}>Register</Button>

                                <NavLink
                                    style={{ textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}
                                    to="/login">
                                    Already User? Please Signin
                                </NavLink>

                            </Box>
                        </form>
                    }
                </Grid>
                <Grid item xs={12} md={6}
                    className="grid-section"
                >

                    <Box className="image-text" style={{ height: '100%' }}>
                        <img src={loginBg} className="login-img" alt="login-img" />
                        {/* <Typography className="text-header" sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                            Welcome to <br />Topcar
                        </Typography> */}
                        <h1 className="text-header">Welcome to <br />Topcar</h1>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;