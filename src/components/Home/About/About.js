import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './About.css';
import AboutData from './AboutData';
const About = () => {
    return (
        <Box>
            <Navigation />
            <AboutData />
            <Footer></Footer>
        </Box>
    );
};

export default About;