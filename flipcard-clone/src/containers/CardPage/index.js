import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import CartItem from './CartItem';
import { addToCart } from '../../actions'

function CardPage(props) {

    const cart = useSelector(state => state.cart);
    // const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch()

    useEffect(() => {

        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    const onQuantityIncrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1))

    }

    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1))

    }

    return (
        <Layout>
            <div className="cardContainer" style={{ alignItems: 'flex-start' }}>
                <Card headerLeft={`My Cart`}
                    headerRight={<div>
                        Deliver To
                    </div>}
                >
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <CartItem
                                key={index}
                                cartItem={cartItems[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDecrement={onQuantityDecrement}


                            />
                        )

                    }

                </Card>
                <Card style={{ width: '500px' }} headerLeft='Price' >
                    Price
   
                </Card>
            </div>
        </Layout>
    )
}

export default CardPage

