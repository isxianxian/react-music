import axios from 'axios';
import { Banner, SongList, DJ, NewSong, getHot } from '../../api/find';
import * as actionTypes from '../action-types';

let action = {
  getFindPage: () => {
    return {
      type: actionTypes.FIND_PAGE,
      payload: axios.all([Banner(), SongList(), DJ(), NewSong()])
    }
  },
  getHotList: () => {
    return {
      type: actionTypes.Hot_List,
      payload: getHot()
    }
  }
}

export default action;