import {createStore, combineReducers} from 'redux';
import personalInfo from './personalInfo/reducer'

let store = createStore(
    combineReducers({personalInfo})
);
export default store;