import React from 'react';

const Profile = ({team}) => {
    const {image, name} = team
    return (
        <div className='card w-96 md:w-80 lg:w-96 h-96 rounded-lg shadow-xl'>
            <img src={image} alt=""  className='w-96 md:w-80 h-80 lg:w-96'/>
            <div className='text-xl font-bold text-center'>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Profile;