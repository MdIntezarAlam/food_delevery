import React from 'react'
import vss from '../../assets/vss.jpg'
import ch from '../../assets/ch.jpg'
const Debitcard = () => {
    return (
        <div className='cardgroup'>
            <img src={vss} className='card_logo' />
            <img src={ch} className='card_chip' />
            <div className='card_number'>1234 5679 3299 456</div>
            <div className="card_name">Md Intezar Alam</div>
            <div className="card_from">10/22</div>
            <div className="card_to">10/2</div>
            <div className="card_ring">10/2</div>
        </div>
    )
}

export default Debitcard