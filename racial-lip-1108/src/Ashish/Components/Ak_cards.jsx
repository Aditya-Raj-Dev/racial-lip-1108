import React from 'react'
// import img1 from "../Image/image"
import {useNavigate}  from "react-router-dom"
function Ak_cards({item}) {


    const imgarr = ["https://tse4.mm.bing.net/th?id=OIP.HMs9HuKLY1QX0K32hOSciwHaE8&pid=Api&P=0","https://in.images.search.yahoo.com/images/view;_ylt=Awr1TjptyjZjxXgf7bIO9olQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQ0ZDY2YWFmNDQwYWRmN2UzMDQ0OTYyZmNhMjBiOTdhBGdwb3MDMTUEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Drandom%2Bimages%2Bof%2Bdoctor%26ei%3DUTF-8%26vm%3Dr%26type%3Dfc_ADDA49F0A8D_s58_g_e_d091821_n9998_c25%26fr%3Dyhs-fc-2461%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26hsimp%3Dyhs-2461%26hspart%3Dfc%26param1%3D7%26param2%3DeJwti0EOgyAQRa8yS00MAgKWeIyuGuOCKlUCglEbm56%252BQ9LM5r3%252F%252F8xu6rvh%252FmCUCq5FXw0RXWt9Q8wV1ezGGcqIwiWC2zK1hHFOFCNM5ulsE6YuIr4N0pq%252BLgRTS0KhuFyc0nVAPIFRQjvAQIkOPkqUYLYt2Ms%252BvTtr2bSkUVD45VxDBcF5C7MdfSphXPa02ppRRWg%252BOMzL7O7%252F8gPhazrs%26tab%3Dorganic%26ri%3D15&w=408&h=612&imgurl=media.istockphoto.com%2Fphotos%2Fcheerful-indian-female-doctor-against-white-background-picture-id580101972%3Fk%3D6%26m%3D580101972%26s%3D612x612%26w%3D0%26h%3DBIm16rJ2qJC9T_bReb8rHnDZyiXBHuzHm1vg_uVHnPY%3D&rurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Findian-female-doctor&size=25.6KB&p=random+images+of+doctor&oid=44d66aaf440adf7e3044962fca20b97a&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=yhs-fc-2461&tt=Best+Indian+Female+Doctor+Stock+Photos%2C+Pictures+%26+Royalty-Free+Images+...&b=0&ni=105&no=15&ts=&vm=r&tab=organic&sigr=cqzndHk1gpf8&sigb=o6BRi4cLX5Zp&sigi=ALFXXt00q21i&sigt=HNLMdBVu.NBe&.crumb=sWUuflEUhFd&fr=yhs-fc-2461&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&hsimp=yhs-2461&hspart=fc&type=fc_ADDA49F0A8D_s58_g_e_d091821_n9998_c25&vm=r&param1=7&param2=eJwti0EOgyAQRa8yS00MAgKWeIyuGuOCKlUCglEbm56%2BQ9LM5r3%2F%2F8xu6rvh%2FmCUCq5FXw0RXWt9Q8wV1ezGGcqIwiWC2zK1hHFOFCNM5ulsE6YuIr4N0pq%2BLgRTS0KhuFyc0nVAPIFRQjvAQIkOPkqUYLYt2Ms%2BvTtr2bSkUVD45VxDBcF5C7MdfSphXPa02ppRRWg%2BOMzL7O7%2F8gPhazrs","https://tse3.mm.bing.net/th?id=OIP.w4y0bOo_V87TbTisDfN-KwHaEK&pid=Api&P=0"]
    // console.log(item)
    const navigate = useNavigate()

    // console.log(Math.random(imgarr))
  return (
    <div>

   <div  onClick={()=>navigate(`/ak_data/${item.id}`)} id="ak_box1">
      
                    <div id="ak_box1img">
                        <img src={item.image} alt="" />

                    </div>

                <div id="ak_title">
                    <h5 id="ak_titleh5">
                        {item.title}
                    </h5>

                </div>

                   <div id="roundimg"  >
                    {/* <img src={Math.random(imgarr)} alt={Math.random(imgarr)} /> */}
                
                    <img src="https://tse1.mm.bing.net/th?id=OIP.joa-j9H6FpTPLBQMZK9MLAHaEL&pid=Api&P=0" alt="" />

                    <p>{item.by}</p>
                   </div>


                   <div id="ak_fund">
                    <h4>{item.fund} </h4>
                    <h6>raised</h6> 

      
                   </div>

                   <hr id="ak_line"/>

                   <div id="ak_last">
                    <h5>
                        Last Donation {~~(Math.random()*10)} months ago
                    </h5>

                   </div>





                   <div id="ak_end">

                <div style={{"display":"flex","gap":"0.5rem"}}>

                     <h4 style={{"color":"#444444"}}>{item.r_day} </h4>
                     <h6 style={{"color":"#444444"}} >Days Left</h6>
                </div>

                <div style={{"display":"flex","gap":"0.5rem"}}>

                     <h4 style={{"color":"#444444"}}>{item.support} </h4>
               <h6 style={{"color":"#444444"}}>Supporters</h6>
                </div>

    



                   </div>







   </div>





    </div>
  )
}

export default Ak_cards