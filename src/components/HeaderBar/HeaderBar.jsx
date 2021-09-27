import React, { Component } from 'react'
import {Avatar,Menu,Dropdown} from  'antd'
import{
    MenuUnfoldOutlined,
    MenuFoldOutlined
}from '@ant-design/icons'
import { observer,inject } from 'mobx-react'
import { withRouter } from 'react-router'
import './header.css'
@inject('loginStore')
@observer
 class HeaderBar extends Component {
    state={
        imgUrl:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }

    logout=()=>{
        this.props.loginStore.logout()
        this.props.history.push({pathname:'/login'})
    }
    render() {
        const {imgUrl}=this.state
        const {loginStore} =this.props
        const menu = (
            <Menu className='menu'>
              <Menu.ItemGroup title='用户中心' className='menu-group'>
                <Menu.Item>你好--{loginStore.userInfo.username}</Menu.Item>
                <Menu.Item>个人信息</Menu.Item>
                <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title='设置中心' className='menu-group'>
                <Menu.Item>个人设置</Menu.Item>
                <Menu.Item>系统设置</Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          )
        return (
            <div className="header">
               <div onClick={this.props.toggle} className="collapse-btn">
                    {this.props.collapsed ? <MenuUnfoldOutlined style={{fontSize:'20px'}}/>  : <MenuFoldOutlined style={{fontSize:'20px'}}/>}
                </div>
                <div className="admin-info">
                    <Dropdown overlay={menu}>
                        <Avatar src={imgUrl} onClick={e=>e.preventDefault()}/>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderBar)