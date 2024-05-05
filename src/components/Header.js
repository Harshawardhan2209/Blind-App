import React from 'react';
import './header.css';
import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><h5>Search</h5></li>
                <li><h5>Offers</h5></li>
                <li><h5>SignIn</h5></li>
                <li><h5>Cart</h5></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;