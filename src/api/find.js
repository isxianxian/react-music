import { get, post } from './http';

// banner
export let Banner = function () {
  return get('/banner');
}
// 推荐歌单
export let SongList = function () {
  return get('/personalized');
}
// 推荐电台
export let DJ = function () {
  return get('/personalized/djprogram');
}
// 最新音乐
export let NewSong = function () {
  return get('/personalized/newsong');
}
// 热门搜索
export let getHot = function () {
  return get('/search/hot')
}
// 歌单详情
export let songListDetail = function (params) {
  return get('/playlist/detail', params)
}