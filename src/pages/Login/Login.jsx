import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router';
import './login.css'
@inject('loginStore')
@observer
class Login extends Component {
   
        // 提交成功的回调
        onFinish = (values) => {
          console.log('Success:', values);
          this.props.loginStore.setUserInfo(values)
          this.props.history.push({pathname:'/'})
        };
      
        // 提交失败的回调
        onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        }
    render() {
        console.log(this.props)
        return (
            <div className="login-form">
                 <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 5 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                    
                    >
                    <Form.Item
                        label="姓名"
                        name="username"
                        rules={[{ required: true, message: '请输入你的姓名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入你的密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login)