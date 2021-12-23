import React, { useState } from 'react'
import { generatePublicUrl } from '../../../urlConfig';
import './style.css'


function CartItem(props) {

    const [qty, setQty] = useState(props.cartItem.qty)
    const { _id, name, price, img } = props.cartItem


    const onQuantityIncrement = (props) => {
        setQty(qty + 1);
        console.log({ _id, qty })

        props.onQuantityInc(_id, qty + 1);
    }

    const onQuantityDecrement = (props) => {
        if(qty <= 1) return
        setQty(qty - 1);
        props.onQuantityDecrement(_id , qty - 1);
    }

    return (
        <div className="cartItemContainer" >
            <div className="flexRow">
                <div className="cartProImgContainer">
                    <img src={generatePublicUrl(img)} alt={''} />


                </div>
                <div className="cartItemDetails">
                    <div >
                        <p >{name}</p>
                        <p>Rs . {price}</p>
                    </div>
                    <div>Delivery in  3 -5 days</div>


                </div>
            </div>
            <div style={{ display: 'flex ', margin: '5px 0' }} >
                <div className="quantityControl" >
                    <button>-</button>
                    <input value={qty} readOnly />
                    <button onClick={onQuantityIncrement}> +</button>
                </div>
                <button className="cartActionBtn" >save for later</button>
                <button className="cartActionBtn" >Remove</button>
            </div>
        </div>



    )
}

export default CartItem
