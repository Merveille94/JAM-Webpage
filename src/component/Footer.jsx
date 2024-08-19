import bgImage from '../assets/ok.jpg';
import { GrYoutube } from "react-icons/gr";
import {
    FaXTwitter,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='relative h-3/4 bg-zinc-900 w-full py-2 px-8 md:px-14'>
            <div className='relative w-full flex items-center justify-end bg-violet-900'>
                <img className='w-full md:w-[30%] h-auto' alt='background image brown' src={bgImage} />
                <div className='absolute inset-0 bg-gradient-to-b from-zinc-900/100 to-zinc-900/60'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-zinc-900/100 to-zinc-900/20'></div>
            </div>
            <div className='container absolute inset-0 flex flex-col items-center justify-center text-slate-200 text-lg z-30'>
                <p className='text-md md:text-3xl lg:text-5xl'>Japhet@AdjeteyMinistry</p>
                <div className='flex items-center justify-between mt-1 md:mt-4 cursor-pointer'>
                    <FaInstagram size={15} className='m-2'/>
                    <FaXTwitter size={15}  className='m-2'/>
                    <FaFacebook size={15}  className='m-2'/>
                    <GrYoutube size={15}  className='m-2'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span>Japhet.A</span>
                    <p className='text-sm my-4'>© 2024 Japhet Adjetey Ministry / Design by Merveille Manuele </p>
                    <p className='text-xs text-zinc-600 max-w-lg text-center'>This site was created and design from
                        scratch by Merveille Manuele no Template or cloning was used in the making of this site for
                        collaboration or info pleas contact @Merveille94 on github or Manuele07merveille@gmail.com
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;