import {createStore, combineReducers} from 'redux';
import userInfo from './personalInfo/reducer'

let store = createStore(
    combineReducers({userInfo})
);
export default store;