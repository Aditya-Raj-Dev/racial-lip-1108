import React from 'react'
import Navbar from "../Navbar/Navbar"
import Topimg from "../Topimage/Topimg"
import TrendingFundraisers from "../Trending/TrendingFundraisers"
import Start from "../start/Start"
import Buttoncomp from "../Button/Button"
import Monthly from "../Monthlydonation/Monthly"
import Success from "../Sucess/Success"
import Footer from '../../Footer/Footer'

const Allcomp = () => {
  return (
    <div>
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
    </div>
  )
}

export default Allcomp