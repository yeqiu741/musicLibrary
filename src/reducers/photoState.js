import * as actionTyoes from '../const/ActionTypes';

const init_list = {
  currentIndex: 0
};
/* eslint-disable */
const photoState = (state = init_list, action) => {
  switch (action.type) {
    case actionTyoes.CHANGEPHOTOSTATE:
      const currentIndex = action.data;
      return Object.assign({}, state, { currentIndex });
    default:
      return state;
  }
};

export default photoState;
