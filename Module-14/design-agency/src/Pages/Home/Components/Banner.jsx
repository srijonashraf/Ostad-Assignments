import React from 'react';
import banner from '../../../assets/home/banner.png'
import logo from '../../../assets/home/logos_google.svg'
import logo1 from '../../../assets/home/Trello-logo-blue 1.png'
import logo2 from '../../../assets/home/Notion.png'
import logo3 from '../../../assets/home/Notion.png'
import logo4 from '../../../assets/home/Slack.png'

const Banner = () => {
    return (
        <div className='bg-[#D7F5DC] text-black w-full min-h-content relative'>
            <div className=' flex  flex-col lg:flex-row md:flex-row justify-center items-center  px-[4vw] pt-36 pb-56'>
                <div className='flex-1 space-y-4 pb-4 lg:pb-0'>
                    <h1 className="text-4xl font-bold  w-full lg:w-1/2">Increase Your Customers Loyalty and Satisfaction</h1>
                    <p className="py-6 w-full lg:w-1/2">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                    <button className="btn btn-success text-white">Get Started</button>
                </div>
                <img src={banner} alt="" />
            </div>
            <div className='py-12 bg-white flex flex-nowrap justify-between items-center px-[4vw] h-content lg:h-12 md:h-12 absolute w-full bottom-10'>
                <div><img src={logo} alt="" className='w-24 lg:w-full md:w-full'/></div>
                <div><img src={logo1} alt="" className='w-24 lg:w-full md:w-full'/></div>
                <div><img src={logo2} alt="" className='w-24 lg:w-full md:w-full'/></div>
                <div><img src={logo3} alt="" className='w-24 lg:w-full md:w-full'/></div>
                <div><img src={logo4} alt="" className='w-24 lg:w-full md:w-full'/></div>
            </div>
        </div>
    );
};

export default Banner;