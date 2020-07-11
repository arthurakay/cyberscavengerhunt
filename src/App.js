import React from 'react';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Admin from './pages/Admin';
import './App.css';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
