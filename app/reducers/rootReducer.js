import { combineReducers } from 'redux';

import guidesReducer from './guidesReducer';
import requestStatuses from './requestStatuses';
import requestErrors from './requestErrors';

module.exports = combineReducers({
  guides: guidesReducer,
  requestStatuses,
  requestErrors,
});
