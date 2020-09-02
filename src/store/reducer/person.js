import * as actionTypes from '../action-types';
let initState = {
  isLogin: false,
  loginInfo: {},
  userPlayInfo: {}
}

let reducer = function (state = initState, action) {
  let { type, payload } = action;

  switch (type) {
    // 判断登陆
    case actionTypes.Is_Login:
      break;
    // 存储登陆信息
    case actionTypes.Login_Info:
      let { isLogin, loginInfo } = payload;
      state = { ...state, isLogin, loginInfo };
      break;
    case actionTypes.Play_Info:
      let [playRecord, playList, playDJ] = payload,
        { userPlayInfo } = state;

      playRecord = playRecord ? playRecord.weekData : [];
      playList = playList ? playList.playlist : [];
      playDJ = playDJ ? playDJ.programs : [];

      userPlayInfo = { ...userPlayInfo, playRecord, playList, playDJ };
      state = { ...state, userPlayInfo };
      break;
  }

  return state;
}

export default reducer;