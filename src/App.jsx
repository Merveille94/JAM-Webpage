import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import EventPage from "./pages/EventPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import MainBio from "./component/MainBio.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='/discography' element={<AlbumPage/>}/>
           <Route path='/events' element={<EventPage/>}/>
           <Route path='/gallery' element={<GalleryPage/>}/>
           <Route path='/biography' element={<MainBio/>}/>
       </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;