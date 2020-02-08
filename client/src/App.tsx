import React from 'react';

import './App.css';
import Nav from "./Nav";
import Sources from "./Sources";
import List from "./List";
import Enter from "./Enter";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Enter} />
          <Route path="/list" exact component={List} />
          <Route path="/sources" exact component={Sources} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
