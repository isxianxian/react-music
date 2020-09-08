import { get, post } from './http';

// 歌曲详情
export let songDetail = function (params) {
  return get('/song/detail', params)
}