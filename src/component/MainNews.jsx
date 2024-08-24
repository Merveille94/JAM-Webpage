import { NEWS, TITLE } from "../constant/index.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const MainNews = () => {
    // State to toggle between showing 3 or all cards
    const [showAll, setShowAll] = useState(false);

    // Array of news items for mapping
    const newsItems = [
        { img: NEWS.news1, date: "September 14, 2024", title: "Prayer / Glory All Night soon Available on Youtube" },
        { img: NEWS.news2, date: "November 24, 2024", title: "Praise / Glory All Night soon Available on Youtube" },
        { img: NEWS.news3, date: "October 26, 2024", title: "Prayer / Worship Night Available on Youtube soon" },
        { img: NEWS.news1, date: "September 14, 2024", title: "Prayer / Glory All Night soon Available on Youtube" },
        { img: NEWS.news2, date: "November 24, 2024", title: "Praise / Glory All Night soon Available on Youtube" },
        { img: NEWS.news3, date: "October 26, 2024", title: "Prayer / Worship Night Available on Youtube soon" }
    ];

    // Display only 3 items initially
    const displayedItems = showAll ? newsItems : newsItems.slice(0, 3);

    return (
        <section className='bg-gradient-to-b from-black to-zinc-900 w-full flex flex-col items-center py-8 md:py-12 lg:py-16 px-8 md:px-14'>
            <div className='w-full max-w-7xl mx-auto my-8'>
                <div className='flex flex-col justify-center items-center mb-8'>
                    <div className='text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        {TITLE.news}
                    </div>
                    <div className='text-slate-200 text-xs md:text-sm lg:text-md xl:text-lg my-4'>
                        Latest news about the ministry
                    </div>

                    <Link to={'/'}>
                        <FaArrowLeft size={25} className="xl:hidden text-3xl md:text-4xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mb-4" />
                    </Link>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {displayedItems.map((item, index) => (
                        <div key={index} className='cursor-pointer flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105'>
                            <img src={item.img} alt={`News${index}`} className='w-full h-64 object-cover' />
                            <div className='p-4 bg-zinc-800 text-slate-200'>
                                <p className='text-xs uppercase'>{item.date}</p>
                                <p className='mt-2 text-lg lg:text-xl font-semibold'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='mt-6 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-all duration-300 flex items-center'>
                        {showAll ? (
                            <>
                                <FaChevronUp className='mr-2'/> Show Less
                            </>
                        ) : (
                            <>
                                <FaChevronDown className='mr-2'/> Show More
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainNews;
