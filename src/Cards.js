import React from 'react'
import { NavLink } from 'react-router-dom';


const Cards = (props) => {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.imgweb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.para}</p>
                    <NavLink to={props.btnCard} className="btn btn-primary">Go</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Cards
