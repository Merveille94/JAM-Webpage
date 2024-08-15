
const App = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-slate-900'>
            <div className='grid p-20 gap-3 h-full w-full grid-cols-4 grid-rows-3 xl:64 lg:32 md:16'>
                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl min-h-[50px]'></div>
                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl '></div>
                <div className='bg-amber-500 col-span-2 row-span-1 rounded-xl '></div>

                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl '></div>
                <div className='bg-amber-500 col-span-2 row-span-1 rounded-xl '></div>
                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl '></div>

                <div className='bg-amber-500 col-span-2 row-span-1 rounded-xl '></div>
                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl '></div>
                <div className='bg-amber-500 col-span-1 row-span-1 rounded-xl '></div>
            </div>
        </div>
    );
};

export default App;