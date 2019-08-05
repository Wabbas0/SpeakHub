// @flow
import React from "react";
import { Breadcrumb, Skeleton, Badge, Typography, Tag } from "antd";

import "./repo.css";

type Props = {
  issuesCount: number,
  pullsCount: number,
  repoName: string,
  repoOwner: string,
  loading: boolean
};
const RepoInfo = ({
  issuesCount,
  pullsCount,
  repoName,
  repoOwner,
  loading
}: Props) => (
  <Skeleton
    active
    title={false}
    loading={loading}
    paragraph={{ rows: 2, width: [200, 150] }}
  >
    <div className="repo">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Typography.Text className="repo__text" strong>
            {repoOwner}
          </Typography.Text>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Typography.Text className="repo__text" strong>
            {repoName}
          </Typography.Text>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <Tag className={"repo__tag"}>
          <Typography.Text>
            Issues{" "}
            <Badge
              className="repo__badge"
              count={issuesCount}
              style={{ background: "#777" }}
            />
          </Typography.Text>
        </Tag>

        <Tag className={"repo__tag"}>
          <Typography.Text>
            Pulls{" "}
            <Badge
              className="repo__badge"
              count={pullsCount}
              style={{ background: "#777" }}
            />
          </Typography.Text>
        </Tag>
      </div>
    </div>
  </Skeleton>
);

export default RepoInfo;
