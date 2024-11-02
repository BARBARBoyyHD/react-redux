import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import burgerReducer from "./burger/burgerReducer";
import apiReducer from "./API/apiReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    burger: burgerReducer,
    api : apiReducer
})

export default rootReducer