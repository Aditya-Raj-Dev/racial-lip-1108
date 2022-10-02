import * as types from "./appactiontype"

const helpInitalState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const appReducer = (state = helpInitalState,{type,payload}) => {
       
    switch(type)
    {
      case types.GET_DATA_LOADING:{
        return {...state,loading:true,error:false}
      }
      case types.GET_DATA_SUCESS:{
        return{...state,loading:false,error:false,data:payload}
      }
      case types.GET_DATA_FAIL:{
        return{...state,loading:false,error:true}
      }
    }
  
    return state;
  };

