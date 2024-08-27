import { useInView } from 'react-intersection-observer';
import { DISCOV, TITLE } from "../constant/index.jsx";
import { GrApple, GrSpotify, GrYoutube } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainAlbum = () => {
    const { ref: albumRef, inView: albumInView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2 // Adjust this value based on when you want to trigger the animation
    });

    return (
        <section className='min-h-screen bg-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-10'>
                <div className='container flex justify-center items-center mx-auto my-2 xl:my-12'>
                    <div className='container mx-auto flex flex-col justify-center items-center pb-2 lg:pb-6'>
                        <div className='flex flex-col items-center justify-center pb-4'>
                            <div className='container mx-auto text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                {TITLE.Album}
                            </div>
                        </div>
                        <div className='p-2 text-slate-200 text-sm md:text-md lg:text-lg xl:text-2xl'>
                            Discover our newest music albums and singles
                        </div>
                        <Link to={'/'}><FaArrowLeft size={30} className="xl:hidden text-3xl md:text-5xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mt-4 " /></Link>
                    </div>
                </div>

                <div ref={albumRef} className='container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 my-8 text-slate-200'>
                    {[DISCOV.Album1, DISCOV.Album2, DISCOV.Album3, DISCOV.Album4, DISCOV.Album5].map((album, index) => (
                        <motion.div
                            key={index}
                            className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out'
                            initial={{ opacity: 0, y: 20 }} // Start position
                            animate={{ opacity: albumInView ? 1 : 0, y: albumInView ? 0 : 20 }} // Animate based on inView status
                            whileHover={{ y: -9 }} // Hover effect using framer-motion
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered animation
                        >
                            <img src={album} alt={`Album ${index + 1}`} className='h-auto w-[90%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>{`Album Title ${index + 1}`}</p>
                                <p className='mt-2 text-md'>{`Year ${2020 + index}`}</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20} className='hover:text-red-600'/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20} className='hover:text-green-600'/>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MainAlbum;
