import Navbar from "../component/Navbar.jsx";
import Hero from "../component/Hero.jsx";
import Bio from "../component/Bio.jsx";
import Album from "../component/Album.jsx";
import Event from "../component/Event.jsx";
import News from "../component/News.jsx";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Bio/>
            <Album/>
            <Event/>
            <News/>
        </>
    );
};

export default HomePage;