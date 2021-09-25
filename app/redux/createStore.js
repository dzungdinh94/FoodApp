import  {createStore, combineReducers} from 'redux';
import countReducer from './countReducer'
import itemData from './itemReducer'
const rootReducer = combineReducers({
    data: itemData
})
export default createStore(rootReducer)