//flow
import React from "react";
import { Layout } from "antd";
import NavBar from "../NavBar";
import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header
        style={{
          background: "#fff"
        }}
      >
        <NavBar />
      </Header>
      {/* <Layout>
        <Sider theme="light">Sider</Sider>
        <Content>Content</Content>
      </Layout> */}
    </Layout>
  );
}

export default App;
