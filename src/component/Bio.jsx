import {TITLE, BIO, SIGNATURE} from '../constant';
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaArrowDownWideShort, FaArrowUpWideShort} from "react-icons/fa6";

const Bio = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleText = () => setShowFullText(!showFullText);

    return (
        <section className='h-1/2 bg-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='container flex items-center object-center mx-auto my-2 xl:my-12'>
                <div className='mx-auto p-2 xl:p-14'>
                    <div className='text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        {TITLE.heading}
                    </div>
                    <div className='py-6 pl-10 max-w-md md:max-w-5xl mb-4 text-md lg:text-xl font-bold text-slate-200' style={{lineHeight: '1.75'}}>
                        <div className={`text-lg md:text-xl text-justify leading-relaxed flex flex-col ${showFullText ? '' : 'max-h-44 md:max-h-svh overflow-hidden'}`}>{BIO}
                            <span className='pt-4 font-normal md:hidden'>{SIGNATURE.name}</span>
                        </div>
                    </div>
                    <div className='text-slate-100 md:hidden' onClick={toggleText}>{showFullText ? <FaArrowUpWideShort size={25}/> : <FaArrowDownWideShort size={25}/>}</div>

                    <div className='text-slate-200 flex justify-end mt-2 md:justify-between items-center'>
                        <span className='hidden md:flex'>{SIGNATURE.name}</span>
                        <h3><Link to={'/biography'}>Read more</Link></h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;