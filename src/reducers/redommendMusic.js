import * as actionTypes from '../const/ActionTypes';

const recommendMusic = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_RECOMMEND_MUSIC}_SUC`: {
      const recommendMusic = action.response.result;
      return recommendMusic;
    }
    default:
      return state;
  }
};
export default recommendMusic;
