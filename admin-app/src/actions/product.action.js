// import axios from ""

import axios from "../helpers/axios";
import { api } from "../urlConfig";

export const addProduct = form => {
    return async dispatch => {


        const res = await axios.post(`/product/create` , form );
        // console.log(`------${res.data}`)
    }
}