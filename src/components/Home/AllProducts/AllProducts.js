import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <Container>
            <Typography gutterBottom variant="h3" component="h3" sx={{ mt: 2, textAlign: 'center' }}>
                Our All Products
            </Typography>
            <Grid container spacing={2}>
                {
                    products.map((product, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Price: {product.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description: {product.desc.slice(0, 100)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to={`/purchase/${product._id}`}>
                                        <Button size="small">Buy Now</Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default AllProducts;