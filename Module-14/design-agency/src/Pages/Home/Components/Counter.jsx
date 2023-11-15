import React from 'react';

const Counter = ({counter}) => {
    const {icon, total, title} = counter
    return (
        
        <div className="w-60 h-60 text-black bg-white card justify-center items-center rounded-lg shadow-2xl p-6 text-center space-y-4 my-5">
        <div className="flex justify-center items-center">
            <img src={icon} className='bg-[#D7F5DC] p-5 rounded-md' alt="" />
        </div>
        <h2 className='text-2xl font-bold'>{total}</h2>
        <p>{title}</p>
    </div>
    );
};

export default Counter;