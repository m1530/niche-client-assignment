import { Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Paper from '@mui/material/Paper';

const Purchase = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const initialOrderInfo = { userName: user.displayName, email: user.email, phone: '' }

    const [orderData, setOrderData] = useState(initialOrderInfo);

    console.log(products.name);
    // handle submit order
    const handleAddOrder = e => {
        const booking = {
            ...orderData,
            ProductName: products.name,
            ProductPrice: products.price,
            status: "pending",
        }


        console.log(orderData);
        // submit order
        fetch('http://localhost:7000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    // load product by id
    useEffect(() => {
        const url = `http://localhost:7000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId]);


    // take all value from input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        setOrderData(newOrderData);
    }

    return (
        <Container>
            <Typography sx={{ my: 4, textAlign: 'center' }} variant="h4" gutterBottom component="div">
                Complete Your Order
            </Typography>
            {/* Purchase product information */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom component="div">
                        Product Information
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 4,
                                width: '100%'
                            },
                        }}
                    >
                        <Paper elevation={3} >
                            <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom component="div">
                                Product Name: {products.name}
                            </Typography>
                            <img src={products.img} alt="product-img" style={{ width: '95%' }} />
                            <Typography sx={{ textAlign: 'center' }} variant="body1" gutterBottom component="div">
                                Product Price: {products.price}
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom component="div">
                                Product Description: {products.desc}
                            </Typography>

                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* order submit from */}
                    <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom component="div">
                        Order booking from
                    </Typography>
                    <form onSubmit={handleAddOrder}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                disabled
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="name"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                defaultValue={user.email}
                                disabled
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                label={products.name}
                                defaultValue={products?.name}
                                disabled
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="product"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                label={products.price}
                                defaultValue={products?.price}
                                disabled
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="price"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                label='Enter your address'
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="address"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                label='Enter your phone number'
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                name="phone"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 2, }}
                                id="filled-size-small"
                                defaultValue="pending"
                                disabled
                                variant="filled"
                                size="small"
                                name="status"
                                onBlur={handleOnBlur}
                            />

                            <Button sx={{ width: '25%', bgcolor: '#ff9933', fontWeight: 'bold' }} type="submit" variant="contained">Buy</Button>

                        </Box>
                    </form>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Purchase;