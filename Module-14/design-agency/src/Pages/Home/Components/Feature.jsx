import React from 'react';

const Feature = ({feature}) => {

    const {image, title, date} = feature
    return (
        <div className='space-y-2'>
            <img src={image} alt="" className='w-full   h-2/3' />
            <p className='text-[#8B8B8B]'>{date}</p>
            <h2 className='text-lg font-bold'>{title}</h2>
        </div>
    );
};

export default Feature;