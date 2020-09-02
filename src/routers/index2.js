import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'

export default function RootRouter() {
  return <Router>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Route component={Login}></Route>
    </Switch>
  </Router>
}