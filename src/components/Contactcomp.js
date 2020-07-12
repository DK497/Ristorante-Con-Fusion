import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,FormGroup,Label,Input,Col, Button, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom'

//REact forms using state
class Contactcomp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             fn:'',ln:'',pn:'',email:'',agree:'',contype:'Tel.',mess:'',
             touched:{fn:false,ln:false,email:false,pn:false}
        }
        this.handleblur=this.handleblur.bind(this)
    
    }
    handleinputchange=(e)=>{
          const v=e.target.value
          const n=e.target.name
          this.setState({
              [n]:v
          })

    }
    handlesubmit=(e)=>{
        alert('current state is :'+JSON.stringify(this.state))
        e.preventDefault()
        
    }
    handleblur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }
    validate(fn,ln,pn,email){
       const error={ fn:'',ln:'',pn:'',email:''}

       if(this.state.touched.fn && fn.length<3)   
       {error.fn='First name should be greater than 3 character'}
       else if(this.state.touched.fn&&fn.length>15)   
       {error.fn='First name should be less than 15 character'}

       if(this.state.touched.ln&&ln.length<3)   
       {error.ln='LAst name should be greater than 3 character'}
       else if(this.state.touched.ln&&ln.length>15)   
       {error.ln='last name should be less than 15 character'}
      
       const reg1=/^[7-9][0-9]{9}$/
       if(this.state.touched.pn && !reg1.test(pn))
       {error.pn='It should contain only valid mobile INdian number'}

       const reg2=/^\w+@[a-z]+.com$/
       if(this.state.touched.email&& !reg2.test(email))
       {error.email='It should be valid email'}

       return error

    }
    
    render(){
        const {fn,ln,pn,email}=this.state
        const errors=this.validate(fn,ln,pn,email)
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
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                 <div className='col-12'><h3>Send US Your Feedback</h3></div>
                 <div className='col-12 col-md-9'>
                     <Form onSubmit={this.handlesubmit}>
                        <FormGroup row>
                        <Label htmlFor='fn' md={2}>First Name</Label>
                        <Col md={10}><Input type='text' id='fn' name='fn'
                                      placeholder='First Name' value={this.state.fn}
                                      onChange={this.handleinputchange}
                                      valid={errors.fn===''}
                                      invalid={errors.fn!==''}
                                      onBlur={this.handleblur('fn')}/>
                                    <FormFeedback>{errors.fn}</FormFeedback></Col>
                        </FormGroup> 
                        <FormGroup row>
                        <Label htmlFor='ln' md={2}>Last Name</Label>
                        <Col md={10}><Input type='text' id='ln' name='ln' onChange={this.handleinputchange}
                                      placeholder='LAst Name' value={this.state.ln}
                                      valid={errors.ln===''}
                                      invalid={errors.ln!==''}
                                      onBlur={this.handleblur('ln')}/>
                                      <FormFeedback>{errors.ln}</FormFeedback></Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label htmlFor='pn' md={2}>Contact Tel.</Label>
                        <Col md={10}><Input type='text' id='pn' name='pn' onChange={this.handleinputchange}
                                      placeholder='Phone Number' value={this.state.pn}
                                      valid={errors.pn===''}
                                      invalid={errors.pn!==''}
                                      onBlur={this.handleblur('pn')}/>
                                      <FormFeedback>{errors.pn}</FormFeedback></Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label htmlFor='email' md={2}>Email ID</Label>
                        <Col md={10}><Input type='text' id='email' name='email' 
                        valid={errors.email===''}
                        invalid={errors.email!==''} onChange={this.handleinputchange}
                                      placeholder='Email Id' value={this.state.email}
                                      onBlur={this.handleblur('email')}/>
                                      <FormFeedback>{errors.email}</FormFeedback></Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='agree' onChange={this.handleinputchange} value={this.state.agree}/>
                                        <strong>May We Contact you</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3,offset:1}}>
                                <Input type='select' name='contype' onChange={this.handleinputchange} value={this.state.contype}>
                                <option>Tel.</option>
                                <option>Email</option></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label htmlFor='mess' md={2}>Feedback</Label>
                        <Col md={10}><Input type='textarea' id='mess' onChange={this.handleinputchange} name='mess'
                                      placeholder='Comments' rows='12' value={this.state.mess}/></Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2}}>
                                <Button type='submit' color='success'>Send</Button>
                            </Col>
                        </FormGroup>
                     </Form>
                 </div>
            </div>
        </div>
    );
}
}
export default Contactcomp