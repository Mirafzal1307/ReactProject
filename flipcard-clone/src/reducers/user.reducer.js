/* eslint-disable import/no-anonymous-default-export */
import { userConstants } from "../actions/constants"

const initState = {
    adresses: [],
    error: null,
    loading: false
}
export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case userConstants.GET_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.GET_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false
            }
            break;
        case userConstants.GET_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: action.payload.error
            }
            break;

    }
    return state;
}