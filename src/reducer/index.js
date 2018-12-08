import reducer from './reducer';
import {combineReducers} from 'redux';

const combReducer = combineReducers({rootReducer:reducer});
export default combReducer;
