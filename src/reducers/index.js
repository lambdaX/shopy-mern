import { combineReducers } from 'redux';

import userReducer from './userReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
});

export default rootReducer;