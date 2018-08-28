import * as actionTypes from '../const/ActionTypes';
import { normalize } from '../../node_modules/normalizr';
import * as schemes from '../schema/index';


export function changePhotoState(data) {
  return {
    type: actionTypes.CHANGEPHOTOSTATE,
    data
  };
}
export function deleteMusic(data) {
  return {
    type: actionTypes.DELETEMUSIC,
    data
  };
}
export function changeMymusicName(data) {
  return {
    type: actionTypes.CHANGEMYMUSICNAME,
    data
  };
}
export function reName(data) {
  return {
    type: actionTypes.RENAME,
    data
  };
}
export function login(mid) {
  return {
    SERVER_API: {
      type: actionTypes.LOGIN,
      endpoint: '/login',
      params: {
        mid
      }
    }
  };
}
export function getMyMusic(token) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_LOCATION_MUSIC,
      endpoint: '/music/my_list',
      params: {
        token
      },
      normailzerFun: response => normalize(response.data.list, schemes.MYMUSIC)
    }
  };
}
export function getRecommendMusic(token) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_RECOMMEND_MUSIC,
      endpoint: '/music/recommend_list',
      params: {
        token
      },
      normailzerFun: response => normalize(response.data.list, schemes.RECOMMENDMUSIC)
    }
  };
}
