import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
// need to use Router here instead of BrowserRouter, because BrowserRouter automatically generates a history prop and disregards passed in history props
import { createBrowserHistory } from 'history';

import { Navbar, Home, Browse, WhatWeDo } from './components';

import './App.css';

const history = createBrowserHistory();

history.listen((location, action) => {
  console.log(location, action);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    pathname: location.pathname,
  });
  console.log(window.dataLayer);
  // optional update to GA for pageviews
  //   window.ga('send', 'pageview', {
  //     page: window.location.pathname
  //  });
});

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/what-we-do">
          <WhatWeDo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
