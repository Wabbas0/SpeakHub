//flow
import React from "react";
import { Layout, Affix, Row, Col, Icon } from "antd";
import Sort from "../Sort";
import NavBar from "../NavBar";
import QueryBuilder from "../QueryBuilder";
import RepoInfo from "../RepoInfo";
import Results from "../Results";

import dummy from "./dummy.js";

const { Header, Sider, Content } = Layout;

function SearchPage() {
  return (
    <Layout>
      <Affix style={{ zIndex: "100" }}>
        <Header>
          <NavBar />
        </Header>
      </Affix>

      <Layout>
        <Affix offsetTop={64}>
          <Sider
            collapsedWidth={0}
            breakpoint="md"
            width={300}
            theme="light"
            style={{ height: "calc(100vh - 64px" }}
          >
            <QueryBuilder
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
        </Affix>

        <Content
          style={{ padding: "20px 35px", maxWidth: "1124px", margin: "0 auto" }}
        >
          <Row type="flex" justify="space-between" align="middle" style={{marginBottom: " 20px"}}>
            <Col>
              <RepoInfo
                repoName="react"
                repoOwner="facebook"
                issuesCount={10}
                pullsCount={20}
              />
            </Col>
            <Col>
              <Sort handleChange={sort => console.log(sort)} />
            </Col>
          </Row>

          <Results data={dummy} currentPage={1} total={30} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default SearchPage;
