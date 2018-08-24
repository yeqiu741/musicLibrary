import { combineReducers } from 'redux';
import * as actionTypes from '../const/ActionTypes';
/* eslint-disable */
const myMusic = (state={},action) => {
  switch(action.type){
    case `${actionTypes.FETCH_LOCATION_MUSIC}_SUC`: {
      const {entities} =  action.response
      console.log(action.response)
      return {
        ...state,
        ...entities.myMusic
      };
    }
    default:
    return state;
  }
}
const recommendMusic = (state={},action) => {
  switch(action.type){
    case `${actionTypes.FETCH_RECOMMEND_MUSIC}_SUC`:{
      const {entities} = action.response
      console.log(entities)
      return{
        ...state,
        ...entities.recommendMusic
      }
    }
    default:
    return state;
  }
}
export default combineReducers({
  myMusic,
  recommendMusic
});
