import React from 'react';
import Banner from './Components/Banner';
import WorkList from './Components/WorkList';
import Stat from './Components/Stat';
import FeaturedProjects from './Components/FeaturedProjects';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner className="text-white"></Banner>
            <WorkList></WorkList>
            <Stat></Stat>
            <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;