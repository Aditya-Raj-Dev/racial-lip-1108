import React from 'react'
import { Button, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Progress } from '@chakra-ui/react'
import { BiTimeFive} from 'react-icons/bi'
import { BsFillHeartFill} from 'react-icons/bs'
import { IoLogoFacebook} from 'react-icons/io'


const Trendingcard = ({title,img,by,fund,out,day,value,support}) => {
 
  
  return (
   <div>
    <img src={img} alt="" style={{borderRadius:"5px"}} />
    <div className='trend'>
        <p className='bold'> {title}</p>
        <p style={{textAlign:"left",marginLeft:"10px"}}>{by}</p>
        <div className='outof'>
          <p className='bold'>{fund}</p>
          <p>raised out of {out}</p>
        </div>
        <Progress colorScheme='teal' size='sm' value={value} />
           <div className='timeheart'>
                <div className='time'>
               <BiTimeFive fontSize="25px"/>
                <p >{day} Day Left</p>
              </div>
                <div className='heart'>
                  <BsFillHeartFill color='red' fontSize="24px"/>
                  {support}
                </div>
           </div>

           <div style={{display:"flex",justifyContent:'space-between'}}>
            <Button colorScheme='facebook' size='lg' variant='outline' leftIcon={<IoLogoFacebook/>}>Share</Button>
            <Button colorScheme='teal' size='lg' backgroundColor={"#069395"} width="8.5rem">Donate</Button>
           </div>
    </div>
      
   </div> 
    
  )
}

export default Trendingcard