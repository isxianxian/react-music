import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomerServiceOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';

export default function HomeLay(props) {
  return <div className='h-100 flex flex-col'>
    <div className='flex-1 over-auto'>
      {props.children}
    </div>
    <div className='flex txt-cen bg-white pt-2 bor-t'>
      <NavLink to='/find' activeClassName='txt-primary' className='flex-1' >
        <CustomerServiceOutlined className='fs-xl' />
        <div>发 现</div>
      </NavLink>
      <NavLink to='/hot' activeClassName='txt-primary' className='flex-1'>
        <FireOutlined className='fs-xl' />
        <div>热 榜</div>
      </NavLink>
      <NavLink to='/person' activeClassName='txt-primary' className='flex-1'>
        <UserOutlined className='fs-xl' />
        <div>我 的</div>
      </NavLink>
    </div>
  </div>
}