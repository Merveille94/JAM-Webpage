import {TITLE} from "../constant/index.jsx";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";

const Event = () => {
    return (
        <div className='h-3/4 bg-black w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex flex-col items-center justify-center w-[70%]'>
                        <div className='container mx-auto text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.gig}</div>
                        <div className='container flex items-center text-slate-200 mx-auto pt-2'><p className='max-w-xs'>Follow our ongoing concerts all over the world in 2022.</p></div>
                    </div>
                    <div className='p-2 hover:border-transparent border border-violet-700 rounded text-slate-200'><Link to={'/events'}>More Gigs</Link></div>
                </div>
                <div className='container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-1 grid-rows-5 gap-y-10 my-8 text-slate-200'>
                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500 pb-1'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1>27</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>August</p><p>21:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>KN Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'><p className='mr-2'>Buy Ticket</p><FaArrowRight size={15}/></div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1>25</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>March</p><p>18:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>KN Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md text-zinc-400'><p className='mr-2'>Buy Ticket</p><FaArrowRight size={15}/></div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1>23</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>April</p><p>10:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>KN Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'><p className='mr-2'>Buy Ticket</p><FaArrowRight size={15}/></div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1>21</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>June</p><p>20:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>KN Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'><p className='mr-2'>Buy Ticket</p><FaArrowRight size={15}/></div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1>19</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>July</p><p>11:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20} className='hidden md:block'/><p className='ml-2'>KN Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'><p className='mr-2'>Buy Ticket</p><FaArrowRight size={15}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;