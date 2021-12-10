// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductsBySlug } from '../../actions/product.action';
// import Layout from '../../components/Layout';
// import { useParams } from 'react-router-dom'
// import { generatePublicUrl } from '../../urlConfig'
// import './style.css'

// function ProductListPage(props) {

//     const product = useSelector(state => state.product);
//     // eslint-disable-next-line no-unused-vars
//     const [priceRange, setPriceRange] = useState({
//         under5k: 5000,
//         under10k: 10000,
//         under15k: 15000,
//         under20k: 20000,
//         under30k: 30000
//     })
//     const dispatch = useDispatch();
//     const { slug } = useParams()


//     useEffect(() => {
//         console.log(props);
//         const { match } = slug;

//         dispatch(getProductsBySlug(match));



//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);






//     return (
//         <Layout>

//             {
//                 Object.keys(product.productsByPrice).map((key, index) => {
//                     return (
//                         <div className="card" >
//                             <div className="cardHeader">
//                                 <div>
//                                     {props}
//                                     Samsung Mobile under {priceRange[key]}
//                                 </div>
//                                 <button>View All</button>

//                             </div>

//                             <div style={{ display: 'flex' }} >
//                                 {product.productsByPrice[key].map(product =>
//                                     <div className="productContainer" >
//                                         <div className="productImgContainer" >
//                                             <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
//                                         </div>
//                                         <div className="productInfo" >
//                                             <div style={{ margin: '5px 0' }} >{product.name}</div>
//                                         </div>
//                                         <div>
//                                             <span>4.3</span>&nbsp;
//                                             <span>3354</span>
//                                         </div>
//                                         <div className="productPrice" >{product.price}</div>
//                                     </div>
//                                 )
//                                 }

//                             </div>
//                         </div>
//                     )
//                 })



//             }

//         </Layout>
//     )
// }

// export default ProductListPage
// // import React from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useSelector } from 'react-redux';

// // const ExploreDetails = ({ data }) => {

// //     const product = useSelector(state => state.product);
// //     const { slug } = useParams();

// //     return (
// //         <div className="full-detail">
// //             <div className="explore-container">
// //                 {
// //                     data
// //                         .filter((product) => product.name === slug)
// //                         .map((product) => (
// //                             <div className="full-card" key={product.id}>
// //                                 <h2>Name: {product.name}</h2>
// //                                 <h4>Category: {product.category}</h4>
// //                             </div>
// //                         ))}
// //             </div>
// //         </div>
// //     )
// // }

// // export default ExploreDetails

import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions'
import './style.css'
import { generatePublicUrl } from '../../urlConfig'


function ProductListPage(props) {

    const product = useSelector(state => state.product)
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000
    })
    const dispatch = useDispatch()

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug))
    }, [])

    return (
        <div>
            <Layout>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <div className="card">
                                <div className="cardHeader">
                                    <div>{props.match.params.slug} mobile under {priceRange[key]}</div>
                                    <button>view all</button>
                                </div>
                                <div style={{display : 'flex'}}>
                                    {
                                        product.productsByPrice[key].map(product => 
                                            <div className="productContainer">
                                                <div className="productImgContainer">
                                                    <img src={generatePublicUrl} alt="" />
                                                </div>
                                                <div className="productInfo">
                                                    <div style={{margin: '5px 0'}}>{product.name}</div>
                                                    <div>
                                                        <span>4.3</span>&nbsp;
                                                        <span>3353</span>
                                                    </div>
                                                    <div className="productPrice">{product.price}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </Layout>
        </div>
    )
}
export default ProductListPage