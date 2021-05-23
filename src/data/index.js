import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer";
const reducers=combineReducers({Category:reducer})
const data =()=>{
    return createStore(reducers,composeWithDevTools())
}

export default data()