import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'
import f4 from '../../assets/f4.jpg'


const MenuCart = ({ imgSrc, name, isActive }) => {
    return (
        <div className={`rowmanucart ${isActive ? `active` : ``}`}>
            <div className="img_box">
                <img src={imgSrc} />
            </div>
            <h3>{name}</h3>
            <i className='loadmenuicon'>
                <ChevronRightRounded />
            </i>
        </div >
    )
}

export default MenuCart