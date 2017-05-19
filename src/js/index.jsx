import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import todoApp from '../reducers';

import App from '../components/app/App';

require('../scss/bundle.scss');

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
      <Route path="/" render={() => <App store={store}/>}/>
    </Router>
  </Provider>
  , document.getElementById('react-root'));