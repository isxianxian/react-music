import React from 'react';
import action from '../../store/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'antd';
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons'
import style from './index.module.scss';

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { banners, getFindPage } = nextProps;
    if (!banners.length) {
      getFindPage()
    }

    return null;
  }

  componentDidMount() {

  }

  render() {
    let { songs, banners, radios, newSongs } = this.props;
    return <div className='h-100'>
      发现页面
      {/* banner */}
      <div className={`${style.banner} mt-4`}>
        <Carousel dots={{ className: 'ban-dot' }}>
          {
            banners.map(item => {
              return <div key={item.targetId} className='txt-cen pos-rel'>
                <img src={item.imageUrl} className='w-100 m-auto' style={{ maxWidth: '700px' }} />
                <div className={`${style['ban-tip']} px-2 txt-white`} style={{ backgroundColor: item.titleColor }}>{item.typeTitle}</div>
              </div>
            })
          }
        </Carousel>
      </div>

      {/* 推荐歌单 */}
      <div className={`${style.recommend} mt-4`}>
        <h3 className="tit mb-2">
          歌单
        </h3>
        <div className={`${style.main} flex flex-wrap jus-around`}>
          {
            songs.map((item) => {
              return (
                <Link to='' key={item.id} style={{ width: '32%' }} className='my-1'>
                  <div className='pos-rel'>
                    <img src={item.picUrl} className='w-100' />
                    <div className={`${style.mark} pic-cover`}>
                      <div className={`${style.msg} pic-cover flex jus-between px-1 txt-white`}>
                        <div>
                          <CustomerServiceOutlined />
                          <span className='ml-1'>
                            {(() => (item.playCount / 10000).toFixed(0))()}万
                          </span>
                        </div>
                        <div>
                          <PlayCircleOutlined />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='fs-xs more-elli lh-md txt-black'>{item.name}</p>
                </Link>
              )
            })
          }
        </div>
      </div>

      {/* 推荐电台 */}
      <div className={`${style.recommend} mt-4`}>
        <h3 className="tit  mb-2">
          推荐电台
        </h3>
        <div className='over-auto'>
          <div className={`line-flex over-auto`}>
            {
              radios.map((item) => {
                return (
                  <Link to='' key={item.id} style={{ width: '100px' }} className='my-1 flex-normal px-1 box-size'>
                    <div className='pos-rel'>
                      <img src={item.picUrl} className='w-100' />
                      <div className={`${style.mark} pic-cover`}>
                        <div className={`${style.msg} pic-cover px-1 txt-white one-elli fs-xxs`}>
                          {item.program.radio.name}
                        </div>
                      </div>
                    </div>
                    <p className='fs-xs more-elli lh-md txt-black'>{item.name}</p>
                  </Link>
                )
              })
            }
          </div>
        </div>

      </div>


      {/* 推荐歌单 */}
      <div className={`${style.recommend} mt-4`}>
        <h3 className="tit mb-2">
          最新音乐
        </h3>
        <div className={`${style.main}`}>
          {
            newSongs.map((item) => {
              return (
                <div className='pos-rel ml-2 pr-4 py-1 bor-b' key={item.id}>
                  <div className='pr-4 over-hide'>
                    <div className='txt-tit fs-lg one-elli '>
                      {item.name}
                    </div>
                    <div className='txt-info fs-sm one-elli '>
                      {
                        item.song.artists.map((artist, index) => {
                          let length = item.song.artists.length,
                            txt = index == length - 1 ? artist.name : artist.name + '/';
                          return txt;
                        })}
                      <span className='mx-1'>
                        -
                      </span>
                      {item.name}
                    </div>
                  </div>
                  <PlayCircleOutlined className='fs-xll txt-info mr-2' style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              )
            })
          }



        </div>
      </div>
    </div >
  }

}

export default connect((state) => (state.find), action.find)(Find);