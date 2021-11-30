/* eslint-disable default-case */
import _default from "atob";
import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picures: ''
    },
    authenticate: false,
    authenticating: false,
}



export default (state = initState, action) => {

    console.log(action);


    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;

        case authConstants.LOGIN_SECCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false 
            }
            break
            case authConstants.LOGOUT_REQUESTbottom: 
              state ={
                  ...initState
              }
              break ;
         

    }   


    return state;


}