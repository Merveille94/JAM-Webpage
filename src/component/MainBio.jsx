import { useState } from 'react';
import { MAINBIOTEXT, TITLE} from '../constant';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import bgImage from "../assets/image_8.jpg";
import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {GrYoutube} from "react-icons/gr";

const MainBio = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => setShowFullText(!showFullText);

    return (
        <section className='relative w-full min-h-screen'>
            {/* Background Image */}
            <img
                className='absolute inset-0 h-full w-full object-cover'
                alt='background image'
                src={bgImage}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900 bg-opacity-70"></div>

            {/* Content Container */}
            <div className='relative z-10 w-full py-8 md:py-10 lg:py-12 xl:py-16 px-8 md:px-14'>
                <div className='flex justify-center items-center mx-auto my-6 xl:my-12'>
                    <div className='flex flex-col items-center justify-center pb-1'>
                        <div className='text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            {TITLE.about}
                        </div>
                        <div className='p-2 text-slate-100 text-xs md:text-sm lg:text-md xl:text-lg'>
                            {TITLE.story}
                        </div>
                        <Link to={'/'}><FaArrowLeft size={30} className="xl:hidden text-3xl md:text-5xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mt-4 " /></Link>
                    </div>
                </div>

                <div className=' w-full md:w-[95%] lg:w-[95%] xl:w-[95%] container mx-auto p-2 md:p-4 lg:p-8 xl:p-10 my-6 text-slate-200'>
                    {/* Text Section with Floating Image */}
                    <div className="relative bg-purple-900 bg-opacity-60 text-white rounded-lg p-6 md:p-10 shadow-lg floating-effect">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Japhet Adjetey</h1>
                        <div className={`text-lg md:text-xl text-justify leading-relaxed ${showFullText ? '' : 'max-h-96 lg:max-h-svh overflow-hidden'}`}>
                            {MAINBIOTEXT.map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <button onClick={toggleText} className="lg:hidden mt-3 px-4 py-2 bg-violet-700 hover:bg-violet-500 text-sm md:text-lg text-white rounded-lg transition-all duration-300">
                            {showFullText ? 'Show Less' : 'Read More'}
                        </button>

                        {/* Social Media Icons */}
                        <div className="hidden mt-4 md:flex space-x-6 justify-center md:justify-start">
                            <FaInstagram size={20} className='hover:text-orange-500'/>
                            <FaXTwitter size={20} className='hover:text-black'/>
                            <FaFacebook size={20} className='hover:text-blue-700'/>
                            <GrYoutube size={20} className='hover:text-red-500'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBio;
