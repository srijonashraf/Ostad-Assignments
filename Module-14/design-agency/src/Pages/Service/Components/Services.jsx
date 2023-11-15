import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [serviceItems, setServiceItems] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServiceItems(data))
    }, [])
    // console.log(serviceItems)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-full w-full gap-4 px-[4vw] justify-center items-center bg-white'>
            {
                serviceItems.map(item => <ServiceItem key={item.id} item={item}></ServiceItem>)
            }
        </div>
    );
};

export default Services;