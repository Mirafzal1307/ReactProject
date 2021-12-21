import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsBySlug } from '../../../actions/product.action';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig'
import './style.css'




function ProductStore(props) {
    const product = useSelector(state => state.product);
    // eslint-disable-next-line no-unused-vars
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000
    })
    const dispatch = useDispatch();



    useEffect(() => {

        const { match } = props;

        dispatch(getProductsBySlug(match.params.slug))



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);






    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card 
                        headerLeft={`${props.match.params.slug} mobile under
                        ${priceRange[key]}`}
                        headerRight = {  <button>View All</button>}
                        style={{ width : 'calc(100% - 40% ) ',
                            margin: '20px'
                        }}
                        >
                       

                            <div style={{ display: 'flex' }} >
                                {product.productsByPrice[key].map(product =>
                                    <Link to={`/${product.slug}/${product._id}/p`} style={{ display: 'block' }} className="productContainer" >
                                        <div className="productImgContainer" >
                                            <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                        </div>
                                        <div className="productInfo" >
                                            <div style={{ margin: '5px 0' }} >{product.name}</div>
                                        </div>
                                        <div>
                                            <span>4.3</span>&nbsp;
                                            <span>3354</span>
                                        </div>
                                        <div className="productPrice" >{product.price}</div>
                                    </Link>
                                )
                                }

                            </div>
                        </Card>
                    )
                })



            }
        </>
    )
}

export default ProductStore
