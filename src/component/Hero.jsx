import { useEffect } from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import bgImage from '../assets/image_8.jpg'
import bgImage2 from '../assets/image_7.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will trigger only once
        threshold: 0.1, // Percentage of component visible to trigger animation
    });

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
        <section ref={ref} className='w-full h-3/4 xl:h-screen relative'>
            <img className='h-full w-full object-cover' alt='background image brown' src={bgImage} />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-t from-zinc-900 via-gray-900/50'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative right-0 left-0 inset-0 w-[50%] md:w-[43%]'>
                    <motion.img
                        src={bgImage2}
                        alt='background image'
                        className='h-full w-auto m-auto left-0 right-0 z-10'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-t from-zinc-900'></div>
                <motion.div
                    className='absolute top-1/2 transform -translate-y-1/2 left-[14%] z-20 text-left left-text duration-700'
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold'>Japhet</p>
                </motion.div>
                <motion.div
                    className='absolute bottom-1/4 transform -translate-y-1/2 right-[14%] z-5 text-right right-text duration-700'
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold'>Adjetey</p>
                </motion.div>
                <div className='absolute bottom-0 right-0 p-4 z-10 text-slate-100'>
                    <div className='flex items-center space-x-4'>
                        <button
                            className='border border-slate-200 transition-all duration-700 ease-in-out hover:border-transparent rounded-full p-2 md:p-3'>
                            <BsFillPlayCircleFill size={30} className='text-slate-400 transition-all duration-700 ease-in-out hover:text-violet-700'/>
                        </button>
                        <motion.div
                            className='hidden md:block bg-gray-800 p-4 rounded-md max-w-xs'
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className='text-xs md:text-sm '>The most streamed Gospel Artist. New video <strong>Healing
                                Factor</strong> is now on all music platforms</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
