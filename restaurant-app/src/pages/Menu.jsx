import React from 'react'
import '../components-css/Menu.css'
import menuItems from '../menu-items/menuItems'
import Card from '../components/Card'

function Menu() {

    return (
        <>
            <main className='menu'>
                <div className='menu-items'>
                    <div>
                    <p style={{textAlign: 'center', fontSize: '40px',marginBottom: '30px', fontWeight: 'bolder'}}>Menu</p>
                    </div>
                    <div className='grids'>
                        {menuItems.length > 0 && menuItems.map((menuItem) => {
                            return <Card title = {menuItem.title}  description = {menuItem.description} img = {menuItem.image} price = {menuItem.price} key = {menuItem.image} />
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Menu
