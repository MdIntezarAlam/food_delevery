import React, { useEffect } from 'react'
import { BarChart, DockSharp, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import f3 from '../../assets/f3.jpg'
import p from '../../assets/p.jpeg'


const Header = () => {

    useEffect(() => {
        const toogle_menu = document.querySelector(".toogle_menu");
        toogle_menu.addEventListener('click', () => {
            document.querySelector('.rightmenu').classList.toggle('active')
        })
    }, [])


    return (
        <header>
            <img src={f3} className="logo" />
            <div className="inputbox">
                <SearchRounded className='serch_icon' />
                <input type="text" placeholder='search' />
            </div>

            <div className="shopingcard">
                <ShoppingCartRounded className='cart' />
                <div className="cart_content">
                    <p >2</p>
                </div>
            </div>
            <div className="profile_container">
                <div className="image_box">
                    <img src={p} className="pro_img" />
                </div>
                <h2 className='username'>Intezar Alam</h2>
            </div>
            <div className="toogle_menu">
                <BarChart className='toggle_icon' />
            </div>
        </header>


    )
}

export default Header