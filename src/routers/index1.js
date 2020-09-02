import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login/Login'
import Aside from '../components/Aside'
import Music from '../components/Music'
import Video from '../components/Video'

export default function RootRouter() {
  return <Router>
    <Route path='/login' component={Login}></Route>
    <Route path='/home' render={(props) => {
      let { location: { pathname } } = props;
      pathname = pathname.slice(6);
      if (pathname == 'music') {
        return <div className='h-100 flex'>
          <Aside></Aside>
          <div>
            <Music></Music>
          </div>
        </div>
      } else {
        return <div className='h-100 flex'>
          <Aside></Aside>
          <div>
            <Video></Video>
          </div>
        </div>
      }
    }}>
    </Route>
  </Router>
}