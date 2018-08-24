import * as actionTypes from '../const/ActionTypes';
/* eslint-disable */
const myMusic = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_LOCATION_MUSIC}_SUC`:
      const result = action.response.result;
      return result;
    default:
      return state;
  }
};
export default myMusic;

