import {DISCOV, TITLE, NEWS} from "../constant/index.jsx";
import {FaArrowLeft} from "react-icons/fa";
import {Link} from "react-router-dom";

const Gallery = () => {
    return (
        <div  className='min-h-screen bg-gradient-to-t from-zinc-900 via-zinc-900 to-violet-950 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className="w-full my-10">
                <div className='container flex justify-center items-center mx-auto my-2 xl:my-12'>
                    <div className='container mx-auto flex flex-col justify-center items-center pb-2 lg:pb-6'>
                        <div className='flex flex-col items-center justify-center pb-4'>
                            <div
                                className='container mx-auto text-5xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                {TITLE.gallery}
                            </div>
                        </div>
                        <div className='p-2 text-slate-200 text-sm md:text-md lg:text-lg xl:text-2xl'>Breathtaking Memories</div>
                        <Link to={'/'}><FaArrowLeft size={30} className="text-3xl md:text-5xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mt-4 " /></Link>
                    </div>
                </div>

                <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 my-8 text-slate-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 grid-row-col-dense">
                        {/* Photo 1 */}
                        <div className="col-span-1">
                            <img src={NEWS.news1} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                            <img src={NEWS.news2} alt="gallery" className='mt-4'/>
                        </div>
                        {/* Photo 2 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={DISCOV.Album2} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                        </div>
                        {/* Photo 3 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={NEWS.news3} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news1} alt="gallery"/>
                            <img src={NEWS.news1} alt="gallery" className='mt-4'/>
                        </div>
                        {/* Photo 4 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={NEWS.news2} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                            <img src={NEWS.news1} alt="gallery" className='mt-4'/>
                        </div>
                        {/* Photo 5 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={NEWS.news2} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                        </div>
                        {/* Photo 5 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={NEWS.news2} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                        </div>
                        {/* Photo 6 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={DISCOV.Album1} alt="gallery"/>
                            <img src={DISCOV.Album4} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                        </div>
                        {/* Photo 7 */}
                        <div className="col-span-1 mt-8 md:mt-0">
                            <img src={DISCOV.Album5} alt="gallery"/>
                            <img src={NEWS.news2} alt="gallery" className='my-4'/>
                            <img src={NEWS.news3} alt="gallery"/>
                            <img src={NEWS.news1} alt="gallery" className='mt-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Gallery
