import * as Actiontypes from './Actiontype'

export const com=(state={
      errmss:null,comm:[]
},action)=>{
      switch(action.type){
        case Actiontypes.COMMENTS_ADDED:
            return{...state, errmss:null,comm:action.payload}
        case Actiontypes.COMMENTS_FAILED:
                return{...state, errmss:action.payload,comm:[]}
          case Actiontypes.ADD_COMMENT:
              var comment=action.payload
              return {...state,comm:state.comm.concat(comment)}//creates a new object
          default:return state
      }
}