// @flow

import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { history } from "../../redux/index";
import SearchPage from "../../components/SearchPage";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="search/ant-design/ant-design/issues" />}
      />
      <Route path="/search/:collection/:owner/:repo" component={SearchPage} />
    </Switch>
  </ConnectedRouter>
);

export default App;
