// import axios from ""

import axios from "../helpers/axios";
import { baseURL } from "../urlConfig";

export const addProduct = form => {
    return async dispatch => {


        const res = await axios.post(`${baseURL}/product/create` , form );
        // console.log(`------${res.data}`)
    }
}