import React from 'react'
import {Card,CardBody,CardText,CardTitle,CardImg,CardSubtitle} from 'reactstrap'
import {Loadingcomp} from './Loadingcomp'
import {baseUrl} from '../shared/baseUrl'
import {FadeTransform } from 'react-animation-components'


function Rendercard({item,isload,err}) {
    if(isload){
        return (<div className='container'>
            <div className='row'>
               <Loadingcomp />
               
            </div>
        </div>)
      }
     else if(err){
        return (<div className='container'>
          <div className='row'>
             <h3>{err}</h3>
          </div>
        </div>)
      }
    else {
      return (
      <FadeTransform  in
      transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
          <Card>
            <CardImg src={baseUrl+item.image} alt={item.name}/>
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
           {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
       <CardText>{item.description}</CardText>
            </CardBody>
            
        </Card>
      </FadeTransform>
    )}
}

export default Rendercard
