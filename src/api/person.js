import { get, post } from './http';

// 获取登陆状态
export let loginStatus = () => {
  return get('/login/status');
}
// 登陆
export let login = (params) => {
  return get('/login/cellphone', params);
}
// 获取用户信息如歌单等的数量
export let getUserInfo = () => {
  return get('/user/subcount');
}
// 获取播放记录
export let playHistory = (params) => {
  return get('/user/record', params);
}
// 获取用户歌单
export let userPlayList = (params) => {
  return get('/user/playlist', params);
}
// 获取用户电台
export let userDJ = (params) => {
  return get('/user/dj', params);
}