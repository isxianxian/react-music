import * as actionTypes from '../action-types';
let initState = {
  banners: [],
  songs: [],
  radios: [],
  newSongs: []
}

let reducer = function (state = initState, action) {
  switch (action.type) {
    case actionTypes.FIND_PAGE:
      let { payload } = action;
      if (payload[0]) {
        let banners = payload[0].banners,
          songs = payload[1].result.slice(0, 6),
          radios = payload[2].result,
          newSongs = payload[3].result;
        state = { ...state, banners, songs, radios, newSongs };
      }
      break;
  }

  return state;
}

export default reducer;