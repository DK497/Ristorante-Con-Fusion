import {dishes} from '../shared/dishes'
import {comment} from '../shared/comment'
import {promotion} from '../shared/promotion'
import {leader} from '../shared/leader'

export const initialstate={
    
    dis:dishes,prom:promotion,
    lead:leader,com:comment
}
export const Reducer=(state=initialstate,action)=>{
    return state
}
