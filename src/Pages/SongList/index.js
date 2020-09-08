import React from 'react';
import { Link } from 'react-router-dom';
import { MessageOutlined, ShareAltOutlined, HeartOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { songListDetail } from '../../api/find';


class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    songListDetail({ id }).then(res => {
      let { playlist, privileges } = res;
      this.setState({
        playlist,
        privileges
      })
    })
  }

  render() {
    let { playlist, privileges } = this.state;
    console.log(playlist, privileges)
    {
      return playlist ? <div className='flex flex-col bg h-100 pos-rel' style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}>
        <div className="black-cover"></div>
        <div className='h-100 flex flex-col'>
          <div className='txt-cen txt-white pt-1 pb-3 fs-xl fs-weight'>歌单</div>
          <div className='flex txt-white px-2' >
            <div><img src={playlist.coverImgUrl} height='120px' /></div>
            <div className='ml-2 flex flex-col jus-between '>
              <div className='fs-md'>{playlist.name}</div>
              <div>
                <img className='bor-round mr-1' src={playlist.creator.avatarUrl} width='30px' />
                <span>{playlist.creator.nickname}</span>
              </div>
              <div className='more-elli fs-xxs txt-gray'>{playlist.description}</div>
            </div>
          </div>
          <div className='flex jus-between txt-white px-2 mb-1 mt-3 txt-cen'>
            <div>
              <MessageOutlined className='fs-xll' />
              <div>{this.formatNum(playlist.commentCount)}</div>
            </div>
            <div>
              <ShareAltOutlined className='fs-xll' />
              <div>{this.formatNum(playlist.shareCount)}</div>
            </div>
            <div>
              <HeartOutlined className='fs-xll' />
              <div>{this.formatNum(playlist.subscribedCount)}</div>
            </div>
            <div>
              <PlayCircleOutlined className='fs-xll' />
              <div>{this.formatNum(playlist.playCount)}</div>
            </div>

          </div>
          <div className='flex-1 bg-white over-scroll'>
            {
              playlist.tracks.map((item, index) => (
                <Link to={`/song/${item.id}`} key={item.id}>
                  <div className='flex ali-cen my-2 w-100'>
                    <div className='fs-lg txt-info px-2'>{index + 1}</div>
                    <div className='flex-1 over-hide'>
                      <div className='fs-lg txt-black one-elli'>
                        <span>{item.name}</span>
                        <span className='txt-info'>{item.tns ? `(${item.tns.join('/')})` : ''}</span>
                      </div>
                      <div className='fs-sm txt-info one-elli'>{this.showAuthor(item.ar)} - {item.al.name}</div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div> : ''
    }
  }

  formatNum = (num) => {
    num = num.toString();
    let numLength = num.length;
    if (numLength > 8) {
      num = num.slice(0, numLength - 8) + '亿';
    }
    else if (numLength > 5) {
      num = num.slice(0, numLength - 4) + '万';
    }
    return num;
  }

  showAuthor = (arr) => {
    console.log()
    let txt = arr.reduce((total, cur) => {
      return (total ? total + ' / ' + cur.name : cur.name);
    }, '')
    return txt;
  }
}

export default SongList;