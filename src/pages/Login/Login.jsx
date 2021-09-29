import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,InsuranceOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';
import {randomRgbColor} from '../../utils/utils'
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
    var currentCode=[]
    var context = this.canvas.getContext("2d");
    this.canvas.width = 100;
    this.canvas.height = 40;
    context.strokeRect(0, 0, 100, 40);
    var aCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,1,2,3,4,5,6,7,8,9";
    console.log(aCode.split(","));
    var aLength = aCode.split(",").length;
    for (var i = 0; i <= 3; i++) {
        var x = 20 + i * 20;
        var y = 20 + Math.random() * 10;
        var j = Math.floor(Math.random() * aLength);
        var deg = Math.random() * 90 * Math.PI / 180;//随机弧度
        var txt = aCode.split(",")[j];
        currentCode[i]=txt.toLowerCase()
        context.fillStyle = randomRgbColor();
        context.font = "bold 20px 微软雅黑";
        //修改坐标原点和旋转角度
        context.translate(x, y);
        context.rotate(deg);
        context.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        context.rotate(-deg);
        context.translate(-x, -y);
    }
    //干扰线
    for (var j = 0; j < 8; j++) {
        context.strokeStyle = randomRgbColor();
        context.beginPath();
        context.moveTo(Math.random() * 120, Math.random() * 40);
        context.lineTo(Math.random() * 120, Math.random() * 40);
        context.stroke();
    }
    /**绘制干扰点**/
    for (var k= 0; k < 20; k++) {
        context.fillStyle = randomRgbColor();
        context.beginPath();
        context.arc(Math.random() * 120, Math.random() * 40, 1, 0, 2 * Math.PI);
        context.fill();
    }
    this.setState({code:currentCode.join("")})
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
                     wrapperCol= {{ span: 5 ,offset:9}}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{required:true,message:'请输入用户名'}]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        
                    </Form.Item>
                    <Form.Item
                        name="password"
                            rules={[{ required: true, message: '请输入密码!' },
                        {
                            
                            validator: (_, value) =>{
                                
                            if(value.length >= 6 && value.length<=10) {
                                return Promise.resolve()
                            }else{
                                return Promise.reject('密码长度必须是6~10位')
                            }
                            }
                            
                        }]}
                    >
                        <Input.Password 
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item
                        
                        
                    >
                         <Form.Item name="code" noStyle
                            rules={[
                                {required:true,message:'请输入验证码！'},
                                {
                                    validator:(_,value)=>{
                                        console.log(value.toLowerCase(),this.state.code)
                                        if(this.state.code==value.toLowerCase()){
                                            return Promise.resolve()
                                        }else{
                                            return Promise.reject('请输入正确的验证码')
                                        }
                                    }
                                }
                            ]}
                         >
                         <Input
                         style={{width:'50%',position:'absolute',top:0}}
                        prefix={<InsuranceOutlined className="site-form-item-icon" />}
                        placeholder="验证码"
                        />
                        </Form.Item>
                       
                       
                        <canvas onClick={this.createCode}  style={{marginLeft:'75%'}} ref={el => this.canvas = el}/>
                      
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a style={{marginLeft:'50%'}} className="login-form-forgot" href="">
                        忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login)