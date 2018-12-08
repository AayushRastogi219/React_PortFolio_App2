import actionTypes from '../store/constant/constant.js';

const INITIAL_STATE={userName:'Aayush Rastogi'}
export default (states=INITIAL_STATE, action)=>{
  switch(action.type){
    case actionTypes.ChangeUserName:
    return({
      ...states,
      userName:action.payload
    });

    default:
    return states;
  }

}
