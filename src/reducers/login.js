import * as actionTpyes from '../const/ActionTypes';

const init_state = {
  nick: ''
};
/* eslint-disable */
const login = (state = init_state, action) => {
  switch (action.type) {
    case `${actionTpyes.LOGIN}_SUC`:
      const nick = action.response.data.nick;
      return Object.assign({}, state, { nick });
    default:
      return state;
  }
};
export default login;
