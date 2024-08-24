import { NEWS, TITLE } from "../constant/index.jsx";
import {Link} from "react-router-dom";

const News = () => {
    return (
        <section className='h-3/4 bg-gradient-to-b from-black to-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='container flex items-center object-center mx-auto my-2 xl:my-12'>
                    <div className='container mx-auto flex justify-between items-center border-b border-slate-500 pb-2 lg:pb-6'>
                        <div className='flex flex-col items-center justify-center w-[60%]'>
                            <div className='container mx-auto text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                {TITLE.news}
                            </div>
                        </div>
                        <h3><Link to={'/news'}>More News</Link></h3>
                    </div>
                </div>

                <div className='container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 my-8 text-slate-200'>
                    {/* Card 1 */}
                    <div className='cursor-pointer flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                        <img src={NEWS.news1} alt='News1' className='h-auto w-[95%] border-2 border-violet-950 rounded-lg' />
                        <div className='flex flex-col items-start w-[95%]'>
                            <p className='mt-4 text-xs uppercase'>September 14, 2024</p>
                            <p className='mt-4 w-[95%] text-lg lg:text-2xl '>Prayer / Glory All Night soon Available on Youtube</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='cursor-pointer flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                        <img src={NEWS.news2} alt='News2' className='h-auto w-[95%] border-2 border-violet-950 rounded-lg' />
                        <div className='flex flex-col items-start w-[95%]'>
                            <p className='mt-4 text-xs uppercase'>November 24, 2024</p>
                            <p className='mt-4 w-[95%] text-lg lg:text-2xl '>Praise / Glory All Night soon Available on Youtube</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='cursor-pointer flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                        <img src={NEWS.news3} alt='News3' className='h-auto w-[95%] border-2 border-violet-950 rounded-lg' />
                        <div className='flex flex-col items-start w-[95%]'>
                            <p className='mt-4 text-xs uppercase'>October 26, 2024</p>
                            <p className='mt-4 w-[95%] text-lg lg:text-2xl '>Prayer / Worship Night Available on Youtube soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
