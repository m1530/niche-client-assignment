import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Review = () => {

    const [reviews, setReviews] = useState([]);
    // fetch all review
    useEffect(() => {
        fetch('http://localhost:7000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <Box>
            <Navigation />
            <Container>
                <Box>
                    <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px', marginBottom: '40px' }}>
                        Our Reviews
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            reviews.map(review => (
                                <Grid item xs={12} md={4} key={review._id}>
                                    <Paper elevation={3} sx={{ p: 2 }}>
                                        <Typography variant="h4" gutterBottom component="div">
                                            {review.reviewer}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom component="div">
                                            {review.designation}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom >
                                            {review.reviewDesc}
                                        </Typography>
                                        <Rating name="half-rating" defaultValue={Number(review.ratting)} precision={0.5} />
                                        <Typography>{review.ratting}</Typography>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Review;