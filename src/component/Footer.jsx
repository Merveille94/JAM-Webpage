import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";


const Footer = () => {
    return (
        <footer className='relative min-h-full bg-zinc-900 w-full py-4 px-8 md:px-14 bg-gradient-to-b from-zinc-900 to-violet-950'>

            <div className='container mx-auto relative flex flex-col items-center justify-center text-slate-200 text-lg z-20'>
                <p className='text-center text-xl md:text-3xl lg:text-5xl my-4'>Japhet@AdjeteyMinistry</p>

                <div className='flex items-center justify-center space-x-4 mt-1 md:mt-4 cursor-pointer'>
                    <FaInstagram size={20} className='hover:text-indigo-500'/>
                    <FaXTwitter size={20} className='hover:text-blue-500'/>
                    <FaFacebook size={20} className='hover:text-blue-700'/>
                    <GrYoutube size={20} className='hover:text-red-500'/>
                </div>

                <div className='flex flex-col items-center justify-center text-center mt-4'>
                    <span className='text-3xl'>Japhet.A</span>
                    <p className='text-sm my-2 text-center'>© 2024 Japhet Adjetey Ministry / Design by Merveille Manuele</p>
                    <p className='text-xs text-zinc-400 max-w-lg'>
                        This site was created and designed by Merveille Manuele. For more info, please contact:
                        <a href="mailto:Manuele07merveille@gmail.com" className='text-indigo-400'> Manuele07merveille@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
