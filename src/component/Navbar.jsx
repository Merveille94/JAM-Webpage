import React from 'react';
import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
    FaCartPlus,
    FaYoutube,
} from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-20 px-4'>
            <div>
                <h1>Japhet.A</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Discography</li>
                <li>Event</li>
                <li>Gallery</li>
                <li>Videos</li>
                <li>Shop</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <div>
                <FaFacebook />
                <FaXTwitter/>
                <FaInstagram/>
                <FaYoutube/>
                <FaCartPlus/>
            </div>
        </div>
    );
};

export default Navbar;