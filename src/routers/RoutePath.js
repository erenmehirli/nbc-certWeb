import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Documents from "../pages/Documents";
import Contact from "../pages/Contact";



const RoutePath = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/contact' element={<Contact />} />


          

          
        </Routes>
    );
}

export default RoutePath;