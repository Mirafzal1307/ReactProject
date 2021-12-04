import { productConstants } from "../actions/constants";

const initialState = { 
 products : [ ]


}





export default (state  = initialState , action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SECCESS : 
        state = {
            ...state,
            products: action.products
    
        }
         break ;

    }

    return state;
}