import React from 'react';
import { Link } from 'react-router-dom'

export default function Aside() {
  let asideList = [
    { label: '音乐', href: '/home/music' },
    { label: '视频', href: '/home/video' },
    { label: '书籍', href: '/home/book' }
  ]

  return <aside className='h-100' style={{ width: '100px', backgroundColor: 'pink' }}>
    {
      asideList.map((item, index) =>
        <Link key={index} className='aside-link' to={item.href}>{item.label}</Link>
      )
    }
  </aside>
}