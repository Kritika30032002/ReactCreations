import React from 'react'
import '../components-css/Card.css'

const Card = ({title, description, food_img, price}) => {
    return (
        <>
          <div className='cards'>
            <div style={{height: '55%', borderBottom: '1px solid black'}}>
              <img src={food_img} alt="" />
            </div>
            <div style={{height: '40%',}}>
              <div className='card-description'>
                <p className='price-title'>
                  <span style={{fontWeight: 'bolder',fontSize: '28px', color: "black"}}>{title}</span>
                  <span style={{fontWeight: 'bolder',fontSize: '30px', color: 'black'}}>₹ {price}</span>
                </p>
                <p className='food-description'>
                {description}
                </p>
                <button className='food-card-btn' style={{cursor: "pointer"}}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card
