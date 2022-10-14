import React from 'react'
import Category from "./Category"
import Main from "./Main";
import "./ashish.css"

function Ak_layout() {
  return (
    <div>
         <div id="ak_main">
          

          <div id="ak_main1">


          <h1 id="ak_line1"> Save A Child Every Months</h1>

          <h2 id="ak_line2">
          Join monthly donors with Social Impact Plan and start saving needy children every month
          </h2>

          <button id="main_btn">Start Giving Monthly</button>


             
          </div>



        </div>
      <div style={{"display":"flex"}}>


<Category/>
<Main/>







    </div>
    </div>
  )
}

export default Ak_layout