import React, { Component } from 'react';
import { Flex, List, InputItem, Button, WhiteSpace } from 'antd-mobile'
import { createForm } from 'rc-form';
import logo from 'images/logo.png'
import './index.less'


class BaseForm extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.props)
    const { username, password } = this.props.formValue
    return (
      <List >
        <InputItem
          {...getFieldProps('username')}
          placeholder="username"
          defaultValue={username}
        >姓名</InputItem>
        <InputItem
          {...getFieldProps('password')}
          type="password"
          defaultValue={password}
          placeholder="password"
        >密码</InputItem>
        <WhiteSpace />
        <List.Item>
          <Button type="primary" onClick={e => this.props.logoBtn({
            username: getFieldProps('username').value,
            password: getFieldProps('password').value
          })}>登录</Button>
        </List.Item>
      </List>
    )
  }
}
const FormWrap = createForm()(BaseForm)

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultForm: {
        username: 'test', password: '222'
      }
    };
  }
  logoBtn = e => {
    console.log(e)
  }
  render() {
    return (
      <Flex direction="column" align="center" justify="center" >
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <FormWrap logoBtn={this.logoBtn} formValue={this.state.defaultForm} />
      </Flex>
    );
  }
}



export default index;