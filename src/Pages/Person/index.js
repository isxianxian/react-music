// 先在一级路由进行权限判断，再进对应的二级路由
import React from 'react';
import { withRouter } from 'react-router-dom';
import action from '../../store/action';
import { connect } from 'react-redux';
import { login } from '../../api/person';

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 0  // 0 表示未登录 1 表示已登陆
    }
  }

  // componentWillMount() {
  //   let { isLogin, checkLogin, history, location: { pathname } } = this.props;
  //   if (isLogin && pathname == '/person/login') {
  //     history.push('/person/info')
  //   }

  //   if (!isLogin && pathname == '/person/info') {
  //     history.push('/person/login')
  //   }
  // }


  // componentWillUpdate(props, state) {
  //   console.log(props, state)
  //   let { isLogin, checkLogin, history, location: { pathname } } = this.props;
  //   if (isLogin && pathname == '/person/login') {
  //     history.push('/person/info')
  //   }

  //   if (!isLogin && pathname == '/person/info') {
  //     history.push('/person/login')
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { isLogin, loginInfo, saveUserInfo, history, location: { pathname } } = nextProps;

    if (isLogin && pathname == '/person/login') {
      history.push('/person/info')
    }

    if (!isLogin) {
      let userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        isLogin = userInfo.isLogin;
        loginInfo = userInfo.loginInfo;

        if (isLogin) {
          saveUserInfo(userInfo)
        }

      } else if (pathname == '/person/info') {
        history.push('/person/login')
      }
    }
    return null;
  }

  render() {
    return <div className='h-100'>
      <div>
        {this.props.children}
      </div>
    </div>
  }

}

export default withRouter(connect((state => state.person), action.person)(Person));