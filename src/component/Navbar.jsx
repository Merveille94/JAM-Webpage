import {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import {NavLink} from 'react-router-dom';
import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
    const activeNav = ({ isActive }) => isActive ? 'text-slate-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-lg' : 'text-slate-50';
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <nav className='flex items-center justify-between h-20 px-4 w-full absolute z-30 text-slate-100'>
            <NavLink to='/'>
                <span>Japhet.A</span>
            </NavLink>
            <ul className='hidden xl:flex xl:mt-2'>
                <li><NavLink to='/' className={activeNav}>Home</NavLink></li>
                <li><NavLink to={'/discography'} className={activeNav}>Discography</NavLink></li>
                <li><NavLink to={'/events'} className={activeNav}>Events</NavLink></li>
                <li><NavLink to={'/gallery'} className={activeNav}>Gallery</NavLink></li>
                <li><NavLink to={'/videos'} className={activeNav}>Videos</NavLink></li>
                <li><NavLink to={'/news'} className={activeNav}>News</NavLink></li>
                <li><NavLink to={'/contacts'} className={activeNav}>Contacts</NavLink></li>
            </ul>
            <div className='flex'>
                <div className='hidden md:flex'>
                    <FaInstagram size={28} className='icon mr-3 hover:text-orange-500'/>
                    <FaXTwitter size={28} className='icon mr-3 hover:text-black'/>
                    <FaFacebook size={28} className='icon mr-3 hover:text-blue-700'/>
                </div>

                {/*Hamburger menu */}
                <div onClick={handleNav} className='xl:hidden flex z-10'>
                    {nav ? <IoCloseOutline size={35} className='text-slate-100'/> :  <RxHamburgerMenu size={30} className='text-slate-100 border rounded-full p-1 hover:border-transparent'/>}
                </div>
            </div>

            {/*Mobile drop menu*/}
            <div onClick={handleNav} className={nav ? 'absolute top-0 left-0 w-full h-screen bg-gray-950 py-7' : 'absolute left-[-100%]'}>
                <ul className='flex flex-col items-center py-7 text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    <li className='text-slate-100'><NavLink to='/'>Home</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/discography'}>Discography</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/events'}>Events</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/gallery'}>Gallery</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/videos'}>Videos</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/news'}>News</NavLink></li>
                    <li className='text-slate-100'><NavLink to={'/contacts'}>Contacts</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;