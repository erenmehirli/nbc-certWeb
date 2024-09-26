import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import RoutePath from './routers/RoutePath';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <MainNavbar />
     <RoutePath/>

<Footer/>
    </div>
  );
}

export default App;
