import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApppintmentBanner from '../ApppintmentBanner/ApppintmentBanner';
import Banner from '../Banner/Banner';
import BannerBottom from '../Banner/BannerBottom/BannerBottom';
import PatientsReview from '../PatientsReview/PatientsReview';
import ExceptionalDenral from './ExceptionalDenral/ExceptionalDenral';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Services></Services>
            <ExceptionalDenral></ExceptionalDenral>
            <ApppintmentBanner></ApppintmentBanner>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;