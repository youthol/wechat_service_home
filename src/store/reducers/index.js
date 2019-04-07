import ajaxReducer from './ajaxReducer';
import { combineReducers} from 'redux';

export const rootReducer = combineReducers({
  ajaxReducer,
  // 用来放置其他renducer
  // ...
});