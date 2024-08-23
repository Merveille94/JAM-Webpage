import {DISCOV, TITLE} from "../constant/index.jsx";
import {GrApple, GrSpotify, GrYoutube} from "react-icons/gr";
import {FaArrowLeft} from "react-icons/fa";
import {Link} from "react-router-dom";

const MainAlbum = () => {
    return (
        <>
            <section className='min-h-screen bg-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
                <div className='w-full my-10'>
                    <div className='container flex justify-center items-center mx-auto my-2 xl:my-12'>
                        <div className='container mx-auto flex flex-col justify-center items-center pb-2 lg:pb-6'>
                            <div className='flex flex-col items-center justify-center pb-4'>
                                <div className='container mx-auto text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                    {TITLE.Album}
                                </div>
                            </div>
                            <div className='p-2 text-slate-200 text-sm md:text-md lg:text-lg xl:text-2xl'>Discover our newest music albums and singles</div>
                            <Link to={'/'}><FaArrowLeft size={30} className="xl:hidden text-3xl md:text-5xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mt-4 " /></Link>
                        </div>
                    </div>

                    <div className='container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 my-8 text-slate-200'>
                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album1} alt='News1' className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Miracle God</p>
                                <p className='mt-2 text-md'>2022</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg '>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20} />
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album2} alt='News1'
                                 className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Amazing Grace</p>
                                <p className='mt-2 text-md'>2023</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20}/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album3} alt='News1'
                                 className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Sanctified Healing</p>
                                <p className='mt-2 text-md'>2024</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20}/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album4} alt='News1'
                                 className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Bless me oh Lord</p>
                                <p className='mt-2 text-md'>2021</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20}/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album5} alt='News1'
                                 className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Greatness overload</p>
                                <p className='mt-2 text-md'>2020</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20}/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='relative group flex flex-col items-center justify-center rounded-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-2'>
                            <img src={DISCOV.Album1} alt='News1'
                                 className='h-auto w-[80%] border-2 border-violet-950 rounded-sm'/>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='mt-2 text-sm lg:text-2xl uppercase'>Miracle Worker</p>
                                <p className='mt-2 text-md'>2022</p>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-700 group-hover:opacity-80'>
                                <h4 className='mb-2 text-xs md:text-xl lg:text-lg'>Available on</h4>
                                <div className='flex cursor-pointer'>
                                    <GrYoutube size={20}/>
                                    <GrApple size={20} className='mx-2'/>
                                    <GrSpotify size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MainAlbum;

