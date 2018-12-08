import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
// import allReducers from './reducer'
import combReducer from '../reducer/index'

 const store=createStore(combReducer, {},applyMiddleware(thunk));
 export default store;
