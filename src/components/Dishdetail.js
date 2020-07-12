import React,{Component} from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,
Breadcrumb,BreadcrumbItem,Button,Modal,ModalHeader,ModalBody,Row,Col, Label} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control,LocalForm,Errors} from 'react-redux-form'
import {Loadingcomp} from './Loadingcomp'
import {baseUrl} from '../shared/baseUrl'
import { Fade, Stagger } from 'react-animation-components'

const required=(val)=>val&&val.length
const maxlength=(len) =>(val)=>!(val)||(val.length<=len)
const minlength=(len) =>(val)=>(val)&&(val.length>=len)

class Dishdetail extends Component {
  constructor(props) {
    super(props)
  this.state={
     mc:false
  }
    
  }
  appearmodal=()=>{
    this.setState({
      mc:!this.state.mc
    })
  }
  handlesub=(values)=>{
    this.appearmodal()
    this.props.addcom(this.props.di.id,values.rating,values.yn,values.feed)
  
}
  render() 
  { const {di,comm,dishload,disherr} = this.props
     if(dishload){
       return (<div className='container'>
           <div className='row'>
              <Loadingcomp/>
           </div>
       </div>)
     }
    else if(disherr){
       return (<div className='container'>
         <div className='row'>
            <h3>{disherr}</h3>
         </div>
       </div>)
     }
      else if(di){
       
         const com=comm.map((c)=>{
            return(
                
                  <li key={c.id}>
                  <p>{c.comment}</p>
                  <p>---{c.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                </li>
                
            )
        })
      
    return (
        <div className='container'>
            <div className='row'>
              <Breadcrumb >
                <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
                <BreadcrumbItem active>{di.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className='col-12'>
                 <h3>{di.name}</h3><hr/>
              </div>
            </div>
            <div className='row'>
            <div className='row-content col-12 col-md-5 mt-4'>
           
            <Card>
                   <CardImg width='100%' src={baseUrl+di.image} alt={di.name}/>
                   <CardBody>
                     <CardTitle>{di.name}</CardTitle>
                     <CardText>{di.description}</CardText> 
                   </CardBody>
            </Card>
           
            </div>
             <div className='row-content col-12 col-md-5 mt-4'>
                <h2>Comment</h2>
                   <ul>
                   <Stagger in>
                     <Fade in>
                       {com}
                     </Fade>
                   </Stagger>
                    
                     
                    
                   
                   </ul>
                  
                <Button onClick={this.appearmodal} outline color='secondary'><span className='fa fa-pencil fa-lg'></span>Submit Content</Button>
               <Modal isOpen={this.state.mc} toggle={this.appearmodal}> 
                 <ModalHeader>Submit Comment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span className='float-right' 
                                onClick={this.appearmodal}>&times;</span>
                  </ModalHeader>
                 <ModalBody>
                 <LocalForm onSubmit={(values)=>this.handlesub(values)}>
                 <Row className='form-group'>
                       <Label htmlFor='rating' md={6}>Rating</Label>
                       <Col md={12}>
                            <Control.select name='rating' model='.rating'
                              className='form-control' >
                                 <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                             </Control.select>
                        </Col>
                 </Row>
                 <Row className='form-group'>
                        <Label htmlFor='yn' md={6}>Your Name</Label>
                        <Col md={12}><Control.text model='.yn' id='yn' name='yn'
                                      placeholder='Your Name' className='form-control'
                                      validators={{required,
                                        minLength:minlength(3),maxLength:maxlength(15)}}
                                      />
                                      <Errors className='text-danger' model='.yn' show='touched'
                                          messages={{required:'Required',minLength:'must be greater than 2 character',
                                          maxLength:'Must be less than 15 character'}}/>
                                    </Col>
                  </Row> 
                  <Row className='form-group'>
                        <Label htmlFor='feed' md={2}>Feedback</Label>
                        <Col md={12}><Control.textarea model='.feed'
                        className='form-control' id='feed'  name='feed'
                                      placeholder='Comments' rows='8' /></Col>
                  </Row>
                  <Row className='form-group'>
                            <Col md={{size:10}}>
                                <Button type='submit' color='success'>Send</Button>
                            </Col>
                        </Row>
                 </LocalForm>
                 </ModalBody>
               </Modal>
                
             </div>
            </div>
        </div>
    )}
    return (

        <div></div>
    )
    
    
}
}

export default Dishdetail
