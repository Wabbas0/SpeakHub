// @flow
import React from "react";
import { Typography } from "antd";
import { Avatar } from "antd";
import { Menu as AntdMenu } from "antd";

const Menu = ({
  mode,
  className,
  onClick
}: {
  mode: string,
  className?: string,
  onClick?: () => void
}) => (
  <AntdMenu
    className={`nav__menu ${className || ""}`}
    mode={mode}
    selectable={false}
  >
    <AntdMenu.Item className="nav__menu-item" key="pulls" onClick={onClick}>
      Pull requests
    </AntdMenu.Item>
    <AntdMenu.Item className="nav__menu-item" key="issues" onClick={onClick}>
      Issues
    </AntdMenu.Item>
    <AntdMenu.Item className="nav__menu-item" key="profile" onClick={onClick}>
      <Avatar className="nav__user-avatar" icon="user" />
      <Typography.Text strong>WG75</Typography.Text>
    </AntdMenu.Item>
  </AntdMenu>
);

export default Menu;
