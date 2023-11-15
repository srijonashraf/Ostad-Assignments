import React from 'react';
import Banner from '../../SharedComponents/Banner/Banner';
import Title from '../../SharedComponents/Title/Title';
import ProjectsInfo from './Components/ProjectsInfo';

const Projects = () => {
    return (
        <div>
            <Banner bannerTitle="All Project"></Banner>
            <div className='px-[4vw] bg-white text-black'>
                <Title heading="All Project" subHeading="Better Agency/SEO Solution At Your Fingertips"></Title>
                <ProjectsInfo></ProjectsInfo>
            </div>
        </div>
    );
};

export default Projects;