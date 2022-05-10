import React from 'react'


const Main = ({ icon, link, isHome }) => {
    return (
        <li className={isHome ? 'active' : ""}>
            <a href={link}>
                <span className='icons'>{icon}</span>
            </a>
        </li>
    )
}

export default Main