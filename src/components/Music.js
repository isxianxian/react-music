import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Music(props) {
  console.log(props)
  return <div className='flex h-100'>
    <div style={{ width: '200px', backgroundColor: 'skyblue' }}>
      music侧边栏
      <NavLink to='/home/music/like'>个人喜爱</NavLink>
      <NavLink to='/home/music/recommend'>推 荐</NavLink>
    </div>
    <div className='flex-1' style={{ backgroundColor: '#ffffff' }}>
      {
        props.children
      }
    </div>
  </div>
}