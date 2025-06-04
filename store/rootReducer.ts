// store/rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here as needed
});

export default rootReducer;