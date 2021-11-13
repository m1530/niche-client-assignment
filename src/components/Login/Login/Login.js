import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import loginBg from '../../../images/banner/banner4.jpg';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import google from '../../../images/login/google.png';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const useStyles = makeStyles({
    root: {
        "&:hover": {
            background: '#ff9933',
        }
    }
});

const Login = () => {
    // get all auth option from useAuth
    const { googleSignIn, logIn, isLoading, user, userError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        const newUser = { email, password };
        logIn(newUser.email, newUser.password, location, history);
        e.target.reset();
        e.preventDefault();
    }

    const googleLogin = () => {
        googleSignIn(location, history)
    }

    const classes = useStyles();
    return (
        <Box>
            <Navigation />
            <Container sx={{ mt: 4 }}>
                <Grid container alignItems="stretch" spacing={0}>
                    <Grid item xs={12} md={6} sx={{ boxShadow: 2, p: 2 }} className="grid-section make-border-radius">
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created.</Alert>}
                        {userError && <Alert severity="error">{userError}</Alert>}
                        {/* user login from */}
                        <form onSubmit={handleLogin}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Sign into your account
                                </Typography>
                                <TextField
                                    sx={{ width: '75%', m: 2, }}
                                    label="Enter Your Email"
                                    id="filled-size-small"
                                    variant="filled"
                                    size="small"
                                    name="email"
                                    onBlur={handleEmail}
                                />
                                <TextField
                                    sx={{ width: '75%', m: 2, }}
                                    label="Enter Your Password"
                                    id="filled-size-small"
                                    variant="filled"
                                    size="small"
                                    name="password"
                                    onBlur={handlePassword}
                                />
                                <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold' }} type="submit" variant="contained" className={classes.root}>Log in</Button>

                                <NavLink
                                    style={{ textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}
                                    to="/register">
                                    New User? Please Register
                                </NavLink>
                                {/* google log in */}
                                <Button variant="outlined" style={{ color: 'black', marginTop: '20px' }} size="small" onClick={googleLogin}>
                                    <img
                                        width="26px"
                                        src={google}
                                        alt="github-icon"
                                        style={{ marginRight: '10px' }}
                                    /> Sign in with Google</Button>
                            </Box>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}
                        className="grid-section"
                    >

                        <Box className="image-text" style={{ height: '100%' }}>
                            <img src={loginBg} className="login-img" alt="login-img" />
                            <h1 className="text-header">Welcome to <br />Auto Mart</h1>
                        </Box>

                    </Grid>
                </Grid>
            </Container >
            <Footer></Footer>
        </Box>
    );
}

export default Login;