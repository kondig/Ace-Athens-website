import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// import createBrowserHistory from 'history/createBrowserHistory'
// const history = createBrowserHistory()



ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
