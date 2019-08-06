// @flow

import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { history } from "../../redux/index";
import Search from "../Search/SearchContainer";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="search/ant-design/ant-design/issues" />}
      />
      <Route path="/search/:repoOwner/:repoName/:resource" component={Search} />
    </Switch>
  </ConnectedRouter>
);

export default App;
