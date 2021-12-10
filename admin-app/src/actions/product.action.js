// import axios from ""

import axios from "../helpers/axios";


export const addProduct = form => {
    return async _dispatch => {


        const res = await axios.post(`/product/create` , form );
        console.log(res)
    }
}