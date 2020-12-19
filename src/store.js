import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default configureStore;