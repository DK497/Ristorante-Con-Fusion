import React ,{Component} from 'react';
import Headercomp from './Headercomp'
import Menucomp from './Menucomp';
import Dishdetail from './Dishdetail'
import Footercomp from './Footercomp';
import Homecom from './Homecom';
import About from './About';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Contactrdx from './Contactrdx';
import {postcomment,fetchdish,fetchcomment,fetchprom} from '../redux/Actioncreator'
import {actions} from 'react-redux-form'
import  {TransitionGroup,CSSTransition} from 'react-transition-group'


const mapStateToProps=(state)=>{
 return{
   dis:state.dis,prom:state.prom,lead:state.lead,com:state.com
 }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    addcom:(dishId,rating,author,comment )=>dispatch(postcomment(dishId,rating,author,comment)),
    fdish:()=>{ dispatch(fetchdish())},
    resetfeed:()=>{dispatch(actions.reset('feedback'))},
    fcomment:()=>{ dispatch(fetchcomment())},
    fprom:()=>{ dispatch(fetchprom())}
  }
}//Action creator returns an action object to dispatcher which we are
// supplying 
//as a function to addcom so it can be used inside maincom
export class Maincom extends Component {
  
  componentDidMount(){
    this.props.fdish()
    this.props.fcomment()
    this.props.fprom()}
  
  render() {
    const {dis,prom,lead,com,addcom}=this.props
    const Homepage=()=><Homecom dis={dis.dishes.filter((d)=>d.featured===true)[0]}
                        dishload={dis.isloading}
                        disherr={dis.errmss}
    prom={prom.promos.filter((d)=>d.featured===true)[0]}
    promload={prom.isloading}
    promerr={prom.errmss}
    lead={lead.filter((d)=>d.featured===true)[0]}/>

    const dwithid=({match})=>{
      return(
        <Dishdetail di={dis.dishes.filter(k=>k.id===parseInt(match.params.d,10))[0]}
                                  dishload={dis.isloading} disherr={dis.errmss}
        comm={com.comm.filter(k=>k.dishId===parseInt(match.params.d,10))}
        commerr={com.errmss} addcom={addcom}/>
      )//using this function addcom we can dispatch action to store
      //as now I have access to comment that the use just submited
    }
    return (
    <div >
     <Headercomp/>
      <div className="container" >
        <div className='row row-content'>
        <TransitionGroup>
        <CSSTransition >
        <Switch>
           <Route path='/home' component={Homepage}/>
           <Route exact path='/menu' 
           component={()=><Menucomp d ={dis}/>}/>
           <Route path='/menu/:d' component={dwithid}/>

           <Route exact path='/contact' 
           component={()=><Contactrdx reset={this.props.resetfeed}/>}/>

           <Route exact path='/about' 
           component={()=><About leaders={lead}/>}/>
           <Redirect to='/home'/>
         </Switch>
         </CSSTransition>
         </TransitionGroup>
        
        </div>
      </div>
      <Footercomp />
    </div>
  
      
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Maincom))

//mapDispatchtoPops makes addcom available to us in maincom