import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress } from './../../actions/user.action';
import Layout from './../../components/Layout/index';
import { MaterialButton, MaterialInput } from '../../components/MaterialUI';
import Card from '../../components/UI/Card'
import AddressForm from './AddressForm'
import './style.css'


/**
* @author
* @function CheckoutStep
**/

const CheckoutStep = (props) => {
    return (
        <div className='checkoutStep' >
            <div className={`checkoutHeader ${props.active && 'active'}`}>
                <div>
                    <span className='stepNumber'>
                        {props.stepNumber}
                    </span>
                    <span className='stepTitle'>{props.title}</span>
                </div>

            </div>
            {props.body && props.body}

        </div>
    )

}
const CheckoutPage = (props) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)


    const onAddressSubmit = () => {

    }

    useEffect(() => {
        dispatch(getAddress());
    }, [])

    return (
        <Layout>
            <div className='cartContainer' style={{ alignitems: 'flex-start' }} >
                <div className='checkoutContainer'>
                    <CheckoutStep
                        stepNumber={'1'}
                        title={'LOGIN'}
                        active={!auth.authenticate}
                        body={
                            <div className='loggedInId'>
                                <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                                <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
                            </div>
                        }
                    />

                    <CheckoutStep
                        stepNumber={'2'}
                        title={'DELIVERY ADDRESS'}
                        active={true}
                        body={

                            <>
                                {
                                    user.address.map(adr =>
                                        <div className='flexRow addressContainer' >
                                            <div>
                                                <input name="address" type="radio" />
                                            </div>
                                            <div className='flexRow sb addressinfo' >
                                                <div>
                                                    <div>
                                                        <span>{adr.name}</span>
                                                        <span>{adr.addressType}</span>
                                                        <span>{adr.mobileNumber}</span>
                                                    </div>
                                                    <div>
                                                        {adr.address}
                                                    </div>
                                                    <MaterialButton
                                                        title="DELIVERY HERE"
                                                        style={{
                                                            width: '250px'
                                                        }}
                                                    />
                                                </div>
                                                <div><p>Edit</p></div>
                                            </div>
                                        </div>
                                    )


                                }
                            </>
                        }
                    />


                    <AddressForm
                        onSubmitForm={onAddressSubmit}
                        onCancel={() => { }}
                    />
                    <CheckoutStep
                        stepNumber={'3'}
                        title={"ORDER SUMMARY"}
                    />
                    <CheckoutStep
                        stepNumber={'4'}
                        title={'PAYMENT OPTIONS'}
                    />




                </div>
            </div>
        </Layout>
    )

}
export default CheckoutPage