import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Allcomp from '../Aadicomp/Allcomp/Allcomp'
import Ak_card from '../Ashish/Components/Ak_card'
import Ak_routes from '../Ashish/Components/Ak_routes'
import HowItWork from '../How It Works Page/HowItWork'
import Login from '../Ramana/Pages/Login'
import SearchQuery from '../Ramana/Pages/SearchQuery'
import Signup from '../Ramana/Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Allcomp/>}/>
            <Route path="/fundraisers" element={<Ak_routes/>}/>
            <Route path="/how" element={<HowItWork/>}/>
            <Route path="/ak_data/:id"  element={<Ak_card/>}/>
            <Route path="/search" element={<SearchQuery/>}/>
            <Route path="/signin" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes