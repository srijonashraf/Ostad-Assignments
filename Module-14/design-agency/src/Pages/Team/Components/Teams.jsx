import React, { useEffect, useState } from 'react';
import Profile from '../Components/Profile'

const Teams = () => {
    const [teamsProfile, setTeamsProfile] = useState([])

    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setTeamsProfile(data))
    }, [])

    return (
        <div className='flex flex-col md:flex-row justify-between items-center lg:flex-row gap-5 pb-36 bg-white'>
            {
                teamsProfile.map(team=> <Profile key={team.id} team={team}></Profile>)
            }
        </div>
    );
};

export default Teams;