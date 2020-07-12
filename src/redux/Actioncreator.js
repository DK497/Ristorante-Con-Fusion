import * as Actiontypes from './Actiontype'
import {baseUrl}  from '../shared/baseUrl'

 
export const fetchcomment=()=>(dispatch)=>{
    
    return fetch(baseUrl+'comments')
    .then(res=>{
        if(res.ok){return res}
        else {
             var err=new Error('Error'+res.status+':'+res.statusText)
             err.response=res
              throw err
             }
             },err=>{
            var errmss=new Error(err.message)
            throw errmss
            })
            .then(res=>res.json())
            .then(com=>dispatch(commentsadd(com)))
            .catch(error=>dispatch(commentsfailed(error.message)))

}

export const commentsadd=(comment)=>({
    type:Actiontypes.COMMENTS_ADDED,
    payload:comment  
})

export const commentsfailed=(errmss)=>({
    type:Actiontypes.COMMENTS_FAILED,
    payload:errmss
})
export const postcomment=(dishId,rating,author,comment)=>(dispatch)=>{
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date=new Date().toISOString()
    return fetch(baseUrl+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(res=>{
        if(res.ok)
        {return res}
        else {
             var err=new Error('Error'+res.status+':'+res.statusText)
             err.res=res
              throw err
             }
             },err=>{
            var errmss=new Error(err.message)
            throw errmss
            }).then(res=>res.json())
            .then(dish=>dispatch(addcomment(dish)))
            .catch(error=>{ console.log('post comments', error.message)
            alert('Your comment could not be posted\nError: '+error.message) })
}

// function that creates action object and return plain JS objects
export const addcomment=(comment)=>{   
    return {
        type:Actiontypes.ADD_COMMENT,
        payload:comment
        //data that is sent back
    }
}

//fetchdish is a thunk as it is returning a funtion that cntains an
// inner function which gets access to dispatch
export const fetchdish=()=>(dispatch)=>{
    dispatch(dishloading(true))
    
    return fetch(baseUrl+'dishes')
       .then(res=>{
            if(res.ok){return res}
            else {
                 var err=new Error('Error'+res.status+':'+res.statusText)
                 err.response=res
                  throw err
                 }
                 },err=>{
                var errmss=new Error(err.message)
                throw errmss
                })
         .then(res=>res.json())
         .then(dish=>dispatch(dishadd(dish)))
         .catch(error=>dispatch(dishfailed(error.message)))

}
export const dishloading=()=>({
    type:Actiontypes.DISH_LOADING
})
export const dishfailed=(errmss)=>({
    type:Actiontypes.DISH_FAILED,
    payload:errmss
})
export const dishadd=(dish)=>({
    type:Actiontypes.DISH_ADDED,
    payload:dish  
})



export const fetchprom=()=>(dispatch)=>{
    dispatch(promloading(true))
    
    return fetch(baseUrl+'promotions')
            .then(res=>{
            if(res.ok){return res}
            else {
                 var err=new Error('Error'+res.status+':'+res.statusText)
                 err.response=res
                  throw err
                 }
                 },err=>{
                var errmss=new Error(err.message)
                throw errmss
                })
            .then(res=>res.json())
            .then(prom=>dispatch(promadd(prom)))
            .catch(error=>dispatch(promfailed(error.message)))

}
export const promloading=()=>({
    type:Actiontypes.PROMOS_LOADING
})
export const promfailed=(errmss)=>({
    type:Actiontypes.PROMOS_FAILED,
    payload:errmss
})
export const promadd=(prom)=>({
    type:Actiontypes.PROMOS_ADDED,
    payload:prom
})