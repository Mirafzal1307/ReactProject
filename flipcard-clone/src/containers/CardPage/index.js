import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'

function CardPage(props) {

    const cart = useSelector(state => state.cart);
    const cartItems = cart.cartItems

    return (
        <Layout>
            <div className="cardContainer" >
                <Card headerLeft={`My Cart`}
                    headerRight={<div>
                        Deliver To
                    </div>}
                >
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <div key={index} className="flexRow">
                                <div className="cardProductContainer">
                                    <img src=" " alt="" />



                                </div>
                                <div className="cardItemDetails">
                                    <div>
                                      {cartItems[key].name} - qty - {cartItems[key].qty}
                                    </div>
                                    <div>Delivery in 3- 5 days </div>
                                </div>
                            </div>)

                    }

                </Card>
                <Card style={{ width: '500px' }} >
                    Price

                </Card>
            </div>
        </Layout>
    )
}

export default CardPage
