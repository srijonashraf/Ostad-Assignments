import React from "react";
import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTimes} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 mt-3">
            <div className="container px-3">
                <div className="row">
                    <div className="col-lg-3 mb-5 text-justify">
                        <h3 className="text-white mb-4">Techify</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            quisquam aut eos pariatur
                        </p>
                        <div className="d-flex align-items-center">
                            <Link to="#" className="rounded-1 me-2 p-2 bg-primary">
                                <FaFacebook color="white"/>
                            </Link>
                            <Link to="#" className="rounded-1 me-2 p-2 bg-primary">
                                <FaInstagram color="white"/>
                            </Link>
                            <Link to="#" className="rounded-1 p-2 bg-primary">
                                <FaTimes color="white"/>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div>
                            <h3 className="text-white mb-4">Services</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-white" to="#">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" to="#">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" to="#">
                                        My Account
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div>
                            <h3 className="text-white mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                                <li>Address: Dhaka, Bangladesh</li>
                                <li>Phone/Fax: 0123456789</li>
                                <li>Email: demo@example.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div>
                            <h3 className="text-white mb-4">Additional Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-white" to="#">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" to="#">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" to="#">
                                        Shop
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
