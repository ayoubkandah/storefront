import {createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import Products from "./products";
import Category from "./category";
import Cart from "./cart";
const reducers=combineReducers({Products,Category,Cart
})
const data =()=>{
    return createStore(reducers,applyMiddleware(thunk))
}

export default data()