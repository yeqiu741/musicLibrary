import { combineReducers } from 'redux';
import * as actionTypes from '../const/ActionTypes';

const myMusicData = (state = {}, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_LOCATION_MUSIC}_SUC`: {
      const { entities } = action.response;
      return {
        ...state,
        ...entities.myMusic
      };
    }
    case actionTypes.CHANGEMYMUSICNAME: {
      const newState = { ...state };
      const id = action.data[0];
      console.log(id);
      const newName = action.data[1];
      newState[id].name = newName;
      return newState;
    }
    default:
      return state;
  }
};
const recommendMusicData = (state = {}, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_RECOMMEND_MUSIC}_SUC`: {
      const { entities } = action.response;
      return {
        ...state,
        ...entities.recommendMusic
      };
    }
    default:
      return state;
  }
};
export default combineReducers({
  myMusicData,
  recommendMusicData
});
