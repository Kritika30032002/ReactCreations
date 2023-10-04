import React from 'react'
import '../components-css/TrendingSection.css';
import trendingMenuItems from '../menu-items/trendingMenuItems';
import Card from './Card';

function TrendingSection() {
    return (
        <>
            <div className='trending-section'>
                <p style={{textAlign: 'center', fontSize: '40px',marginBottom: '30px', fontWeight: 'bolder'}}> Trending Menu Items</p>
                <div className='grids'>
                  {trendingMenuItems.length > 0 && trendingMenuItems.map( menuItem => {
                    return <Card title = {menuItem.title}  description = {menuItem.description} img = {menuItem.image} price = {menuItem.price} key = {menuItem.image} />
                  })}

                </div>
            </div>
        </>
    )
}

export default TrendingSection
