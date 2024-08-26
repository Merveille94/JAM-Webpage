import{Outlet} from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import ScrollToTop from "../component/ScrollToTop.jsx";


const MainLayout = () => {

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

