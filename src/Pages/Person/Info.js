import React from 'react';
import action from '../../store/action';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { login } from '../../api/person';
import { Link } from 'react-router-dom';

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

    let latelyPlay = playRecord ? playRecord[0].song.al : [];

    return <div className='h-100'>
      <div className='bg pos-rel' style={{ backgroundImage: `url(${loginInfo.profile.backgroundUrl})` }}>
        <div className='black-cover'>
        </div>
        <div className='flex ali-cen px-2 txt-white' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Avatar size={64} src={loginInfo.profile.avatarUrl} />
          <div className='ml-2'>
            <div className='fs-lg'>{loginInfo.profile.nickname}</div>
            <div className='fs-sm'>{loginInfo.profile.signature ? loginInfo.profile.signature : '此人比较高冷，暂无签名'}</div>
          </div>
        </div>
      </div>

      {/* 播放记录 playRecord */}
      <div className='my-2'>
        <div className="tit pl-2 fs-weight">最近播放</div>
        <div>
          <div className='flex p-2' style={{ alignItems: 'center' }}>
            <div className='pos-rel bor-rad5'>
              <div>
                <img className='bor-rad5' src={latelyPlay.picUrl} height='60vh' />
              </div>
              <div className="black-cover"></div>
              <PlayCircleOutlined className='txt-primary pos-cen fs-xl' />
            </div>
            <div className='ml-2'>
              <div className='txt-black'>全部已播歌曲</div>
              <div className='txt-info fs-sm'>{playRecord ? playRecord.length : ''}首</div>
            </div>
          </div>


        </div>

      </div>

      {/* 用户歌单 playList */}
      <div>
        <div className="tit pl-2 fs-weight">我的歌单</div>
        <div>
          <div className='flex flex-wrap'>
            {
              playList && playList.length > 0 ? playList.map(item => {
                return <Link to={`/songlist/${item.id}`} key={item.id} style={{ width: '50%' }}>
                  <div className='flex ali-cen p-2' >
                    <div className='pos-rel bor-rad5'>
                      <div>
                        <img className='bor-rad5' src={item.coverImgUrl} height='60vh' />
                      </div>
                      {/* <div className="black-cover"></div> */}
                      <PlayCircleOutlined className='txt-primary pos-cen fs-xl' />
                    </div>
                    <div className='ml-2'>
                      <div className='txt-black'>{item.name}</div>
                      <div className='txt-info fs-sm'>{item.playCount}首</div>
                    </div>
                  </div></Link>
              }) : '暂无歌单！'
            }



          </div>
        </div>
      </div>

      {/* 用户电台 playDJ */}
      <div>
        <div className="tit pl-2 fs-weight">我的电台</div>
        <div>
          <div className='flex flex-wrap'>
            {
              playDJ && playDJ.length > 0 ? playDJ.map(item => {
                return <div className='flex ali-cen p-2' style={{ width: '50%' }} key={item.id}>
                  <div className='pos-rel bor-rad5'>
                    <div>
                      <img className='bor-rad5' src={item.coverImgUrl} height='60vh' />
                    </div>
                    {/* <div className="black-cover"></div> */}
                    <PlayCircleOutlined className='txt-primary pos-cen fs-xl' />
                  </div>
                  <div className='ml-2'>
                    <div className='txt-black'>{item.name}</div>
                    <div className='txt-info fs-sm'>{item.playCount}首</div>
                  </div>
                </div>
              }) : <div className='px-2 txt-info fs-sm'>暂无电台！</div>
            }
          </div>
        </div>
      </div>


    </div>
  }

}

export default connect(state => state.person, action.person)(Info);