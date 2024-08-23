import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from "../constant";

const Testimonies = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-black py-6 px-4 lg:px-12 w-full">
            <div className="container mx-auto h-[40vh]">
                <h2 className="mb-6 text-center text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Testimonies</h2>
                <Slider {...settings}>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="p-2">
                            <div className="bg-purple-800 bg-opacity-60 p-6 rounded-lg shadow-lg h-full flex items-center">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-20 h-auto rounded-md mr-6"
                                />
                                <div className="flex flex-col">
                                    <p className="text-white text-md md:text-lg italic mb-2">{testimonial.text}</p>
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <FaStar key={i} className="text-purple-500" />
                                        ))}
                                    </div>
                                    <p className="text-white mt-2">- {testimonial.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonies;
