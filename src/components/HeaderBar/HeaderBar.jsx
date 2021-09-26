import React, { Component } from 'react'
// import {Button} from  'antd'
import{
    MenuUnfoldOutlined,
    MenuFoldOutlined
}from '@ant-design/icons'

import './header.css'
export default class HeaderBar extends Component {
    render() {
        return (
            <div>
               <div type="primary" onClick={this.props.toggle} className="collapse-btn">
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined  : MenuFoldOutlined)}
                </div>
            </div>
        )
    }
}

