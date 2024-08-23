import {TITLE, BIO, SIGNATURE} from '../constant';
import {Link} from "react-router-dom";

const Bio = () => {
    return (
        <section className='h-1/2 bg-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='container flex items-center object-center mx-auto my-2 xl:my-12'>
                <div className='mx-auto p-2 xl:p-14'>
                    <div className='text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.heading}</div>
                    <div className='py-6 pl-10 max-w-md md:max-w-5xl mb-4 text-md lg:text-xl font-bold text-slate-200' style={{lineHeight:'1.75'}}>{BIO}</div>
                    <div className='text-slate-200 flex justify-between items-center'>
                        <span>{SIGNATURE.name}</span>
                        <h3><Link to={'/biography'}>Read more</Link></h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;