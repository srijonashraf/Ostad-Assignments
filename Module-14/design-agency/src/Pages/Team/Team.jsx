import React from 'react';
import Teams from './COmponents/Teams';
import Title from '../../SharedComponents/Title/Title';
import Banner from '../../SharedComponents/Banner/Banner';

const Team = () => {
    return (
        <div>
            <Banner bannerTitle="Team"></Banner>
            <div className='px-[4vw] bg-white text-black'>
                <Title heading="Our Team Member" subHeading="Check our awesome team members"></Title>
                <Teams></Teams>
            </div>
        </div>
    );
};

export default Team;