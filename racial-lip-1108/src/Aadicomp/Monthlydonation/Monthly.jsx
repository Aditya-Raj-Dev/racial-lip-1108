import React from 'react'
import "./Monthly.css"
import { Heading } from '@chakra-ui/react'
import leftimg from "./monthlyleft.png"
import cause from "./cause.png"
import why from "./why.png"

const Monthly = () => {
  return (
    <div className='whycause'>
            <div className='montly'> 
            <img src={leftimg} alt="" />
            </div>
             <div style={{marginBottom:"10rem"}}>
                <img src={cause} alt="" />
             </div>
             <div style={{marginBottom:"10rem"}}>
                <img src={why} alt="" />
             </div>
    </div>
  )
}

export default Monthly