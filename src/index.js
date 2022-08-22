import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import './index.css';
import App from './containers/App.jsx';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from "./reducers.js";
import 'tachyons';


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots }); 
// Create our store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 
// Replaced searchRobots with rootReducer.

ReactDOM.render(
  <div>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </div>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
