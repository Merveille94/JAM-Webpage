import {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
    FaBagShopping,
} from "react-icons/fa6";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex items-center justify-between h-20 px-4 w-full absolute z-30 text-slate-100'>
            <div>
                <span>Japhet.A</span>
            </div>
            <ul className='hidden xl:flex xl:mt-2'>
                <li>Home</li>
                <li>Discography</li>
                <li>Event</li>
                <li>Gallery</li>
                <li>Videos</li>
                <li>Shop</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <div className='flex'>
                <div className='hidden md:flex'>
                    <FaFacebook size={20} className='icon mr-2'/>
                    <FaXTwitter size={20} className='icon mr-2'/>
                    <FaInstagram size={20} className='icon mr-2'/>
                </div>

                <div>
                    <FaBagShopping size={20} className='icon mr-2'/>
                </div>

                {/*Hamburger menu */}
                <div onClick={handleNav} className='xl:hidden flex z-10'>
                    {nav ? <IoCloseOutline size={25} className='text-slate-100'/> :  <RxHamburgerMenu size={25} className='text-slate-100 border rounded-full p-1 hover:border-transparent'/>}
                </div>
            </div>

            {/*Mobile drop menu*/}
            <div onClick={handleNav} className={nav ? 'absolute top-0 left-0 w-full h-screen bg-gray-950 py-7' : 'absolute left-[-100%]'}>
                <ul className='flex flex-col items-center py-7 md:text-2xl lg:text-3xl xl:text-4xl'>
                    <li className='text-slate-100'>Home</li>
                    <li className='text-slate-100'>Discography</li>
                    <li className='text-slate-100'>Event</li>
                    <li className='text-slate-100'>Gallery</li>
                    <li className='text-slate-100'>Videos</li>
                    <li className='text-slate-100'>Shop</li>
                    <li className='text-slate-100'>News</li>
                    <li className='text-slate-100'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;