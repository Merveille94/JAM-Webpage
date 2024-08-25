import {Link} from 'react-router-dom';
import {GoAlertFill} from "react-icons/go";

const NotFoundPage = () => {
    return (
        <section className='bg-zinc-900 text-slate-100 min-h-screen flex flex-col justify-center items-center'>
            <div className=' container mx-auto flex flex-col justify-center items-center'>
                <GoAlertFill size={150} className='text-yellow-400'/>
                <h1 className='mt-3'>Page Not Found</h1>
                <p className='text-blue-700 text-sm md:text-lg my-4'> This page does not exist or has not been built yet. Please</p>
                <button className='p-3 text-slate-100 bg-violet-700 rounded-xl font-semibold'><Link to={'/'}>Go Back</Link></button>
            </div>
        </section>
    )
}
export default NotFoundPage
