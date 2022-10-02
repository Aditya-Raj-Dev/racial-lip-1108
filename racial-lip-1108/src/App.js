import logo from './logo.svg';
import './App.css';
import HowItWork from './How It Works Page/HowItWork';
import Footer from './Footer/Footer';
import Allcomp from './Aadicomp/Allcomp/Allcomp';
import Login from './Ramana/Pages/Login';
import Ak_routes from './Ashish/Components/Ak_routes';
import Navbar from './Aadicomp/Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
