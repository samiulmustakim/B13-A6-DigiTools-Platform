import React from 'react';
import Navber from './Navber';
import HeroSection from './HeroSection';

const Headers = ({seletedCart}) => {
    return (
        <>
            <Navber seletedCart={seletedCart}></Navber>
            <HeroSection></HeroSection>
        </>
    );
};

export default Headers;