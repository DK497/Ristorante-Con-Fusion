import React, { Component } from 'react'
import {Navbar, NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,
Button,Modal,ModalHeader,Form, FormGroup, Label, Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Headercomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             io:false,im:false
        }
    }
    togglenav=()=>{
        this.setState({
            io:!this.state.io 
        })
    }
    togglemodal=()=>{
        this.setState({
            im:!this.state.im
        })
    }
    handleLogin=(e)=>{
        this.togglemodal()
        alert("Username:"+this.user.value+
               'Password:'+this.pass.value+
               'Remember:'+this.remember.checked)
               e.preventDefault()
    }
    
    render() {
        return (
            <>
              <Navbar dark expand='md' >
                <div className='container'>
                   <NavbarToggler onClick={this.togglenav}/>
                   <NavbarBrand className='mr-auto'  href='/'>
                      <img src="assets/images/logo.png" height='31' 
                      width='40' alt='Ristorante logo'/>    
                   </NavbarBrand>
                   <Collapse isOpen={this.state.io} navbar>
                   <Nav navbar>
                       <NavItem>
                       <NavLink className='nav-link ' to='/home'>
                               <span className='fa fa-home fa-lg'></span>
                               Home</NavLink>
                               </NavItem>
                               <NavItem>
                        <NavLink className='nav-link' to='/about'>
                               <span className='fa fa-info fa-lg'></span>
                               About</NavLink>
                               </NavItem>
                               <NavItem>
                       <NavLink className='nav-link ' to='/contact'>
                               <span className='fa fa-address-card fa-lg'></span>
                               Contact</NavLink> 
                               </NavItem>
                               <NavItem>
                       <NavLink className='nav-link' to='/menu'>
                               <span className='fa fa-list fa-lg'></span>
                               Menu</NavLink>                      
                       </NavItem>
                   </Nav>
                   <Nav className='ml-auto' navbar>
                         <NavItem>
                             <Button onClick={this.togglemodal}><span className='fa fa-sign-in fa-lg'></span>Login</Button>
                         </NavItem>
                     </Nav>
                   </Collapse>
                </div>
             </Navbar> 
             <Jumbotron dark >
                 <div className="container" dark color='warning'>
                     <div className="row row-header">
                         <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a 
                                unique fusion experience. Our lipsmacking creations will tickle 
                                your culinary senses!</p>
                         </div>
                     </div>
                 </div>
                 </Jumbotron>  
                 <Modal isOpen={this.state.im } toggle={this.togglemodal} >
                     <ModalHeader className='ml-4 mr-3 bg-warning'>Login</ModalHeader>
                     <Form className='ml-4 mr-3 mb-3' onSubmit={this.handleLogin}>
                     <FormGroup>
                             <Label htmlFor='user'>Username</Label>
                             <Input type='text' id='user' name='user'
                             innerRef={(np)=>this.user=np}/>
                         </FormGroup>
                         <FormGroup>
                             <Label htmlFor='pass'>Password</Label>
                             <Input type='text' id='pass' name='pass'
                              innerRef={(i)=>this.pass=i}/>
                         </FormGroup>
                         <FormGroup>
                             <Label check className='ml-4'>
                                 <Input type='checkbox' name='remem'
                                  innerRef={(i)=>this.remember=i}/>
                                 Remember Me
                             </Label>
                         </FormGroup>
                         <Button className='mr-4 bg-primary' type='submit' value='submit' >Login</Button>
                     </Form>
                     
                 </Modal>
            </>
        )
    }
}

export default Headercomp
