import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    // fetch all products from useProducts hook
    const [products] = useProducts();
    return (
        <div>
            <Container>
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} style={{ marginTop: '60px', marginBottom: '40px' }}>
                    Features Products
                </Typography>
                <Grid container spacing={2}>
                    {
                        // pass props in product component
                        products.slice(0, 6).map((product) => (
                            <Grid item xs={12} md={4} key={product._id}>
                                <Product product={product}></Product>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container >
        </div >
    );
};

export default Products;