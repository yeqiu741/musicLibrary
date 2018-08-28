import * as actionTypes from '../const/ActionTypes';

const myMusic = (state = [], action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_LOCATION_MUSIC}_SUC`: {
      const myMusic = action.response.result;
      return myMusic;
    }
    case actionTypes.DELETEMUSIC: {
      const newState = state.slice();
      newState.splice(action.data, 1);
      return newState;
    }
    default:
      return state;
  }
};
export default myMusic;

