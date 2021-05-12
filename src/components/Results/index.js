// @flow
import React from "react";
import {
  List,
  Avatar,
  Icon,
  Skeleton,
  Tag,
  Tooltip,
  Descriptions,
  Typography
} from "antd";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import "./results.css";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

type Props = {
  currentPage: number,
  total: number,
  pageSize: number,
  loading: Boolean,
  resource: string,
  data: Array<Object>,
  onPageChange: ({ page: number }) => void
};

const Results = ({
  currentPage,
  total,
  pageSize = 10,
  data,
  resource,
  loading,
  onPageChange
}: Props) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        onPageChange({ page });
      },
      current: currentPage,
      total: total * 10,
      pageSize: pageSize
    }}
    loading={loading}
    dataSource={data}
    footer={
      <Skeleton
        loading={loading}
        active
        title={false}
        paragraph={{ rows: 1, width: 100 }}
      >
        <div>
          Page <b>{currentPage}</b> of <b>{total}</b>
        </div>
      </Skeleton>
    }
    renderItem={item => (
      <List.Item key={item.id}>
        <Skeleton
          loading={loading}
          active
          title={false}
          avatar
          paragraph={{ rows: 4, width: ["80%", "50%", "40%"] }}
        >
          <List.Item.Meta
            avatar={
              <Tooltip placement="left" title={item.user && item.user.login}>
                <Avatar src={item.user && item.user.avatar_url} />
              </Tooltip>
            }
            title={
              <span>
                <a href="https://www.speakap.com">{item.title}</a>
                <Tag color={`${item.state === "open" ? "green" : "red"}`}>
                  {item.state}
                </Tag>
                <div>
                  <Typography.Text style={{ fontSize: "12px" }}>
                    #{item.id} opened by {item.user.login}{" "}
                    {timeAgo.format(new Date(item.created_at))}
                  </Typography.Text>
                </div>
              </span>
            }
            description={
              <p
                style={{
                  width: "33vw",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "#888"
                }}
              >
                {item.body}
              </p>
            }
          />
          <Descriptions column={{ xs: 1, sm: 1, md: 3 }}>
            <Descriptions.Item label={<b>Labels</b>}>
              {item.labels.length > 0
                ? item.labels.map((label, i) => (
                    <Tag key={label + i} color={`#${label.color}`}>
                      {label.name}
                    </Tag>
                  ))
                : "N/a"}
            </Descriptions.Item>
            <Descriptions.Item label={<b>Assignee</b>}>
              {item.assignee ? item.assignee.login : "N/a"}
            </Descriptions.Item>
            {resource === "pulls" ? (
              <Descriptions.Item label={<b>Merged</b>}>
                {item.merged_at ? "Yes" : "No"}
              </Descriptions.Item>
            ) : (
              <Descriptions.Item
                label={<IconText type="message" text="Comments" />}
              >
                {item.comments}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Skeleton>
      </List.Item>
    )}
  />
);

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    <b>{text}</b>
  </span>
);

export default Results;
