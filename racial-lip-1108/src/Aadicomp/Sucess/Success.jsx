import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from '@chakra-ui/react'
import "./success.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const Success = () => {
  return (
    <div className='success'>
        <center>
          <Heading as='h2' size='lg'  >
           Success Stories
          </Heading>
        </center>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
            
                  <img src="https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg" height="500px"/>
                
                <div>
                <Heading as='h4' size='md'>
                   My daughter finally gets to enjoy her childhood
                 </Heading>
                 <br />
                 <Heading as='h4' size='sm'>
                 My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!" - Prajakta (Mother)
                 </Heading>
                 </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
                
                  <img src="https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg" alt="" />
            
                <div>
                <Heading as='h4' size='md'>
                   My daughter finally gets to enjoy her childhood
                 </Heading>
                 <br />
                 <Heading as='h4' size='sm'>
                 My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!" - Prajakta (Mother)
                 </Heading>
                </div>
          
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
             
                  <img src="https://kettocdn.gumlet.io/media/banner/0/79/image/d0ab9b0b9bcc30ced6574c54d6b216ab895f90d5.jpg?w=auto&dpr=1.3" alt="" />
      
                <div>
                <Heading as='h4' size='md'>
                   My daughter finally gets to enjoy her childhood
                 </Heading>
                 <br />
                 <Heading as='h4' size='sm'>
                 My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!" - Prajakta (Mother)
                 </Heading>
                </div>
         
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
             
                  <img src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.3" alt="" />
              
                <div>
                <Heading as='h4' size='md'>
                   My daughter finally gets to enjoy her childhood
                 </Heading>
                 <br />
                 <Heading as='h4' size='sm'>
                 My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!" - Prajakta (Mother)
                 </Heading>
                </div>
           
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
               
                  <img src="https://kettocdn.gumlet.io/media/banner/0/96/image/0717875196afb641172a631c282e1875d76b8930.jpg?w=auto&dpr=1.3" alt="" />
             
                <div>
                <Heading as='h4' size='md'>
                   My daughter finally gets to enjoy her childhood
                 </Heading>
                 <br />
                 <Heading as='h4' size='sm'>
                 My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!" - Prajakta (Mother)
                 </Heading>
           
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    </div>
  )
}

export default Success