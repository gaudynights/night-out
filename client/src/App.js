import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Main";
import Login from "./pages/Login";
import Board from "./pages/Board";
import NewUser from "./pages/NewUser";
import Books from "./pages/Books";
import Detail from "./pages/Detail";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
      </Switch>
    </div>
  </Router>

export default App;
