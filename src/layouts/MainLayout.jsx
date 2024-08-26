import { useState, useEffect } from "react";
import LoadingScreen from "../component/LoadingScreen.jsx";
import{Outlet} from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import ScrollToTop from "../component/ScrollToTop.jsx";


const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust this time as needed

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <ScrollToTop/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default MainLayout

