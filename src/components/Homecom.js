import React from 'react'
import Rendercard from './Rendercard'



function Homecom(props) {
    return (
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <Rendercard item={props.dis}
                                isload={props.dishload}
                                err={props.disherr}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <Rendercard item={props.prom}
                        isload={props.promload}
                                err={props.promerr}
                    />

                </div>
                <div className='col-12 col-md m-1'>
                  <Rendercard item={props.lead}
                                   isload={props.leadload}
                                   err={props.leaderr}/>

                </div>
            </div>
        </div>
    )
}

export default Homecom
