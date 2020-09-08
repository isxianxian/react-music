import * as actionTypes from '../action-types';
let initState = {
  banners: [],
  songs: [],
  radios: [],
  newSongs: [],
  hots: []
}

let reducer = function (state = initState, action) {
  let { type, payload } = action;
  switch (type) {
    case actionTypes.FIND_PAGE:
      if (payload[0]) {
        let banners = payload[0].banners,
          songs = payload[1].result.slice(0, 6),
          radios = payload[2].result,
          newSongs = payload[3].result;
        state = { ...state, banners, songs, radios, newSongs };
      }
      break;
    case actionTypes.Hot_List:
      let hots = payload.result.hots;
      state = { ...state, hots };
      break;
  }

  return state;
}

export default reducer;