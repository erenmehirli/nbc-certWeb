import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Documents from "../pages/Documents";
import Contact from "../pages/Contact";
import SeraGaziEgitim from "../pages/SeraGazıEgitim";
import KimyasalDegerlendirmeEgitim from "../pages/KimyasalDegerlendirmeEgitimi";
import KozmetikUrunGuvenlilik from "../pages/KozmatikUrunGuvenlilik";
import SeraGazi from "../pages/SeraGazi";
import KimyaSektoru from "../pages/KimyaSektoru";
import AhsapUrun from "../pages/AhsapUrun";
import TurkReach from "../pages/TurkReach";



const RoutePath = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sera-gazı-eğitim' element={<SeraGaziEgitim />} />
          <Route path='/kimyasal-degerlendirme-egitim' element={<KimyasalDegerlendirmeEgitim />} />
          <Route path='/kozmetik-urun-guvenlilik' element={<KozmetikUrunGuvenlilik />} />
          <Route path='/sera-gazi' element={<SeraGazi />} />
          <Route path='/kimya-sektoru' element={<KimyaSektoru />} />
          <Route path='/ahsap-urun-belgelendirme' element={<AhsapUrun />} />
          <Route path='/turk-reach' element={<TurkReach/>} />





          

          
        </Routes>
    );
}

export default RoutePath;