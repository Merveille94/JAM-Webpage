import {TITLE} from "../constant/index.jsx";

const Event = () => {
    return (
        <div className='h-3/4 bg-zinc-800 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='flex justify-between items-center'>
                    <div className='container mx-auto text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.gig}</div>
                    <div className='flex items-center justify-center'><h3>More Gigs</h3></div>
                </div>
                <div className='container grid grid-cols-3 grid-rows-5'></div>
            </div>
        </div>
    );
};

export default Event;