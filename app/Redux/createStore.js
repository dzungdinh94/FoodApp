import createStore, {combineReducer} from 'redux'
import countReducer from './countReducer'
const rootReducer = combineReducer({
    counter: countReducer
});
createStore(rootReducer)

export default createStore(rootReducer)

