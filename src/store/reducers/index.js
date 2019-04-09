import { combineReducers} from 'redux';
import userInfo from './userInfo';

export const rootReducer = combineReducers({
  userInfo,
  // 用来放置其他renducer
  // ...
});