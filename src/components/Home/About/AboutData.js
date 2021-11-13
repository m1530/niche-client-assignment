import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutData = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography className="about" id="latestNews" variant="h3" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px', marginBottom: '40px' }}>
                    About us
                </Typography>

                <Typography variant="h5" gutterBottom>
                    Who are we?
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Hello, and welcome to Auto Mart.com! We're proud of the hard work we do, both for car shoppers and with the good people of the automotive industry. If you found your way to this page, you want to know more about us. Whether you're a first-time visitor, a frequent site user, a job seeker or a journalist working on a story, we hope you'll find what you're looking for. So, poke around and have fun getting to know us better — and, we'd love to hear from you too!s
                </Typography>
                <Typography variant="body2" gutterBottom>
                    How is it possible that a paperback newsstand publication from the 1960s grew into one of the most beloved and well-known automotive resources of the 21st century? Sure, we've got great data, reviews and advice, but our most cherished assets are our enthusiastic employees and progressive corporate culture.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutData;