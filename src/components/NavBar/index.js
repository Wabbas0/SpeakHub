// @flow
import React from "react";
import { Row, Col, Icon } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";

import "./navbar.css";

type Props = {
  logo: string,
  menuItems: Array<{ itemName: string, path: string }>,
  user: { userName: string, picture: string }
};

type State = {
  mobileMenuIsOpen: boolean
};

class NavBar extends React.Component<Props, State> {
  state = {
    mobileMenuIsOpen: false
  };

  toggleMpbileMenu() {
    this.setState(prevState => {
      return {
        mobileMenuIsOpen: !prevState.mobileMenuIsOpen
      };
    });
  }

  render() {
    const { logo, menuItems, user } = this.props;
    const { mobileMenuIsOpen } = this.state;
    return (
      <nav id="nav" className="nav">
        <Row type="flex" justify="space-between" align="middle">
          <Col md={12}>
            <Logo url="https://www.speakap.com/hubfs/favicon.png" />
          </Col>

          <Col md={0}>
            <Icon
              type="menu"
              onClick={() => {
                this.toggleMpbileMenu();
              }}
            />
            {mobileMenuIsOpen && (
              <Menu
                className="nav__mobile-menu"
                mode="vertical"
                onClick={() => {
                  this.toggleMpbileMenu();
                }}
                user={user}
                logo={logo}
                menuItems={menuItems}
              />
            )}
          </Col>
          <Col xs={0} md={12}>
            <Menu mode="horizontal" />
          </Col>
        </Row>
      </nav>
    );
  }
}

export default NavBar;
