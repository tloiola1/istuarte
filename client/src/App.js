import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Agenda from "./pages/Agenda";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CMS from "./pages/CMS";

const App = () =>
  <Router>
      <Switch>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/products" component={ Products } />
        <Route exact path="/agenda" component={ Agenda } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/cms" component={ CMS } />
        <Route exact path="/" component={ Home } />
      </Switch>
</Router>;
export default App;