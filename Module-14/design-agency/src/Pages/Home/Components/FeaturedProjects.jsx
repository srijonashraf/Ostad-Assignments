import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import Title from '../../../SharedComponents/Title/Title';

const FeaturedProjects = () => {

    const [featuredProject, setFeaturedProject] = useState([])

    useEffect(() => {
        fetch('./featuredProject.json')
            .then(res => res.json())
            .then(data => setFeaturedProject(data))
    }, [])

    return (
        <div>
            <div className='w-full text-black px-[4vw]  bg pb-20'>
                <Title heading="Featured Project" subHeading="We provide the Perfect Solution to your business growth"></Title>

                <div className='flex flex-col justify-center items-center md:flex-row lg:flex-row gap-5'>
                    {
                        featuredProject.slice(0, 1).map(feature =>
                            <div className='w-[90vw] lg:w-[50vw] h-full space-y-2'>
                                <img src={feature.image} alt="" className='w-full' />
                                <p className='text-[#8B8B8B]'>{feature.date}</p>
                                <h2 className='text-lg font-bold'>{feature.title}</h2>
                            </div>)
                    }
                    <div className='w-[90vw] lg:w-[50vw] grid grid-cols-2 gap-8'>
                        {
                            featuredProject.slice(1,).map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;