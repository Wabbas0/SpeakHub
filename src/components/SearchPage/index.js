//flow
import React from "react";
import { Layout, Affix, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Sort from "../Sort";
import NavBar from "../NavBar";
import QueryBuilder from "../QueryBuilder";
import RepoInfo from "../RepoInfo";
import Results from "../Results";

const { Header, Sider, Content } = Layout;

function SearchPage({
  data,
  loading,
  onQueryChange,
  repoName,
  repoOwner,
  pagination,
  resource,
  query
}) {
  return (
    <Layout>
      <Affix style={{ zIndex: "100" }}>
        <Header>
          <NavBar
            logo="https://www.speakap.com/hubfs/favicon.png"
            user={{ userName: "WG75" }}
            menuItems={[{ itemName: "Pull requests" }, { itemName: "Issues" }]}
          />
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
            <QueryBuilder query={query} onChange={onQueryChange} />
          </Sider>
        </Affix>

        <Content
          style={{ padding: "20px 35px", maxWidth: "1124px", margin: "0 auto" }}
        >
          <Row
            type="flex"
            justify="space-between"
            align="middle"
            style={{ marginBottom: " 20px" }}
          >
            <Col>
              <RepoInfo
                loading={loading}
                repoName={repoName}
                repoOwner={repoOwner}
                issuesCount={10}
                pullsCount={20}
              />
            </Col>
            <Col>
              <Sort loading={loading} handleChange={onQueryChange} />
            </Col>
          </Row>

          <Results
            data={data}
            loading={loading}
            currentPage={1}
            total={30}
            resource={resource}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default SearchPage;
