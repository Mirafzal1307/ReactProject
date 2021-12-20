import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";



const rootReduser = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer
})

export default rootReduser