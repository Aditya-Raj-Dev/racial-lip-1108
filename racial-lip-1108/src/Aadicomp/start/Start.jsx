import React from 'react'
import "./Start.css"
import { Heading } from '@chakra-ui/react'
const Start = () => {
  return (
    <div className='mobile'>
        <img src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.3" alt="" className='stimg'/>
          <div>
              <div className='detail'>
              <Heading as='h3' size='md' className='head'>
                Start your fundraiser
                </Heading>
                <p>It’ll take only 2 minutes. Just tell us a few details 
                    about you and the ones you are raising funds for.</p>
              </div>
              <div className='detail'>
              <Heading as='h3' size='md' className='head'>
              Share your fundraiser
                </Heading>
                <p>All you need to do is share the fundraiser with your 
                    friends and family. In no time, support will start pouring in.</p>
              </div>
              <div className='detail'>
              <Heading as='h3' size='md' className='head'>
              Withdraw Funds
                </Heading>
                <p>The funds raised can be withdrawn without any hassle directly to your bank account..</p>
              </div>
          </div>
          <video src="https://www.ketto.org/assets/videos/screen_recording.webm" className='video'>
            

          </video>
    </div>
  )
}

export default Start