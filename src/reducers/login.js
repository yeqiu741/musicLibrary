import * as actionTpyes from '../const/ActionTypes';

const init_state = {
  userName: '',
  loginToken: ''
};

const login = (state = init_state, action) => {
  switch (action.type) {
    case `${actionTpyes.LOGIN}_SUC`: {
      const userName = action.response.data.nick;
      const loginToken = action.response.data.token;
      return Object.assign({}, state, { userName, loginToken });
    }
    default:
      return state;
  }
};
export default login;
