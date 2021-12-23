import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';

function ProductPage(props) {



    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({ params })
        const payload = {

            params
        }

        dispatch(getProductPage(payload))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div style={{ margin: '0 10px' }} >
                <h3>
                    {page.title}
                </h3>
                <Carousel
                    renderThumbs={() => { }}

                >
                    {

                        page.banners && page.banners.map((banner, index) => 
                        <a      key={index}
                                style={{ display: 'block' }}
                                href={banner.navigateTo}
                            >
                                <img src='https://muzfmuz.com/uploads/posts/2020-02/medium/1582036831_leo_17s_84451879_211545076559258_8486046594401863070_n.jpg' alt="" />

                            </a>

                        )



                    }
                </Carousel>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    margin: '10px  0'
                }}>
                    {page.products && page.products.map((product, index) =>
                        <Card key={index}
                            style={{
                                width: '400px',
                                height: '200px',
                                margin: '5px'
                            }}

                        >
                            <img style={{
                                width: '100%',
                                height: '100%',

                            }} src={product.img} alt="" />
                        </Card>
                    )}
                </div>
            </div>



            {JSON.stringify(product.page)}


        </>
    )
}

export default ProductPage
