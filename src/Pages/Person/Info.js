import React from 'react';
import action from '../../store/action';
import { connect } from 'react-redux';
import { Avatar } from 'antd';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextprops, prevState) {
    let { userPlayInfo, getUserPlayInfo, loginInfo } = nextprops;
    if (JSON.stringify(userPlayInfo) == '{}') {
      let uid = loginInfo.account.id;
      getUserPlayInfo({ uid, type: 1 });
    }
    return null;
  }

  render() {
    let { loginInfo, userPlayInfo: { playRecord, playList, playDJ } } = this.props;

    return <div className='h-100'>
      已经登陆的个人Info页面
      <div className='bg pos-rel' style={{ backgroundImage: `url(${loginInfo.profile.backgroundUrl})` }}>
        <div className='black-cover'>
        </div>
        <div className='flex ali-cen px-2 txt-white' style={{ padding: '30px 0' }}>
          <Avatar size={64} src={loginInfo.profile.avatarUrl} />
          <div className='ml-2'>
            <div className='fs-lg'>{loginInfo.profile.nickname}</div>
            <div className='fs-sm'>{loginInfo.profile.signature ? loginInfo.profile.signature : '此人比较高冷，暂无签名'}</div>
          </div>
        </div>

        {/* 播放记录 playRecord */}
        <div>

        </div>

        {/* 用户歌单 playList */}
        <div>

        </div>

        {/* 用户电台 playDJ */}
        <div>

        </div>
      </div>
      <div>

      </div>
    </div>
  }

}

export default connect(state => state.person, action.person)(Info);