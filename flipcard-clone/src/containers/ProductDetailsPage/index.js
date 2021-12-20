import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout'

function ProductDetailsPage(props) {


    const dispatch = useDispatch();
    const product = useSelector(state => state.product)


    useEffect(() => {


        const { productId } = props.match.params
        const payload = {
            params: {
                productId
            }
        }

        dispatch(getProductDetailsById());

    }, [])


    return (
        <Layout>
            <div >
                {JSON.stringify(product)}
            </div>
        </Layout>
    )
}

export default ProductDetailsPage
