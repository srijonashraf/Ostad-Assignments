import React from "react";
import {FaArrowRight} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                {/* Left Part */}
                <div className="col-md-6">
                    <div className="position-relative" style={{height: '100%'}}>
                        <img src="https://i.postimg.cc/FRLfNKD8/3.webp" alt=""
                             style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                        <div className="position-absolute add-pos ps-5 d-flex flex-column">
                            <h1 className="title">
                                Smart Watch For <br/> Your Hand
                            </h1>
                            <h2 className="price">From $29.00</h2>
                            <div
                                className="bg-primary mt-2 d-flex align-items-center justify-content-center rounded-circle"
                                style={{width: '40px', height: '40px'}}>
                                <FaArrowRight className="fs-5 fw-bold text-white"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Part */}
                <div className="col-md-6">
                    <div className="row" style={{height: '100%'}}>
                        {/* First Half */}
                        <div className="col-md-12 mb-3">
                            <div className="position-relative" style={{height: '100%'}}>
                                <img src="https://i.postimg.cc/bvdDVgbz/4.webp" alt=""
                                     style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                                <div className="position-absolute add-pos ps-5 d-flex flex-column">
                                    <h1 className="title">Headphones</h1>
                                    <h2 className="price">From $29.00</h2>
                                    <div
                                        className="bg-primary mt-2  d-flex align-items-center justify-content-center rounded-circle"
                                        style={{width: '40px', height: '40px'}}>
                                        <FaArrowRight className="fs-5 fw-bold text-white"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Half */}
                        <div className="col-md-12">
                            <div className="position-relative" style={{height: '100%'}}>
                                <img src="https://i.postimg.cc/kgTRyz21/5.webp" alt=""
                                     style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                                <div className="position-absolute add-pos ps-5 d-flex flex-column">
                                    <h1 className="title">Smartphone</h1>
                                    <h2 className="price">From $29.00</h2>
                                    <div
                                        className="bg-primary mt-2 d-flex align-items-center justify-content-center rounded-circle"
                                        style={{width: '40px', height: '40px'}}>
                                        <FaArrowRight className="fs-5 fw-bold text-white"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
