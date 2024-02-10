'use client'
import { Inter } from "next/font/google";
import React from 'react';
import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import Link  from 'next/link';
import "./globals.css";

const { Header, Content, Footer } = Layout;

const items = new Array(1).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

  const { darkAlgorithm } = theme;

export default function RootLayout({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <html>
        <body>
          <ConfigProvider
           theme={{
            algorithm: darkAlgorithm
           }}>
            <Layout>
            <Header style={{ position: 'fixed', padding: '0 0 0 0', width: '100%', zIndex: 100, display: 'flex', alignItems: 'center', background: 'transparent' }}>
                <div float='right' />
                <Menu
                  theme="light"
                  mode="horizontal"
                  style={{ flex: 1, minWidth: 10 }}
                  className="transparent-menu"
                >
                  <Menu.Item key='conversation'>
                    <Link href="/conversation"> Chat </Link>
                  </Menu.Item>
              </Menu>
              </Header>
              <Content >
                <div
                  style={{
                    background: colorBgContainer,
                    position: 'fixed',
                    minHeight: 800,
                    padding: '0 0 0 0',
                    borderRadius: borderRadiusLG,
                    width: '100%'
                  }}
                >
                  <div style={{ width: '100%', alignItems: 'center', paddingBottom: '1000px', height: '100px'}}>
                    {children}
                  </div>
                </div>
              </Content>
          </Layout>
        </ConfigProvider>  
      </body>
    </html>
  );
};
