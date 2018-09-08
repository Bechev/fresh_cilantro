import { combineReducers } from 'redux';
import bagReducer from './bagReducer.js';
import itemsReducer from './itemsReducer.js';

export default combineReducers({
    bag: bagReducer,
    items: itemsReducer
  })
  