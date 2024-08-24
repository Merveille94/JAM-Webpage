import { IMAGES, TITLE } from "../constant";
import { GrApple, GrSpotify, GrYoutube } from "react-icons/gr";

const Videos = () => {
    return (
        <section className="min-h-screen bg-gradient-to-t from-zinc-900 to-violet-950 w-full flex items-center justify-center py-8 px-4 md:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className='container flex justify-center items-center mx-auto mb-2 mt-6 xl:my-12'>
                    <div className='container mx-auto flex flex-col justify-center items-center pb-2 lg:pb-6'>
                        <div className='flex flex-col items-center justify-center pb-2'>
                            <div className='container mx-auto text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                {TITLE.video}
                            </div>
                        </div>
                        <div className='p-2 text-slate-200 text-sm md:text-md lg:text-lg xl:text-2xl'>{TITLE.videoText}
                        </div>
                    </div>
                </div>
                {/* Video Section */}
                <div className="mb-12">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px]"
                            src="https://www.youtube.com/embed/fCw_GL_-_DY?controls=1&autoplay=0&mute=0"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Albums Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {IMAGES.slice(0, 6).map((image, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800 rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-3"
                        >
                            <img
                                src={image}
                                alt={`Album ${index + 1}`}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Album {index + 1}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    This is a description of Album {index + 1}. Discover the latest tracks and enjoy the
                                    music.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" aria-label="YouTube"
                                       className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                                        <GrYoutube size={24}/>
                                    </a>
                                    <a href="#" aria-label="Apple Music"
                                       className="text-gray-400 hover:text-gray-100 transition-colors duration-300">
                                        <GrApple size={24}/>
                                    </a>
                                    <a href="#" aria-label="Spotify"
                                       className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                                        <GrSpotify size={24}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;
