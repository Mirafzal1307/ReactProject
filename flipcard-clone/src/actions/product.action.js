import axios from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/products/${slug}`);
        console.log(`data-${res}`);
        if (res.status === 200) {




            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload:  res.data 
            })
        }else{

        }

    }
}



// export const getProductsBySlug = (slug) => {
//     return async dispatch => {
//         dispatch({ type : productConstants.GET_PRODUCTS_BY_SLUG})
//         const res = await axios.get(`/products/-_mlorBLSl`   )


//         if(res.satu){

//         }
//     }
// }