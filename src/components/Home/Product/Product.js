import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    // destructuring product information from products props
    const { _id, name, img, price, desc } = product;
    return (
        // display all products in card
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {desc.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                    <Button variant="contained" size="small">Buy Now</Button>
                </NavLink>
            </CardActions>
        </Card>
    );
};

export default Product;