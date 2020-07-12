import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Label,Row,Col, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control,Form,Errors} from 'react-redux-form'

const required=(val)=>val&&val.length
const maxlength=(len) =>(val)=>!(val)||(val.length<=len)
const minlength=(len) =>(val)=>(val)&&(val.length>=len)
const isnum=(val)=>!isNaN(Number(val))
const validemail=(val)=>/^[A-Z0-9._%+-]+@[A-Z0-9]\.[A-Z]{2-4}$/i.test(val)

class Contactrdx extends Component{
    
    
    handlesubmit=(values)=>{
        alert('current state is :'+JSON.stringify(values))
        this.props.reset()
      
    }
   
    
    
    render(){
        
        return(
        <div className="container">
            <div className='row'>
                    <Breadcrumb >
                      <BreadcrumbItem>
                           <Link to='/home'>Home</Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Contactus</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contactus</h3><hr/>
                    </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href='mailto:confusion@food.net'><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                 <div className='col-12'><h3>Send US Your Feedback</h3></div>
                 <div className='col-12 col-md-9'>
                     <Form model='feedback' onSubmit={(values)=>this.handlesubmit(values)}>
                        <Row className='form-group'>
                        <Label htmlFor='fn' md={2}>First Name</Label>
                        <Col md={10}><Control.text model='.fn' id='fn' name='fn'
                                      placeholder='First Name' className='form-control'
                                      validators={{required,minLength:minlength(3),maxLength:maxlength(15)}}
                                      />
                                      <Errors className='text-danger' model='.fn' show='touched'
                                          messages={{required:'Required',minLength:'must be greater than 3 character',
                                                      maxLength:'Must be less than 15 character'}}/>
                                    </Col>
                        </Row> 
                        <Row className='form-group'>
                        <Label htmlFor='ln' md={2}>Last Name</Label>
                        <Col md={10}><Control.text model='.ln' id='ln' name='ln' 
                                      placeholder='LAst Name' validators={{required,
                                        minLength:minlength(3),maxLength:maxlength(15)}} 
                                        className='form-control' />
                                      <Errors className='text-danger' model='.ln' show='touched'
                                          messages={{required:'Required',minLength:'must be greater than 3 character',
                                                      maxLength:'Must be less than 15 character'}}/>
                         </Col>
                        </Row>
                        <Row className='form-group'>
                        <Label htmlFor='pn' md={2}>Contact Tel.</Label>
                        <Col md={10}><Control.text model='.pn' id='pn' name='pn' 
                                      placeholder='Phone Number' className='form-control'
                                      validators={{required,
                                        minlength:minlength(3),maxlength:maxlength(15),isnum}} />
                                      <Errors className='text-danger' model='.pn' show='touched'
                                          messages={{required:'Required',minlength:'must be greater than 3 character',
                                                      maxlength:'Must be less than 15 character',
                                                      isnum:"must be a number"}}/>
                                   </Col>
                        </Row>
                        <Row className='form-group'>
                        <Label htmlFor='email' md={2}>Email ID</Label>
                        <Col md={10}><Control.text model='.email' id='email' name='email' 
                                    placeholder='Email Id'  className='form-control'
                                    validators={{required,validemail}} />
                                    <Errors className='text-danger' model='.pn' show='touched'
                                          messages={{required:'Required',validemail:'must be valid email'}}/>
                                     </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size:6,offset:2}}>
                                <div className='form-check'>
                                    <Label check>
                                        <Control.checkbox model='.agree'
                                         name='agree' className='form-check-input'
                                         />
                                        <strong>May We Contact you</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3,offset:1}}>
                                <Control.select name='contype' model='.contype'
                                className='form-control' >
                                <option>Tel.</option>
                                <option>Email</option></Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                        <Label htmlFor='mess' md={2}>Feedback</Label>
                        <Col md={10}><Control.textarea model='.mess'
                        className='form-control' id='mess'  name='mess'
                                      placeholder='Comments' rows='12' /></Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size:10,offset:2}}>
                                <Button type='submit' color='success'>Send</Button>
                            </Col>
                        </Row>
                     </Form>
                 </div>
            </div>
        </div>
    );
}
}
export default Contactrdx