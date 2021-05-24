import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Products from "./products";
import Category from "./category";
const reducers=combineReducers({Products,Category})
const data =()=>{
    return createStore(reducers,composeWithDevTools())
}

export default data()