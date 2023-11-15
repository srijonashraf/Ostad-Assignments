import React from 'react';

const ServiceItem = ({ item }) => {

    const { title, description, images } = item
    console.log(images)
    return (
        <div className='card justify-center items-center p-6 shadow-xl rounded-lg w-[90vw] lg:w-[45vw] md:w-[50vw] bg-white text-black'>
            <div className='space-y-3'>
                <h2 className='text-xl font-semibold '>{title}</h2>
                <p className='text-[#8B8B8B]'>{description}</p>
            </div>
            <div className='flex justify-center items-center w-[90vw] lg:w-[40vw] md:w-[50vw]'>
                <div className=''>
                    <img src={images.image1} alt="" className='w-[full] md:w-[full] lg:w-[35rem]' />
                </div>
                <div className=''>
                    <img src={images.image2} alt="" className='w-full md:w-[full] lg:w-[20rem]' />
                </div>
            </div>
            <div className='flex justify-center items-center w-[90vw] lg:w-[40vw] md:w-[50vw]'>
                <div className=''>
                    <img src={images.image3} alt="" className='w-full md:w-[full] lg:w-[27rem]' />
                </div>
                <div className=''>
                    <img src={images.image4} alt="" className='w-full md:w-[full] lg:w-[27rem]' />
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;