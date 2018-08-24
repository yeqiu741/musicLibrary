import * as actionTyoes from '../const/ActionTypes';

const init_state = {
  currentIndex: 0
};
/* eslint-disable */
const photoState = (state = init_state, action) => {
  switch (action.type) {
    case actionTyoes.CHANGEPHOTOSTATE:
      const currentIndex = action.data;
      return Object.assign({}, state, { currentIndex });
    default:
      return state;
  }
};

export default photoState;
