import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Items } from './Data'
import {useStateValue} from './StateProvider'
import {actionType} from './reducer'
let cartData = []

const Itemcard = ({ imgSrc, name, ratings, price, itemId }) => {

    const [isFavorite, setFavorite] = useState(false)
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
    const [isCart, setCart] = useState(null)
   const [{}, dispatch]= useStateValue()


    useEffect(() => {
        if (isCart) {
           cartData.push(isCart)
           dispatch({
               type:actionType.SET_CART,
               cart:cartData,
           })
        }
    }, [isCart])



    const handleClick = (value) => {
        setCurrentValue(value)
    }


    return (
        <div className='itemcard' id={itemId}>
            <div className={`isfavorite ${isFavorite ? "active" : ""}`}
                onClick={() => setFavorite(!isFavorite)}
            >
                <Favorite />
            </div>
            <div className="imgBox">
                <img src={imgSrc} className="itemimg" />
            </div>
            <div className="itemcontent">
                <h3 className='itemname'>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, index) => (
                            <i key={index} className={`rating ${currentValue > index ? "orange" : "grey"}`}
                                onClick={() => handleClick(index + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className='price'><span>$ {price}</span></h3>
                    </div>
                    <i className="addtocart" onClick={() => setCart(Items.find(n => n.id === itemId))}>
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Itemcard

