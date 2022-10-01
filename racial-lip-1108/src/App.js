
import logo from './logo.svg';
import './App.css';
import Navbar from './Aadicomp/Navbar/Navbar';
import Footer from './Footer/Footer';
import Topimg from './Aadicomp/Topimage/Topimg';
import TrendingFundraisers from './Aadicomp/Trending/TrendingFundraisers';
import Trendingcard from './Aadicomp/Trending/Trendingcard';
import Start from './Aadicomp/start/Start';

import Buttoncomp from './Aadicomp/Button/Button';
import Monthly from './Aadicomp/Monthlydonation/Monthly';
import Success from './Aadicomp/Sucess/Success';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Topimg/>
     <br/>
     <TrendingFundraisers/>
     <Start/>
     <br/>
     <br/>
     <Buttoncomp/>
     <Monthly/>
     <Success/>
      <Footer/>
      
    </div>
  );
}

export default App;
