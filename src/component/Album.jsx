import {TITLE} from "../constant/index.jsx";

const Album = () => {
    return (
        <div className='h-3/4 bg-black w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.Album}</div>
            </div>
        </div>
    );
};

export default Album;