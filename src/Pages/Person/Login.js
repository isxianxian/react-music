import React from 'react';
import action from '../../store/action';
import { connect } from 'react-redux';
import { Form, Input, Button, } from 'antd';
import { login } from '../../api/person'


class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='h-100'>
      注册登陆页面
      <div>
        <Form
          name="basic"
          onFinish={this.onFinish}
        >
          <Form.Item
            label="Username"
            name="phone"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  }

  onFinish = (info) => {
    login(info).then(res => {
      // 把用户信息存到redux中,跳转到info页面
      if (res.code == 200) {
        let { saveUserInfo } = this.props,
          tempObj = {
            isLogin: true,
            loginInfo: res
          };
        localStorage.setItem('userInfo', JSON.stringify(tempObj));
        saveUserInfo(tempObj);
      } else {
        // 警告提示
      }
    })
  }

}

export default connect((state => state.person), action.person)(Login);