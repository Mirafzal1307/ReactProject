import { cartConstants } from './constants';
import store from '../store';


export const addToCart = (product) => {
    return async dispatch => {
        const { cartItems } = store.getState().cart;
        // console.log('action :: products', products);
        // const product = action.payload.product ;
        // const products = state.products;
        const qty = cartItems[product._id] ? parseInt(products[product._id].qty + 1) : 1 ; 
        products[product._id] = {
            ...product,
            qty
        };
        localStorage.setItem('cart', JSON.stringify(products));
        dispatch({

            type: cartConstants.ADD_TO_CART,
            payload: { products }
        })
    }
}