import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const Stat = () => {

    const [stat, setStat] = useState([])

    useEffect(()=>{
        fetch("./counter.json")
        .then(res=>res.json())
        .then(data=>setStat(data))
    },[])
    return (
        <div className=" flex bg-white flex-col md:flex-row lg:flex-row justify-between items-center px-[5vw] pb-15">
            {
                stat.map(counter=> <Counter key={counter.id} counter={counter}></Counter>)
            }
        </div>
    );
};

export default Stat;