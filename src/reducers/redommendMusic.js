import * as actionTypes from '../const/ActionTypes';
/* eslint-disable */
const recommendMusic = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_RECOMMEND_MUSIC}_SUC`:
      const result = action.response.result;
      return result;
    default:
      return state;
  }
};
export default recommendMusic;
