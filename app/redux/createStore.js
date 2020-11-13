import {createStore,combineReducers} from 'redux';
import countReducer from './countReducer'
const rootReducer = combineReducers({
    counter: countReducer,
});
export default createStore(rootReducer);