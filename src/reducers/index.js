import { combineReducers } from 'redux';

import BrothersReducer from './brothers';

const rootReducer = combineReducers({
  brothers: BrothersReducer
});

export default rootReducer;
