import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {FaFacebookSquare}  from "react-icons/fa";



function Ak_card() {
    const [data,setData] = useState([])
   const {id} = useParams();
//    console.log(id);



   useEffect(()=>{
   axios.get(`http://localhost:8080/ak_data/${id}`).then((r)=>setData(r.data))
},[])


console.log(data);


  return (
    <div>
    

    <div  id="ak_card1">
   

   <h4>This fundraiser is in an urgent need of funds</h4>
    </div>


   <div id="ak_card2">
    <h1>{data.title}</h1>
   </div>



   <div id="ak_col_card3">


                    <div id="ak_col1">

                        <div id="ak_col1_img">
                            <img src={data.image} alt="" />
                        </div>




                    </div>







                 <div id="ak_col2">
    
        <div id="ak_icon">

             <button id="ak_contribute">

                        <div style={{"display":"flex","fontSize":"large","gap":"2rem","margin":"auto"}}>
            <AiOutlineHeart/>
            CONTRIBUTE NOW

                            </div>

             </button>

             <div id="ak_fb">



                
             <button id="ak_fb_btn">

                <div style={{"display":"flex","fontSize":"large","gap":"2rem","margin":"auto"}}>
                <FaFacebookSquare /> 
                Spread the Word

                    </div>

                </button>

             </div>

        </div>


               <div id="under_icon"> 
               Every Social media share can bring $200
               </div>



     <div id="ak_col2_fund">
         <h1> {data.fund}</h1>  
         <h4>raised of ${~~(Math.random()*1000000)}</h4>

     </div>




                    
                    
                    
                    
                    
                    
                    </div>

     <div id="ak_flexbox">
  <h5>{data.Support}</h5> 

     </div>
     
                       




   </div>










 













    </div>
  )
}

export default Ak_card