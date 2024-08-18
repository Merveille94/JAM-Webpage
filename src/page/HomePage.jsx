import Navbar from "../component/Navbar.jsx";
import Hero from "../component/Hero.jsx";
import Bio from "../component/Bio.jsx";
import Album from "../component/Album.jsx";
import Event from "../component/Event.jsx";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Bio/>
            <Album/>
            <Event/>
        </>
    );
};

export default HomePage;