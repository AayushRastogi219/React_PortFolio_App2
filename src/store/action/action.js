import actionTypes from '../constant/constant.js';

export function changestate(updaetedUserName){
  return(dispatch =>{
    console.log('changeState called');
    // dispatch({type:'ChangeUserName',payload:'Suryakant'});
    dispatch({type:actionTypes.ChangeUserName,payload:updaetedUserName});
  });

}
