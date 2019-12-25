import React from 'react';
import ReactDOM from 'react-dom';
import VConsole from 'vconsole'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './App';
import './assets/css/base.less'
import * as serviceWorker from './serviceWorker';
import { isDev } from 'utils/tools'
if (isDev) {
  // eslint-disable-next-line
  const vConsole = new VConsole()
}
const Router = BrowserRouter

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
