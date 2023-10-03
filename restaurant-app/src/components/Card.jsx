import React from 'react'
import '../components-css/Card.css'

function Card(props) {
    return (
        <>
          <div className='cards'>
            <div style={{height: '55%', borderBottom: '1px solid black'}}>
              <img src={props.img} alt="" />
            </div>
            <div style={{height: '40%',}}>
              <div className='card-description'>
                <p className='price-title'>
                  <span style={{fontWeight: 'bolder',fontSize: '20px'}}>{props.title}</span>
                  <span style={{fontWeight: 'bolder',fontSize: '20px', color: 'black'}}>₹ {props.price}</span>
                </p>
                <p className='food-description'>
                {props.description}
                </p>
                <button className='food-card-btn'>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card
