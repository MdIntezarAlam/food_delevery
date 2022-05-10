import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

const Submenu = ({ name }) => {
    return (
        <div className='Submenu'>
            <h3>{name}</h3>
            <div className="view_all">
                <p>View All</p>
                <i><ChevronRightRounded /></i>
                </div>
        </div>
    )
}

export default Submenu