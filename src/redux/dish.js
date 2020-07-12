import * as Actiontypes from './Actiontype'


export const Dish=(state={
    isloading:true,errmss:null,dishes:[]},action)=>{
      switch(action.type){
          case Actiontypes.DISH_ADDED:
              return{...state, isloading:false,errmss:null,dishes:action.payload}
          case Actiontypes.DISH_LOADING:
              return{...state, isloading:true,errmss:null,dishes:[]}
          case Actiontypes.DISH_FAILED:
              return{...state, isloading:false,errmss:action.payload}
          default:return state
      }
}