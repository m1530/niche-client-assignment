import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, desc } = product;
    return (
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
                <NavLink to={`/purchase/${_id}`}>
                    <Button size="small">Buy Now</Button>
                </NavLink>
            </CardActions>
        </Card>
    );
};

export default Product;