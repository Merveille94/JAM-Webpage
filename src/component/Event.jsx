import { TITLE } from "../constant/index.jsx";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Event = () => {
    // Set up the inView hook and animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideIn = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };

    return (
        <div ref={ref} className='h-3/4 bg-black w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <motion.div
                className='w-full my-8'
                variants={fadeIn}
                initial="hidden"
                animate={controls}
            >
                <motion.div
                    className='container mx-auto flex justify-center md:justify-between items-center'
                    variants={slideIn}
                    initial="hidden"
                    animate={controls}
                >
                    <div className='flex flex-col items-center justify-center w-full md:w-[70%]'>
                        <motion.div
                            className='container text-center md:text-start mx-auto text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                            variants={{
                                hidden: { scale: 0.9, opacity: 0 },
                                visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
                            }}
                            initial="hidden"
                            animate={controls}
                        >
                            {TITLE.gig}
                        </motion.div>
                        <motion.div
                            className='container text-center md:text-start flex items-center text-slate-200 mx-auto pt-2'
                            variants={fadeIn}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.2 }}
                        >
                            <p className='max-w-full md:max-w-xs'>Follow our ongoing concerts all over the world in 2022.</p>
                        </motion.div>
                    </div>
                    <motion.div
                        className='hidden md:flex p-2 hover:border-transparent border border-violet-700 rounded text-slate-200'
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to={'/events'}>More Gigs</Link>
                    </motion.div>
                </motion.div>
                <div className='container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-1 grid-rows-5 gap-y-10 my-8 text-slate-200'>
                    {[
                        { date: "27", month: "August", time: "21:00", location: "KN Circle, ROSA (Ghana)", id: 1 },
                        { date: "25", month: "March", time: "18:00", location: "KN Circle, ROSA (Ghana)", id: 2 },
                        { date: "23", month: "April", time: "10:00", location: "KN Circle, ROSA (Ghana)", id: 3 },
                        { date: "21", month: "June", time: "20:00", location: "KN Circle, ROSA (Ghana)", id: 4 },
                        { date: "19", month: "July", time: "11:00", location: "KN Circle, ROSA (Ghana)", id: 5 },
                    ].map((event, index) => (
                        <motion.div
                            key={event.id}
                            className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500 pb-1'
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
                            }}
                            initial="hidden"
                            animate={controls}
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <h1>{event.date}</h1>
                                <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>{event.month}</p><p>{event.time}</p></div>
                            </div>
                            <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>{event.location}</p></div>
                            <div className='flex flex-row items-center text-md text-zinc-400'><p className='mr-2'><Link to={'/reservation'} className='hover:text-blue-600'>Buy Ticket</Link></p><FaArrowRight size={15}/></div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className='md:hidden flex justify-center items-center'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className='p-2 hover:border-transparent border border-violet-700 rounded text-slate-200'>
                        <Link to={'/events'}>More Gigs</Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Event;
