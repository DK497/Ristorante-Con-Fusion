import * as Actiontypes from './Actiontype'

export const prom=(state={
       isloading:true,errmss:null,promos:[]
},action)=>{
      switch(action.type){
        case Actiontypes.PROMOS_ADDED:
            return{...state, isloading:false,errmss:null,promos:action.payload}
        case Actiontypes.PROMOS_LOADING:
            return{...state, isloading:true,errmss:null,promos:[]}
        case Actiontypes.PROMOS_FAILED:
            return{...state, isloading:false,errmss:action.payload,promos:[]}
          default:return state
      }
}