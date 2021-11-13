import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutData from '../About/AboutData';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Products from '../Products/Products';
import AllReview from '../Review/AllReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <AllReview></AllReview>
            <LatestNews />
            <AboutData />
            <Footer></Footer>
        </div>
    );
};

export default Home;