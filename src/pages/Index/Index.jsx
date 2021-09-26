import React, { Component } from 'react'
import { Layout} from 'antd'
import './index.css'
import SiderNav from '../../components/SiderNav/SiderNav'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import MainContent from '../../components/MainContent/MainContent'
const { Header, Sider, Content } = Layout;

export default class Home extends Component {
    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div>
                 <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <SiderNav />
                    </Sider>
                    <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                       <HeaderBar collapsed={this.state.collapsed} toggle={this.toggle}/>
                    </Header>
                    <Content
                        className="site-layout-background content"
                      
                    >
                        <MainContent/>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
    
}


  