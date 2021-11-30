import { combineReducers } from "redux";

import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";


const rootReduser = combineReducers({
    auth : authReducer , 
    user : userReducer
})

export default rootReduser