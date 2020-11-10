import CreateStore, { combineReducers } from "redux"
import countReducer from "./countReducer"
const rootReducer = combineReducers({
  counter: countReducer,
})

export default CreateStore(rootReducer)
