import Hero from "../component/Hero.jsx";
import Bio from "../component/Bio.jsx";
import Album from "../component/Album.jsx";
import Event from "../component/Event.jsx";
import News from "../component/News.jsx";
import Testimonies from "../component/Testimonies.jsx";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Bio/>
            <Album/>
            <Event/>
            <Testimonies/>
            <News/>
        </>
    );
};

export default HomePage;