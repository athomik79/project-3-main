import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Variable for initial state
const inititialState = {};

// Middleware variable
const middleware = [thunk];

// Store variable with redux devtools extension
const store = createStore(rootReducer, inititialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;