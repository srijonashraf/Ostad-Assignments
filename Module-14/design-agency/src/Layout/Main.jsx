import React from 'react'
import Navbar from '../SharedComponents/Navbar/Navbar';
import Footer from '../SharedComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Subscribe from '../SharedComponents/Subscribe/Subscribe';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Main;