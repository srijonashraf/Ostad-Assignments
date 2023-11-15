import React from 'react';

const Banner = ({ bannerTitle }) => {
    return (
        <div className='bg w-full h-[370px] text-black'>
            <div className='py-48 px-[4vw] space-y-3'>
                <h2 className='text-2xl font-semibold'>{bannerTitle}</h2>
                <p>Home &gt; <span className='text-[#20B15A]'>{bannerTitle}</span></p>
            </div>
        </div>
    );
};

export default Banner;