import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gethelp } from '../../Redux/Appredux/appaction';
import Ak_cards from './Ak_cards';
import "./ashish.css"



// import Ak_cards from './Ak_cards'





function Main() {

  
  const data1 = useSelector((state)=>state.AshishReducer.data)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(gethelp())
  },[])
  // console.log(data);

console.log(data1)




  return (
    <div    id="ak_1" >

        <div>
            <input   id="ak_2"  type="text"     placeholder='Search for a Fundraisers'/>
        </div>

        <div id="ak_3">
                         

                         <div id="ak_opt">





                                <p  id="ak_4"
                                           
                                              >Showing fundraisers for</p>



                                            <select   id="ak_filterbox"
                                            style={{
                                                "borderRadius":"1rem",
                                                "lineHeight":"20px",
                                                "height":"30px",
                                                "color":"rgb(1,191,189)",

                                                "width":"180px",
                                                "fontSize":"15px",
                                                "border":"0.5px solid rgb(1,191,189) "
                                            }}
                                            
                                            
                                            > 

                                            <option value="All Categories">All Categories</option>
                                            <option value="Education">Education</option>
                                            <option value="Medical">Medical</option>
                                            <option value="Women & Girls">Women & Girls</option>
                                            <option value="Animals">Animals</option>
                                            <option value="Creative">Creative</option>
                                            <option value="Food & Hunger">Food & Hunger</option>
                                            <option value="Environment">Environment</option>
                                            <option value="Children">Children</option>
                                            <option value="Memorial">Memorial</option>
                                            <option value="Others">Others</option>
                                            </select>




                          
           



                                
                                <p  style={{
                                            "marginTop":"7px",
                                            "fontWeight":"400",
                                            "fontFamily":"Source Sans Pro",
                                            "color":" #444444"
                                            }}  >Under</p>



                                            
                            <select   id="ak_filterbox"
                                            style={{
                                                "borderRadius":"1rem",
                                                "lineHeight":"20px",
                                                "height":"30px",
                                                "color":"rgb(1,191,189)",

                                                "width":"180px",
                                                "fontSize":"15px",
                                                "border":"0.5px solid rgb(1,191,189) "
                                            }}
                                            
                                            
                                            > 

                                            <option value="All Type">All Type</option>
                                            <option value="Tax Benefit">Tax Benefit</option>
                                            <option value="Medical">Trending</option>
                                            <option value="Women & Girls">Urgent Fund Requirement</option>
                                            <option value="Animals">Successfully Fund</option>
                                        
                                            
                                            </select>



                                                                        
                                <p  style={{
                                            "marginTop":"7px",
                                            "fontWeight":"400",
                                            "fontFamily":"Source Sans Pro",
                                            "color":" #444444"
                                            }}  >From</p>



                                            
                            <select   id="ak_filterbox"
                                            style={{
                                                "borderRadius":"1rem",
                                                "lineHeight":"20px",
                                                "height":"30px",
                                                "color":"rgb(1,191,189)",

                                                "width":"180px",
                                                "fontSize":"15px",
                                                "border":"0.5px solid rgb(1,191,189) "
                                            }}
                                            
                                            
                                            > 
                                        <option value="">All Locations</option>
                                            <option value="All Type">Delhi</option>
                                            <option value="Tax Benefit">Mumbai</option>
                                            <option value="Medical">Kochi</option>
                                            <option value="Women & Girls">Banglore</option>
                                            <option value="Animals">Lucknow</option>
                                            <option value="">Delhi</option>
                                            <option value="">Pune</option>
                                            <option value="">Kolkata</option>
                                            <option value="">Ranchi</option>
                                            <option value="">Patna</option>
                                        
                                            
                                            </select>


                         </div>
                                



        </div>



     <div  id="ak_grid">


        {
            data1 && data1.map(item=>(

                <Ak_cards key={item.id} item={item}   />
            ))
        }



     { <div id="ak_limit">

        <button  id="ak_btn" >
            Load more 
        </button>
     </div>
 }
 

     </div>







    </div>
  )
}

export default Main