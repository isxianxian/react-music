import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, KeepAlive } from 'react-keep-alive';

import Find from '../Pages/Find';
import Hot from '../Pages/Hot';
import Person from '../Pages/Person';
import Info from '../Pages/Person/Info';
import Login from '../Pages/Person/Login';
import SongList from '../Pages/SongList';
import Song from '../Pages/Song';

import HomeLay from '../layout/HomeLay';



export default function RootRouter() {
  return <Router>
    <Provider>
      <Switch>
        {/* 要记得把router传递的match，location等对象传递给下一个组件 */}
        <Route path='/songlist/:id' component={SongList}></Route>
        <Route path='/song/:id' component={Song}></Route>
        <Route path='/'>
          <HomeLay>
            <Switch>
              <Route path='/find'>
                <KeepAlive name="Find">
                  <Find />
                </KeepAlive>
              </Route>
              <Route path='/hot' component={Hot}>
                <KeepAlive name="Hot">
                  <Hot />
                </KeepAlive>
              </Route>
              <Route path='/person'>
                <Person>
                  <Switch>
                    <Route path='/person/info'>
                      <KeepAlive name="Personinfo">
                        <Info />
                      </KeepAlive>
                    </Route>
                    <Route path='/person/login' component={Login}></Route>
                    <Redirect form='/person' to='/person/info'></Redirect>
                  </Switch>
                </Person>
              </Route>
              <Redirect form='/' to='/find'></Redirect>
            </Switch>
          </HomeLay>
        </Route>
      </Switch>
    </Provider>
  </Router>
}

// export default function RootRouter() {
//   return <Router>
//     <Switch>
//       {/* 要记得把router传递的match，location等对象传递给下一个组件 */}
//       <Route path='/login' component={Login}></Route>
//       <Route path='/home' render={(props) => {
//         return (
//           <HomeLay>
//             <Route path='/home/music' render={(props) => {
//               return (
//                 <Music >
//                   <Route path='/home/music/like' component={Like}></Route>
//                   <Route path='/home/music/recommend' component={Recommend}></Route>
//                 </Music>
//               )
//             }}>

//             </Route>
//             <Route path='/home/video' component={Video}></Route>
//           </HomeLay>
//         )
//       }}>

//       </Route>

//     </Switch>
//   </Router>
// }