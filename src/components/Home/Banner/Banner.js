import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '@mui/material/Button';
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import { Box } from '@mui/system';

const Banner = () => {
    return (
        // <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
        <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showArrows={true} showThumbs={false}>
            <div>
                <img className="banner-img" src={banner1} alt="banner-img" />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="legend-banner">
                        <p>Legend-banner 1</p>
                        <Button variant="contained">Contained</Button>
                    </div>
                </Box>
            </div>
            <div>
                <img className="banner-img" src={banner2} alt="banner-img" />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="legend-banner">
                        <p>Legend-banner 2</p>
                        <Button variant="contained">Contained</Button>
                    </div>
                </Box>
            </div>
            <div>
                <img className="banner-img" src={banner3} alt="banner-img" />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="legend-banner">
                        <p>Legend-banner 3</p>
                        <Button variant="contained">Contained</Button>
                    </div>
                </Box>
            </div>
        </Carousel>
    );
};

export default Banner;