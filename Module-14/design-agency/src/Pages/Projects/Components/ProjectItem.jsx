import React from 'react';

const ProjectItem = ({item}) => {
    const { image, title } = item
    return (
        <div className='card justify-center items-center p-6 shadow-xl rounded-lg w-[90vw] lg:w-[40vw] md:w-[50vw] bg-white'>
            <img src={image} alt="" className='w-full h-80' />
            <div className='text-xl font-bold text-center py-3'>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default ProjectItem;