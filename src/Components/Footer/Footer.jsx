import React from 'react';
import Steps from './Steps';
import PricingCardSection from './PricingCardSection';
import Exploring from './Exploring';
import Footers from './Footers';

const Footer = () => {
    return (
        <div>
            <Steps></Steps>
            <PricingCardSection></PricingCardSection>
            <Exploring></Exploring>
            <Footers></Footers>
        </div>
    );
};

export default Footer;