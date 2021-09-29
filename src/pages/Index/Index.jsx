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
                        <div style={{height: '100vh',overflowY:'scroll'}}>
                            <div className="logo" />
                            <SiderNav />
                        </div>
                       
                    </Sider>
                    <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                       <HeaderBar collapsed={this.state.collapsed} toggle={this.toggle}/>
                    </Header>
                  
                    <Content>
                        <MainContent/>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
    
}


  
