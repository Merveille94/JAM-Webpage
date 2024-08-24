import { GrApple, GrSpotify, GrYoutube } from "react-icons/gr";
import Slider from 'react-slick';
import { TITLE, IMAGES } from "../constant/index.jsx";
import {Link} from "react-router-dom";

const Album = () => {
    // Slick slider settings
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Tablets and larger screens
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768, // Small screens (mobile)
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640, // Smaller screens
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // Extra-small screens
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className='h-3/4 bg-gradient-to-b from-zinc-900 to-black w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full h-full my-4 md:my-8'>
                <div className='container text-center mx-auto text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.Album}</div>
                <div className='container mx-auto w-full h-full my-10 md:my-12 lg:my-14 xl:my-20'>
                    <Slider {...settings}>
                        {IMAGES.map((image, index) => (
                            <div key={index} className='relative group'>
                                <img
                                    src={image}
                                    alt={`image ${index + 1}`}
                                    className='w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] object-cover h-auto border-2 border-slate-900 rounded-lg mx-auto'
                                />
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-95'>
                                    <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                    <div className='flex'>
                                        <GrYoutube size={20}  className='hover:text-red-600'/>
                                        <GrApple size={20} className='mx-2'/>
                                        <GrSpotify size={20} className='hover:text-green-600'/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex items-center justify-center'><h3><Link to={'/discography'}>View all Discographies</Link></h3></div>
            </div>
        </section>
    );
};

export default Album;
