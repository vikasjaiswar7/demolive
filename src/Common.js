import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Common = (props) => {
    const img = 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80';
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lh-1'>
                    <h1 className='mt-2'>{props.name}<strong>Mahi</strong></h1>
                    <h2 className='mt-2'>we are the team of talennted developer making websites</h2>
                    <div className='mt-2'>
                        <NavLink to={props.visit}>Get Started</NavLink>
                    </div>
                </div>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lh-1'>
                    <img className='img-thumbnail' src={props.imgsrc} alt="images" />

                </div>


            </div>
        </div>
    )
}

export default Common
