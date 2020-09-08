import React from 'react';
import action from '../../store/action';
import { connect } from 'react-redux';

class Hot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextprops, prevState) {
    let { hots, getHotList } = nextprops;
    if (!hots.length) {
      getHotList();
    }

    return null;
  }

  render() {
    let { hots } = this.props;

    return <div className='h-100'>
      <div className='flex flex-wrap mt-3'>
        {
          hots.length ? hots.map((item, index) => <div className='border bor-rad5 py-1 px-2 m-2 bg-gray-1' style={{ borderRadius: '30px' }} key={index}>{item.first}</div>) : ''
        }
      </div>
    </div>
  }
}

export default connect((state) => (state.find), action.find)(Hot);