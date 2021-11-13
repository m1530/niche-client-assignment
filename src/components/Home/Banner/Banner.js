import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '@mui/material/Button';
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const Banner = () => {
    // fetch all products from useProducts hook
    const [products] = useProducts();
    return (
        <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showArrows={true} showThumbs={false}>
            {
                // 4 product are shown as navigation
                products.slice(0, 4).map(product => (
                    <div key={product._id}>
                        <img className="banner-img" src={product.img} alt="banner-img" style={{ width: '100%' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="legend-banner">
                                <p>{product.name}</p>
                                <Link to="/products" style={{ textDecoration: 'none' }}><Button variant="contained">See Details</Button></Link>
                            </div>
                        </Box>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default Banner;