import axios from 'axios';
import { Banner, SongList, DJ, NewSong } from '../../api/find';
import * as actionTypes from '../action-types';

let action = {
  getFindPage: () => {
    return {
      type: actionTypes.FIND_PAGE,
      payload: axios.all([Banner(), SongList(), DJ(), NewSong()])
    }
  }
}

export default action;