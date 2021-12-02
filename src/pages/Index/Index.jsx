import React, { Component } from 'react'
import { Layout} from 'antd'
import './index.css'
import SiderNav from '../../components/SiderNav/SiderNav'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import MainContent from '../../components/MainContent/MainContent'
const { Header, Sider, Content } = Layout;

export default function Index(){
    const [collapse,setCollpse]=React.useState(false)
    const  toggle = () => {
          setCollpse(!collapse)
      };
   
        return (
            <div>
                 <Layout>
                    <Sider trigger={null} collapsible collapsed={collapse}>
                        <div style={{height: '100vh',overflowY:'scroll'}}>
                            <div className="logo" />
                            <SiderNav />
                        </div>
                       
                    </Sider>
                    <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                       <HeaderBar collapsed={collapse} toggle={toggle}/>
                    </Header>
                  
                    <Content>
                        <MainContent/>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    
    
}


  
