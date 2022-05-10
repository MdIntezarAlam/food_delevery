import React from 'react'

const Banner = ({ name, discount, link }) => {
    return (
        <div className='banner_conntent'>
            <h3>Hello {name}</h3>
            <p>Get free discount for every <span>$ {discount}</span> purchease</p>
            <a href={link}>Learn more</a>
        </div>
    )
}

export default Banner