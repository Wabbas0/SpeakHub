// @flow
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Typography } from "antd";
import { Avatar } from "antd";
import { Menu as AntdMenu } from "antd";

const Menu = ({
  mode,
  className,
  onClick,
  match
}: {
  mode: string,
  className?: string,
  onClick?: () => void,
  match: Object
}) => (
  <AntdMenu
    className={`nav__menu ${className || ""}`}
    mode={mode}
    selectable={false}
  >
    <AntdMenu.Item className="nav__menu-item" key="pulls" onClick={onClick}>
      <Link
        to={`/search/${match.params.repoOwner}/${match.params.repoName}/pulls`}
      >
        Pull requests
      </Link>
    </AntdMenu.Item>
    <AntdMenu.Item className="nav__menu-item" key="issues" onClick={onClick}>
      <Link
        to={`/search/${match.params.repoOwner}/${match.params.repoName}/issues`}
      >
        Issues
      </Link>
    </AntdMenu.Item>
    <AntdMenu.Item className="nav__menu-item" key="profile" onClick={onClick}>
      <Avatar className="nav__user-avatar" icon="user" />
      <Typography.Text strong>WG75</Typography.Text>
    </AntdMenu.Item>
  </AntdMenu>
);

export default withRouter(Menu);
