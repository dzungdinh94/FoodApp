import { createStore, combineReducers } from "redux"
import countReducer from "./countReducer"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  counter: countReducer,
  cart: cartReducer,
})

export default createStore(rootReducer)
