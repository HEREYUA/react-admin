import React, { Component } from 'react'
import {Menu} from 'antd'
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
  import { Link } from 'react-router-dom';
  const { SubMenu } = Menu;
export default class SiderNav extends Component {
    render() {
        return (
            <div>
                 <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"
                  
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/about">关于</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                        <Link to="/test">测试</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                </Menu>
            </div>
        )
    }
}
