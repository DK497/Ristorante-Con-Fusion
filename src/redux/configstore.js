import {createStore,combineReducers,applyMiddleware} from 'redux'
import {createForms} from 'react-redux-form'
import {com} from './comments'
import {Dish} from './dish'
import {lead} from './lead'
import {prom} from './prom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Initialfeedback } from './forms'

export const ConfigureStore=()=>{
    const store=createStore(//takes enhancer as its seond paramenter
             combineReducers({
                 dis:Dish,com:com,lead:lead,prom:prom,
                 ...createForms({
                     feedback:Initialfeedback 
                 })
             }),applyMiddleware(thunk,logger)
    )
    return store
}