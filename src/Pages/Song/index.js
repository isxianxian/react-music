import React from 'react';
import { LeftOutlined, HeartOutlined, MessageOutlined, MoreOutlined, ShareAltOutlined, StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons';
import { songDetail } from '../../api/song';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {}
    }
  }

  componentWillMount() {
    let { id } = this.props.match.params;
    songDetail({ ids: id }).then(res => {
      this.setState({
        song: res.songs[0]
      })
    })
  }

  render() {
    let { song } = this.state,
      haveSong = !(JSON.stringify(song) == '{}');
    console.log(song)

    return haveSong ?
      <div className='h-100 bg pos-rel'>
        <div className="black-cover bg" style={{ backgroundImage: `url(${song.al.picUrl})`, filter: 'blur(5px)' }}></div>
        <div>
          <div className='pos-rel txt-white'>
            <div className='pos-cen p-2 ' style={{ left: '40px' }}>
              <LeftOutlined />
            </div>
            <div className='txt-cen  py-2 over-hide' style={{ margin: '0 100px' }}>
              <div className='fs-lg one-elli'> {song.name} {song.tns ? `(${song.tns.join('/')})` : ''}  </div>
              <div className='fs-sm one-elli'> {this.showAuthor(song.ar)} </div>
            </div>
          </div>
          <div style={{ marginTop: '30%' }}>
            <div className='box-size bor-round pic-cover bg m-auto' style={{ backgroundPosition: '-140px -580px', width: '206px', height: '206px', padding: '40px' }}>
              <img className='bor-round' src={song.al.picUrl} height='100%' />
            </div>
          </div>
          <div className='fs-play-icon txt-white px-4 my-4 flex jus-between'>
            <span className='p-2'><HeartOutlined /> </span>
            <span className='p-2'><ShareAltOutlined /></span>
            <span className='p-2'><MessageOutlined /></span>
            <span className='p-2'><MoreOutlined /></span>
          </div>
          <div className='px-4 py-2'>
            {/* 进度条 */}
            <div className='w-100 bg-white m-auto' style={{ height: '2px' }}></div>
          </div>
          <div className='txt-white px-4 my-4 flex jus-cen' style={{ fontSize: '32px' }}>
            <StepBackwardOutlined className='mx-4 p-2' />
            <PlayCircleOutlined className='mx-4 p-2' />
            <StepForwardOutlined className='mx-4 p-2' />
          </div>
        </div>
      </div> :
      '';

  }

  showAuthor = (arr) => {
    console.log()
    let txt = arr.reduce((total, cur) => {
      return (total ? total + ' / ' + cur.name : cur.name);
    }, '')
    return txt;
  }
}

export default Song;