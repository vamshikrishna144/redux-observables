import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import {createEpicMiddleware} from 'redux-observable'
import { rootEpic } from './epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);
const myLoggerMiddleware = (store) => (next) => (action) => {
  console.log("this is the action that is getting performed", action);
  next(action);
}
const store = createStore(reducer, {}, applyMiddleware(epicMiddleware))


ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
