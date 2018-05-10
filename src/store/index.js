import {createStore, combineReducers, applyMiddleware} from 'redux';
import home from './home/reducer'

let store = createStore(
    combineReducers({home})
);
export default store;