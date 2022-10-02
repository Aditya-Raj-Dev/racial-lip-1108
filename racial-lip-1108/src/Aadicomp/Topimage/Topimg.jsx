import React from 'react'
import { Heading ,Button} from '@chakra-ui/react'
import "./Topimg.css"

const Topimg = () => {
  return (
    <div className='topimg'>
       <div className='mediaimg'>
      <img src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.3" />
      </div>
       <div className='img'>
         <div className='fund'>
       
         <Heading as='h3' size='xl' >
          Need Funds to Pay For a Medical Emergency or Social Cause?
         </Heading>
          <br />
          
          {/* 2nd div */}
            <div className='data'>
              <div>
               <Heading as='h3' size='lg' className='people'>
               0%
               </Heading>
               <Heading as='h4' size='sm' className='donor'>
                PLATFORM FEE
               </Heading>
              </div>
              <div>
               <Heading as='h3' size='lg' className='people' >
                72 Lakh+
               </Heading>
               <Heading as='h4' size='sm' className='donor'>
                DONORS
               </Heading>
              </div>
              <div>
               <Heading as='h3' size='lg'  className='people'>
               3.2 Lakh+
               </Heading>
               <Heading as='h4' size='sm' className='donor'>
                FUNDRAISERS
               </Heading>
              </div>
            </div>
            {/* 3rd div */}
            <br />
            <Heading as='h4' size='md' className='people'>Ketto’s 0% Platform fees ensures maximum funds for you
            </Heading>
            <br />
            <Button colorScheme='teal' size='lg' backgroundColor={"#069395"} padding="1.8rem">
              Start a Fundraiser for FREE
             </Button>
          
                </div>
         </div>
    </div>
  )
}

export default Topimg