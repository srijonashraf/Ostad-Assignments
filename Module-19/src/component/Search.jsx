import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = ({ term }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("db/product.json");
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    }, [term, data]);

    return (
        <div className="container">
            <h1>Your searched products</h1>
            {filteredData.length === 0 ? (
                <p>No matching products found.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {filteredData.map((product, i) => (
                        <div key={i} className="col">
                            <div className="card h-100">
                                <img src={product?.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="fw-bold ">{product?.category}</h6>
                                    <h4 className="card-title">{product?.name}</h4>
                                    <h5>${product?.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
