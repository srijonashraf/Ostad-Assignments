import { useEffect, useState } from "react";
import Item from "./Item";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('./testimonial.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:w-full w-full gap-8 px-[4vw] justify-center items-center justify-items-center bg-white'>
            {
                reviews.map(item => <Item key={item.id} item={item}></Item>)
            }
        </div>
    );
};

export default Testimonial;