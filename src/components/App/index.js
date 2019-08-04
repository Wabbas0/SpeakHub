//flow
import React from "react";
import { Layout } from "antd";
import NavBar from "../NavBar";
import Search from "../Search";
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
      <Layout>
        <Sider width={300} theme="light">
          <Search
            query={{
              status: "closed",
              labels: ["bug", "55555"],
              author: "WG75",
              assignee: "Wg75",
              projects: ["v1", "v2"],
              reviews: ["v3", "v2"],
              milestones: ["v4", "v2"]
            }}
            onChange={query => console.log(query)}
          />
        </Sider>
        {/* <Content>Content</Content> */}
      </Layout>
    </Layout>
  );
}

export default App;
