import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import RoutePath from './routers/RoutePath';
import Footer from './components/Footer';

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
