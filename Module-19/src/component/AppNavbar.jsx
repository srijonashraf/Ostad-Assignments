import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className="header-nav-area d-none d-lg-block sticky-nav">
      <div className="container">
        <div className="header-nav">
          <div className="main-menu position-relative">
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="product">Product</Link>
              </li>
              <li className="dropdown position-static">
                <Link to="#">
                  Pages <i className="fa fa-angle-down"></i>
                </Link>
                <ul className="mega-menu d-block">
                  <li className="d-flex">
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">Inner Pages</Link>
                      </li>
                      <li>
                        <Link to="notfound">404 Page</Link>
                      </li>
                      <li>
                        <Link to="#">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="/faq">Faq Page</Link>
                      </li>
                      <li>
                        <Link to="#">Coming Soon Page</Link>
                      </li>
                    </ul>
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">Other Shop Pages</Link>
                      </li>
                      <li>
                        <Link to="cart">Cart Page</Link>
                      </li>
                      <li>
                        <Link to="checkout">Checkout Page</Link>
                      </li>
                      <li>
                        <Link to="#">Compare Page</Link>
                      </li>
                      <li>
                        <Link to="#">Wishlist Page</Link>
                      </li>
                    </ul>
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">Related Shop Pages</Link>
                      </li>
                      <li>
                        <Link to="/registration">Account Page</Link>
                      </li>
                      <li>
                        <Link to="/registration">Login & Register Page</Link>
                      </li>
                      <li>
                        <Link to="#">Empty Cart Page</Link>
                      </li>
                      <li>
                        <Link to="/thanks">Thank You Page</Link>
                      </li>
                      <li>
                        <Link to="/review">Review Page</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown position-static">
                <Link to="#">
                  Shop <i className="fa fa-angle-down"></i>
                </Link>
                <ul className="mega-menu d-block">
                  <li className="d-flex">
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">Shop Page</Link>
                      </li>
                      <li>
                        <Link to="#">Shop 3 Column</Link>
                      </li>
                      <li>
                        <Link to="#">Shop 4 Column</Link>
                      </li>
                      <li>
                        <Link to="#">Shop Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="#">Shop Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to="#">Shop List Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="#">Shop List Right Sidebar</Link>
                      </li>
                    </ul>
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">product Details Page</Link>
                      </li>
                      <li>
                        <Link to="#">Product Single</Link>
                      </li>
                      <li>
                        <Link to="#">Product Variable</Link>
                      </li>
                      <li>
                        <Link to="#">Product Affiliate</Link>
                      </li>
                      <li>
                        <Link to="#">Product Group</Link>
                      </li>
                      <li>
                        <Link to="#">Product Tab 2</Link>
                      </li>
                      <li>
                        <Link to="#">Product Tab 3</Link>
                      </li>
                    </ul>
                    <ul className="d-block">
                      <li className="title">
                        <Link to="#">Single Product Page</Link>
                      </li>
                      <li>
                        <Link to="#">Product Slider</Link>
                      </li>
                      <li>
                        <Link to="#">Product Gallery Left</Link>
                      </li>
                      <li>
                        <Link to="#">Product Gallery Right</Link>
                      </li>
                      <li>
                        <Link to="#">Product Sticky Left</Link>
                      </li>
                      <li>
                        <Link to="#">Product Sticky Right</Link>
                      </li>
                      <li>
                        <Link to="#">Cart Page</Link>
                      </li>
                    </ul>
                    <ul className="d-block p-0 border-0">
                      <li className="title">
                        <Link to="#">Single Product Page</Link>
                      </li>
                      <li>
                        <Link to="#">Checkout Page</Link>
                      </li>
                      <li>
                        <Link to="#">Compare Page</Link>
                      </li>
                      <li>
                        <Link to="#">Wishlist Page</Link>
                      </li>
                      <li>
                        <Link to="#">Account Page</Link>
                      </li>
                      <li>
                        <Link to="#">Login & Register Page</Link>
                      </li>
                      <li>
                        <Link to="#">Empty Cart Page</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog </Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
