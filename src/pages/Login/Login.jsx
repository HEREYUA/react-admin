import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router';
import {randomNum} from '../../utils/utils'
import './login.css'
@inject('loginStore')
@observer
class Login extends Component {
   state={
       code:''
   }

          /**
   * 生成验证码
   */
  createCode = () => {
    const ctx = this.canvas.getContext('2d')
    const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let code = ''
    ctx.clearRect(0, 0, 80, 39)
    for (let i = 0; i < 4; i++) {
      const char = chars[randomNum(0, 57)]
      code += char
      ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
      ctx.fillStyle = '#D3D7F7'
      ctx.textBaseline = 'middle'
      ctx.shadowOffsetX = randomNum(-3, 3)
      ctx.shadowOffsetY = randomNum(-3, 3)
      ctx.shadowBlur = randomNum(-3, 3)
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      let x = 80 / 5 * (i + 1)
      let y = 39 / 2
      let deg = randomNum(-25, 25)
      /**设置旋转角度和坐标原点**/
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(char, 0, 0)
      /**恢复旋转角度和坐标原点**/
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    }
    this.setState({
      code
    })
  }
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

        componentDidMount(){
            this.createCode()
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
                    <Form.Item
                        label="验证码"
                        name="code"
                        rules={[{ required: true, message: '请输入你的验证码' }]}
                    >
                         <Input />
                       <canvas onClick={this.createCode} width="80" height='39' ref={el => this.canvas = el}/>
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