


import axios from "axios"
import * as types from "./appactiontype"


export const gethelp=()=> async (dispatch)=>
{
   
    dispatch({type:types.GET_DATA_LOADING})
   return  axios.get(`http://localhost:8080/ak_data?_limit=${18}`)
    .then((r)=>{
        console.log(r.data)
        dispatch({type: types.GET_DATA_SUCESS,payload:r.data})
    })
    .catch(()=>dispatch({type:types.GET_DATA_FAIL}))

}