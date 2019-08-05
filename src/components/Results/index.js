// @flow
import React from "react";
import { List, Avatar, Icon, Skeleton, Tag, Tooltip, Descriptions } from "antd";
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
  data: Array<Object>,
  onPageChange: ({ page: number }) => void
};

const Results = ({
  currentPage,
  total,
  pageSize,
  data,
  loading,
  onPageChange
}: Props) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10
    }}
    dataSource={data}
    footer={
      <div>
        Page <b>{currentPage}</b> of <b>{total}</b>
      </div>
    }
    renderItem={item => (
      <List.Item key={item.id}>
        <Skeleton
          loading
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
                <a>{item.title}</a>
                {"  "}
                <Tag color={`${item.state === "open" ? "green" : "red"}`}>
                  {item.state}
                </Tag>
                <div>
                  <span>
                    #{item.id} opened by {item.user.login}{" "}
                    {timeAgo.format(new Date(item.created_at))}
                  </span>
                </div>
              </span>
            }
            description={
              <p
                style={{
                  width: "33vw",
                  "white-space": "nowrap",
                  overflow: "hidden",
                  "text-overflow": "ellipsis"
                }}
              >
                {item.body}
              </p>
            }
          />
          <Descriptions column={3}>
            <Descriptions.Item label={<b>Labels</b>}>
              {item.labels.length > 0
                ? item.labels.map(label => (
                    <Tag color={`#${label.color}`}>{label.name}</Tag>
                  ))
                : "N/a"}
            </Descriptions.Item>
            <Descriptions.Item label={<b>Assignee</b>}>
              {item.assignee ? item.assignee.login : "N/a"}
            </Descriptions.Item>
            <Descriptions.Item
              label={<IconText type="message" text="Comments" />}
            >
              {item.comments}
            </Descriptions.Item>
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
