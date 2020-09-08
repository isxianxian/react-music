import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CustomerServiceOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import PandaIcon from '../components/PandaSvg';
import { Input } from 'antd';
const { Search } = Input;

let HomeLay = function (props) {
  const history = useHistory()
  const beginSearch = () => {
    history.push('/hot');
  }

  const goHot = () => {
    // alert('kkk')
  }

  return <div className='h-100 flex flex-col' >
    <div className='flex jus-between ali-cen p-2 '>
      <div className="txt-cen" style={{ width: '10vw' }}>
        <PandaIcon style={{ fontSize: '28px' }} />
      </div>
      <div className="flex-1 mx-4" onClick={beginSearch}>
        <Search
          className='w-100'
          placeholder="热门歌曲 "
          onSearch={value => console.log(value)}
        />
      </div>
      <div className="bor-round" style={{ width: '30px', height: '30px' }}>
        <div>
          <img className='bor-round w-100' src="https://p1.music.126.net/5qQs_PwLufzYr3SdIfLWTg==/109951165275018782.jpg" />
        </div>
      </div>
    </div>
    <div className='flex-1 over-auto'>
      {props.children}
    </div>
    <div className='flex txt-cen bg-white pt-2 bor-t'>
      <NavLink to='/find' activeClassName='txt-primary' className='flex-1' >
        <CustomerServiceOutlined className='fs-xl' />
        <div>发 现</div>
      </NavLink>
      <NavLink to='/hot' activeClassName='txt-primary' className='flex-1' onClick={goHot}>
        <FireOutlined className='fs-xl' />
        <div>热 榜</div>
      </NavLink>
      <NavLink to='/person' activeClassName='txt-primary' className='flex-1'>
        <UserOutlined className='fs-xl' />
        <div>我 的</div>
      </NavLink>
    </div>
  </div >
}

export default HomeLay

// 在主页面布局搜索歌曲的时候，将歌曲关键字放到reducer，引起hot重新渲染，hot组件发现有搜索关键词就去搜索再将搜索结果重新渲染
// 在主页面布局搜索歌曲的时候，主页面发送请求并将搜索结果放到reducer，hot组件直接获取reducer中的搜索结果渲染显示