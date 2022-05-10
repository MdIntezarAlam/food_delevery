import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import {actionType} from '../reducer'

let cartitems = []

const CartItem = ({ name, imgSrc, price, itemId }) => {
    const [{ cart }, dispatch] = useStateValue()
    const [qty, setQty] = useState(1)
    const [itemprice, setItemprice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartitems = cart;
        setItemprice(parseInt(qty) * parseFloat(price));
    }, [qty]);

    const updateQty = (action, id) => {
        if (action == "add") {
            setQty(qty + 1);
        } else {
            if (qty == 1) {
                cartitems.pop(id);
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartitems,
                });
            } else {
                setQty(qty - 1);
                console.log(qty);
            }
        }
    };

    return (
        <div className='cartitem' id={itemId}>
            <div className="imgbox">
                <img src={imgSrc} />
            </div>
            <div className="itemsection">
                <h3 className="itemname">{name}</h3>
                <div className="itquantity">
                    <span>x{qty}</span>
                    <div className="quantity">
                        <RemoveRounded className='itemremove' onclick={() => updateQty("remove", itemId)} />

                        <AddRounded className='itemadd' onclick={() => updateQty("add", itemId)} />
                    </div>
                </div>
            </div>
            <p className="itemprice">
                <span className="dolorsign">$ </span>
                <span className="itempricevalue">{itemprice}</span>
            </p>
        </div>
    )
}

export default CartItem