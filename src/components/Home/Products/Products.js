import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <Container>
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px' }}>
                    Features Products
                </Typography>
                <Grid container spacing={2}>
                    {
                        products.slice(0, 6).map((product, i) => (
                            <Grid item xs={12} md={4}>
                                <Product key={i} product={product}></Product>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container >
        </div >
    );
};

export default Products;