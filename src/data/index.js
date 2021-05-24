import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Products from "./products";
import Category from "./category";
import Cart from "./cart";
const reducers=combineReducers({Products,Category,Cart
})
const data =()=>{
    return createStore(reducers,composeWithDevTools())
}

export default data()