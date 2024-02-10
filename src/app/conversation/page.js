'use client'
import React from "react"
import UserInput from "@/app/components/search/UserInput"
import AIDialog from "@/app/components/search/AIDialog"
import { Layout, Menu, Space, theme } from "antd"

const { Header, Content, Footer, Sider } = Layout;

export default function Page() {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <>  
            <Layout
                style={{ padding: '1% 0 0 0', background: colorBgContainer, borderRadius: borderRadiusLG, width: '100%' }}
            >
                <Sider style={{ background: colorBgContainer }} width={'40%'}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    // items={items2}
                    />
                </Sider>
                <Content style={{ padding: '0 2%', minHeight: 280, width: '100%' }}>
                    <Space direction="vertical" >
                        <AIDialog/>
                        <UserInput/>
                    </Space>
                </Content>
            </Layout>
            
        </>
    );
};