import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <Box className="page-not-found">
            <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
                404 Page Not Found
            </Typography>
            <NavLink to='/' style={{ cursor: 'pointer', textDecoration: 'none' }}><Button sx={{ color: 'white' }}>Go to Home</Button></NavLink>
        </Box>
    );
};

export default PageNotFound;