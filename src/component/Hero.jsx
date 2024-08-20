import React, { useEffect } from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import bgImage from '../assets/image_8.jpg'
import bgImage2 from '../assets/image_7.png'

const Hero = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const leftText = document.querySelector('.left-text');
            const rightText = document.querySelector('.right-text');
            const { clientX } = event;
            const moveAmount = (window.innerWidth / 2 - clientX) * 0.03;

            if (leftText && rightText) {
                leftText.style.transform = `translateX(${moveAmount}px)`;
                rightText.style.transform = `translateX(${moveAmount}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='w-full h-3/4 xl:h-screen relative'>
            <img className='h-full w-full object-cover' alt='background image brown' src={bgImage} />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/60'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
                <img src={bgImage2} alt='background image' className='h-full w-auto m-auto left-0 right-0 z-10'/>
                    <div className='absolute top-1/2 transform -translate-y-1/2 left-[14%] z-20 text-left left-text transition-transform duration-1000 ease-out'>
                        <p className='text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold'>Japhet</p>
                    </div>
                    <div className='absolute bottom-1/4 transform -translate-y-1/2 right-[14%] z-5 text-right right-text transition-transform duration-1000 ease-out'>
                        <p className='text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold'>Adjetey</p>
                    </div>
                <div className='absolute bottom-0 right-0 p-4 z-10 text-slate-100'>
                    <div className='flex items-center space-x-4'>
                        <button className='border border-slate-200 transition-all duration-700 ease-in-out hover:border-transparent rounded-full p-2 md:p-3'><BsFillPlayCircleFill size={30}/>
                        </button>
                        <div className='hidden md:block bg-gray-800 p-4 rounded-md max-w-xs'>
                            <p className='text-xs md:text-sm '>The most streamed Gospel Artist. New video <strong>Healing Factor</strong>is now on all music platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;