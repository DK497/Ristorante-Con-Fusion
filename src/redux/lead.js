import * as Actiontypes from './Actiontype'

export const lead=(state={
    isloading:true,errmss:null,leader:[]
},action)=>{
      switch(action.type){
        case Actiontypes.LEADER_ADDED:
            return{...state, isloading:false,errmss:null,leader:action.payload}

        case Actiontypes.LEADER_LOADING:
            return{...state, isloading:true,errmss:null,leader:[]}

        case Actiontypes.LEADER_FAILED:
            return{...state, isloading:false,errmss:action.payload,leader:[]}

          default:return state
      }
}