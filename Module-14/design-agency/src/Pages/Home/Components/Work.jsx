import React from 'react';
import { RiArrowRightFill } from "react-icons/ri"

const Work = ({work}) => {
    const {icon, title, description} = work
    console.log(icon)
    return (
        <div className='w-60 lg:w-96 space-y-3'>
            <img src={icon} alt="" />
            <div className='w-60'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='flex items-center gap-3 p-4'>Learn More <RiArrowRightFill></RiArrowRightFill>
                </div>
            </div>
        </div>
    );
};

export default Work;