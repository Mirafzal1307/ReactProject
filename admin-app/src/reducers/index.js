import { combineReducers } from "redux";
import authReducers from "./auth.reducers";



const rootReduser = combineReducers({
    auth : authReducers
})

export default rootReduser