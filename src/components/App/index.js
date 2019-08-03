//flow
import React from "react";
import { Layout } from "antd";
import Logo from "../Logo";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{
        background: "#fff"
      }}>
        <Logo url="https://www.speakap.com/hubfs/favicon.png" />
      </Header>
      {/* <Layout>
        <Sider theme="light">Sider</Sider>
        <Content>Content</Content>
      </Layout> */}
    </Layout>
  );
}

export default App;
