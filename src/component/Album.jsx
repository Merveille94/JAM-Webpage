import React from 'react';
import Slider from 'react-slick';
import {TITLE, IMAGES} from "../constant/index.jsx";

const Album = () => {
        // Slick slider settings
        const settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000, // Adjust as needed
            arrows: false, // Hide navigation arrows
        };

    return (
        <div className='h-3/4 bg-black w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='container mx-auto text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.Album}</div>
                <div className='w-full h-full my-10 md:my-12 lg:my-14 xl:my-20'>
                    <Slider {...settings}>
                        {IMAGES.map((src, index) => (
                            <div key={index} className='flex justify-center items-center'>
                                <img src={src} alt={`Carousel ${index}`} className='w-5/6 h-auto object-cover border-2 border-slate-500 rounded'/>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex items-center justify-center'><h3>View all Discography</h3></div>
            </div>
        </div>
    );
};

export default Album;