import {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
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
        <nav className='flex items-center justify-between h-20 px-4 w-full absolute z-30 text-slate-100'>
            <Link to='/'>
                <span>Japhet.A</span>
            </Link>
            <ul className='hidden xl:flex xl:mt-2'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={'/discography'}>Discography</Link></li>
                <li><Link to={'/events'}>Events</Link></li>
                <li><Link to={'/gallery'}>Gallery</Link></li>
                <li>Videos</li>
                <li>Shop</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <div className='flex'>
                <div className='hidden md:flex'>
                    <FaInstagram size={28} className='icon mr-3 hover:text-orange-500'/>
                    <FaXTwitter size={28} className='icon mr-3 hover:text-black'/>
                    <FaFacebook size={28} className='icon mr-3 hover:text-blue-700'/>
                </div>

                <div>
                    <FaBagShopping size={28} className='icon mr-3'/>
                </div>

                {/*Hamburger menu */}
                <div onClick={handleNav} className='xl:hidden flex z-10'>
                    {nav ? <IoCloseOutline size={35} className='text-slate-100'/> :  <RxHamburgerMenu size={30} className='text-slate-100 border rounded-full p-1 hover:border-transparent'/>}
                </div>
            </div>

            {/*Mobile drop menu*/}
            <div onClick={handleNav} className={nav ? 'absolute top-0 left-0 w-full h-screen bg-gray-950 py-7' : 'absolute left-[-100%]'}>
                <ul className='flex flex-col items-center py-7 text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    <li className='text-slate-100'><Link to='/'>Home</Link></li>
                    <li className='text-slate-100'><Link to={'/discography'}>Discography</Link></li>
                    <li className='text-slate-100'><Link to={'/events'}>Events</Link></li>
                    <li className='text-slate-100'><Link to={'/gallery'}>Gallery</Link></li>
                    <li className='text-slate-100'>Videos</li>
                    <li className='text-slate-100'>Shop</li>
                    <li className='text-slate-100'>News</li>
                    <li className='text-slate-100'>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;