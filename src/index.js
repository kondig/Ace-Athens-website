import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';


import ReactGA from 'react-ga';
const trackingId = "UA-148338218-4";
const history = createBrowserHistory();
ReactGA.initialize(trackingId);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
