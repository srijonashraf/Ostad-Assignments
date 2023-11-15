import React from 'react';
import Banner from '../../SharedComponents/Banner/Banner';
import Title from '../../SharedComponents/Title/Title';
import Testimonial from './components/Textimonial';

const Testimonials = () => {
    return (
        <div>
            <Banner bannerTitle="Testimonial List"></Banner>
            <div className='px-[4vw] bg-white text-black'>
                <Title heading="All Testimonial List" subHeading="Better Agency/SEO Solution At Your Fingertips"></Title>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Testimonials;