import { combineReducers } from 'redux';
import find from './find';
import person from './person';

let reducer = combineReducers({
  find,
  person
})

export default reducer;