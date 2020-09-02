import * as actionTypes from '../action-types';
import { loginStatus, playHistory, userPlayList, userDJ } from '../../api/person.js';
import axios from '../../api';

export default {
  checkLogin() {
    return { type: actionTypes.Is_Login }
  },
  saveUserInfo(payload) {
    return { type: actionTypes.Login_Info, payload }
  },
  getUserPlayInfo(params) {
    return { type: actionTypes.Play_Info, payload: axios.all([playHistory(params), userPlayList(params), userDJ(params)]) }
  }
}