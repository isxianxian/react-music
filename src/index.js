import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './routers/index';
import { Provider } from 'react-redux';
import store from './store'


import 'antd/dist/antd.css';
import './assets/css/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <div className='h-100'>
      <RootRouter></RootRouter>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);

