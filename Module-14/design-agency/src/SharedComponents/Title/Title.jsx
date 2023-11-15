import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div className='py-12 space-y-3'>
            <h5 className='text-lg font-medium text-[#20B15A] uppercase'>{heading}</h5>
            <p className='text-xl font-medium max-w-sm'>{subHeading}</p>
        </div>
    );
};

export default Title;