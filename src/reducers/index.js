import { combineReducers } from 'redux';
import photoState from './photoState';
import login from './login';
import entities from './entities';
import myMusic from './myMusic';
import recommendMusic from './redommendMusic';

export default combineReducers({
  photoState,
  login,
  entities,
  myMusic,
  recommendMusic
});
