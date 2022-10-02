
import "./Trending.css"
import { Heading } from '@chakra-ui/react'
import   axios  from "axios"
import { useEffect } from 'react'
import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Trendingcard from "./Trendingcard";

import { FreeMode} from "swiper";
SwiperCore.use([Virtual, Navigation, Pagination]);

const TrendingFundraisers = () => {
  const [data,setData]=useState([])
  const [load,setLoad]=useState(false)

  function getdata(){
      axios.get("http://localhost:8080/aadi_data")
      .then((r)=>{
        setLoad(true)
        console.log(r.data)
        setData(r.data)
      })
      .catch((e)=>{
      console.log(e)
      })
    }
   
    useEffect(()=>{
          getdata()
        },[])

    const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length:20 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  
  return (
    <div className='fundraise'>
         <Heading as='h2' size='xl'>
         Trending Fundraisers
         </Heading>
         <p>View the fundraisers that are most active right now</p>
     
     
      {/* swiper */}


         <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
        // slidesPerView={3}
        // spaceBetween={30}
        // freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[FreeMode, Pagination]}
        
      >
        {data && data.map((item) => (
          <SwiperSlide key={item.id}  >
              <Trendingcard 
              img={item.image}
              title={item.title}
              by={item.by}
              fund={item.fund}
              out={item.out}
              day={item.r_day}
              value={item.value}
              support={item.support}
              />
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  )
}

export default TrendingFundraisers