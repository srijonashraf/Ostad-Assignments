import React from 'react';

const Item = ({ item }) => {
    const { image, review, name, title } = item
    console.log(image)
    return (
        <div className='card w-96 md:w-60 lg:w-80 h-96 rounded-lg shadow-xl'>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" className='w-24 h-24' />
            </div>
            <div className='py-4 text-center'>
                <p className='p-4 text-[#8B8B8B]'>{review}</p>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-xs font-bold'>{title}</p>
            </div>
        </div>
    );
};

export default Item;