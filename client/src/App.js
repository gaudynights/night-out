import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/Main";
import Login from "./pages/Login";
import Board from "./pages/Board";
import NewUser from "./pages/NewUser";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/newuser" component={NewUser} />
      </Switch>
    </div>
  </Router>

export default App;
