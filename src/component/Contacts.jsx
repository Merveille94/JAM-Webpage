import { TITLE, NEWS, CONTACTS } from '../constant';
// Assuming this contains title.contact, title.note, and title.info

const Contacts = () => {
    return (
        <section className='relative w-full min-h-screen'>
            {/* Background Image */}
            <img className='absolute top-0 left-0 h-full w-full object-cover bg-center bg-cover' alt='background' src={NEWS.news2}/>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80'></div>

            {/*main heading*/}
            <div className=' relative flex justify-center items-center mx-auto pt-16 xl:pt-16'>
                <div className='flex flex-col items-center justify-center pb-1'>
                    <div
                        className='text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        {TITLE.contactHead}
                    </div>
                    <div className='p-2 text-slate-50 text-xs md:text-sm lg:text-md xl:text-lg'>
                        {TITLE.contactSubHead}
                    </div>
                </div>
            </div>

            {/* Transparent & Blurred Container */}
            <div className='relative z-10 w-full h-full flex justify-center items-center px-8 py-6'>
                <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-md text-white p-8 gap-8 rounded-lg'>
                    {/* left Column (Contact Form) */}
                    <div className='p-6'>
                        <h3 className='text-2xl md:text-4xl font-bold mb-4'>{TITLE.contact}</h3>
                        <p className='mb-8 text-lg md:text-xl'>{TITLE.note}</p>
                        <form className='flex flex-col space-y-4'>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400'
                            />
                            <input
                                type='email'
                                placeholder='Your Email'
                                className='p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400'
                            />
                            <textarea
                                placeholder='Your Comment'
                                className='p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 h-32 resize-none'
                            ></textarea>
                            <button className='px-6 py-3 bg-violet-700 hover:bg-violet-500 text-white  rounded-lg transition-all duration-300'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* right Column (Contact Info) */}
                    <div className='bg-purple-900 bg-opacity-80 p-6 rounded-lg'>
                        <h3 className='text-2xl md:text-4xl font-bold mb-4'>{TITLE.info}</h3>
                        <div className='flex flex-col items-start justify-between my-7 h-3/4'>
                            <div className='p-3'>
                                <h4 className='text-md md:text-xl lg:text-2xl pb-2'>Address :</h4>
                                <p className='text-md'>{CONTACTS.address}</p>
                            </div>
                            <div className='p-3'>
                                <h4 className='text-md md:text-xl lg:text-2xl pb-2'>Managers Phone :</h4>
                                {CONTACTS.phone.map((phone, index) => (<p key={index} className='text-md'>{phone}</p>))}
                            </div>
                            <div className='p-3'>
                                <h4 className='text-md md:text-xl lg:text-2xl pb-2'>Email :</h4>
                                {CONTACTS.emails.map((email, index) => (<p key={index} className='text-md'>{email}</p>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
