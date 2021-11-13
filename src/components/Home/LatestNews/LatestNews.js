import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useNews from '../../../hooks/useNews';

const LatestNews = () => {
    // fetch all new from useNews hook
    const [newses] = useNews();

    return (
        <Box>
            <Container>
                <Typography id="latestNews" variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px', marginBottom: '40px' }}>
                    Latest News
                </Typography>
                <Grid container spacing={2}>
                    {
                        // display all news in card
                        newses.map((news) => (
                            <Grid item xs={12} md={4} key={news._id}>
                                <Paper elevation={3} sx={{ p: 2 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                                            <img src={news.img} alt="news-img" style={{ width: '75%', borderRadius: '10px' }} />
                                        </Grid>
                                        <Grid item xs={12} md={8} >
                                            <Typography variant="h6" gutterBottom component="div">
                                                {news?.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {news?.date}
                                            </Typography>
                                            <Link to={`/news/${news?._id}`} style={{ textDecoration: 'none' }}>Read more</Link>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default LatestNews;