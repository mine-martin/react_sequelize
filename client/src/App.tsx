import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import Home from './component/home';
import Add from './component/add';
import Update from './component/update';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/update" component={Update} />
      </Switch>
    </Router>
  );
}

export default App;
