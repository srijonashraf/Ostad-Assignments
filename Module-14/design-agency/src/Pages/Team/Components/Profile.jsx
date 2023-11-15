import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Profile = ({ team }) => {
  const { image, name } = team;

  return (
    <div className='relative'>
      {/* Social Media Icons */}
      <div className="flex justify-end space-x-4 p-4">
        <a href="#" className="text-blue-500">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-blue-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-pink-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      {/* Main Card */}
      <div className='card w-96 md:w-80 lg:w-96 h-96 rounded-lg shadow-xl relative z-10'>
        <img src={image} alt="" className='w-96 md:w-80 h-80 lg:w-96 rounded-t-lg' />
        <div className='text-xl font-bold text-center absolute bottom-4 left-0 right-0'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
