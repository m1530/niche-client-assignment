import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const ReadNews = () => {
    const [readNews, setReadNews] = useState({});
    const { newsId } = useParams();

    // fetch single news
    useEffect(() => {
        fetch(`https://nameless-journey-27300.herokuapp.com/news/${newsId}`)
            .then(res => res.json())
            .then(data => setReadNews(data))
    }, [newsId]);
    return (
        <div><Navigation />
            <Container>
                {/* display news */}
                <Typography variant="h3" gutterBottom component="div" style={{ fontWeight: 'bold' }}>
                    News For: {readNews.name}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img src={readNews.img} alt="news-img" style={{ width: '80%' }} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body" gutterBottom >
                            {readNews.desc}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default ReadNews;