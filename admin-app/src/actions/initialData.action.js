import {
   /*  initialDataConstants, */
    categoryConstants,
    productConstants
} from "./constants"

import axios from "../helpers/axios";


export const getInitialData = () => {
    return async dispatch => {

        const res = await axios.post(`/initialData`);

        if (res.status === 200) {
            const { categories, products } = res.data;
            // products.map(i => console.log(i))
            // for (const [key, value] of Object.entries(products)) {
            //     console.log(`${key}: ${value}`);
            //   }
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SECCESS,
                payload: { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SECCESS,
                payload: { products }
            });
        }

console.log(res)

    }
}