import React from 'react'
import {Card,CardImg,CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Loadingcomp} from './Loadingcomp'
import {baseUrl} from '../shared/baseUrl'

function Menucomp({d}) {
    const menu=d.dishes.map((di)=>{
        return(
        <div key={di.id} className='col-12 col-md-5 mt-5 '>
            <Card >
                <Link to={`/menu/${di.id}`}>
                  <CardImg width='100%' src={baseUrl+di.image} alt={di.name}/>
                  <CardImgOverlay>
                      <CardTitle className="mr-10" >{di.name}</CardTitle>
                        
                    </CardImgOverlay>
               </Link> 
                
            </Card>
        </div>
        )
    })
    if(d.isloading){
        return (<div className='container'>
            <div className='row'>
               <Loadingcomp/>
            </div>
        </div>)
      }
     else if(d.errmss){
        return (<div className='container'>
          <div className='row'>
             <h3>{d.errmss}</h3>
          </div>
        </div>)
      }
      else
       
        {return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                      <BreadcrumbItem>
                           <Link to='/home'>Home</Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>MENU</h3><hr/>
                    </div>
                </div>
                <div className='row'>
                     {menu}
                 </div>
                     
                
            </div>
        )}
    
}

export default Menucomp
