import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { TITLE } from '../constant';
import {Link} from "react-router-dom";

const ReservationComponent = () => {
    const [showPayment, setShowPayment] = useState(false);

    const handleReserveTicket = () => {
        setShowPayment(true);
    };

    const handleGoBack = () => {
        setShowPayment(false);
    };

    return (
        <section className='min-h-screen bg-gradient-to-t from-zinc-900 to-violet-950 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className="w-full max-w-lg mx-auto ">
                <div className='flex flex-col justify-center items-center my-12 md:mb-12'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            {TITLE.reservation}
                        </h1>
                        <p className='mt-4 text-slate-200 text-md md:text-lg lg:text-xl xl:text-2xl'>
                            Secure your spot at our next event! Reserve or buy your ticket now.
                        </p>
                    </div>
                    <Link to={'/'}><FaArrowLeft size={25} className=" text-3xl md:text-5xl text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300 mt-4 " /></Link>
                </div>

                {!showPayment ? (
                    <div className='bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg'>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Name</label>
                            <input className='w-full px-3 py-2 text-black rounded-md' type="text"
                                   placeholder="Your Name"/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Email</label>
                            <input className='w-full px-3 py-2 text-black rounded-md' type="email"
                                   placeholder="Your Email" required/>
                        </div>
                        <div className='mt-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Event Date</label>
                            <input
                                type="date"
                                className='w-full px-4 py-2 rounded-lg bg-white text-black border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition duration-300'
                                required
                            />
                        </div>
                        <div className='mt-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Number of Tickets</label>
                            <input
                                type="number"
                                className='w-full px-4 py-2 rounded-lg bg-white text-black border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition duration-300'
                                placeholder="1"
                                min="1"
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-4 my-4'>
                            <label className='block text-white text-sm font-bold mb-1'>Additional Notes</label>
                            <textarea
                                className='w-full px-4 py-2 rounded-lg bg-white text-black border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition duration-300'
                                placeholder="Any additional requests or information"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className='text-center mt-3'>
                            <button
                                onClick={handleReserveTicket}
                                className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300'
                            >
                                Reserve Ticket
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-8 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg'>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Ticket Type</label>
                            <select className='w-full px-3 py-2 text-black rounded-md'>
                                <option value="general">General Admission - $50</option>
                                <option value="vip">VIP - $100</option>
                                <option value="super-vip">Super VIP - $200</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Number of Tickets</label>
                            <input className='w-full px-3 py-2 text-black rounded-md' type="number" min="1" max="10"
                                   defaultValue="1"/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2'>Payment Method</label>
                            <select className='w-full px-3 py-2 text-black rounded-md'>
                                <option value="paypal">PayPal</option>
                                <option value="credit-card">Credit Card</option>
                                <option value="bank-transfer">Bank Transfer</option>
                            </select>
                        </div>
                        <div className='text-center'>
                            <button
                                className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300'>
                                Pay Now
                            </button>
                        </div>
                        <div className='mt-4 text-center'>
                            <FaArrowLeft size={20} onClick={handleGoBack}
                                         className='text-slate-200 hover:text-violet-400 cursor-pointer transition-all duration-300'/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReservationComponent;
