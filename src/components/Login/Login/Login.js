import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import loginBg from '../../../images/banner/banner4.jpg';
import './Login.css';
import useAuth from '../../../hooks/useAuth';


const useStyles = makeStyles({
    root: {
        "&:hover": {
            background: '#ff9933',
        }
    }
});

const Login = () => {

    const { user, logIn } = useAuth();

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

    const classes = useStyles();
    return (
        <Container sx={{ mt: 4 }}>
            <Grid container alignItems="stretch" spacing={0}>
                <Grid item xs={12} md={6} sx={{ boxShadow: 2, p: 2 }} className="grid-section make-border-radius">
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

                        </Box>
                    </form>
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
}

export default Login;