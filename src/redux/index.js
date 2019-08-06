import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import thunk from "redux-thunk";
import createRootReducer from "./reducers";
import api from "../api";

export const history = createBrowserHistory();

export default () => {
  const middlewares = [];

  // init thunk middleware
  const thunkMiddleware = thunk.withExtraArgument(api);
  middlewares.push(thunkMiddleware);

  // router middleware
  middlewares.push(routerMiddleware(history));

  let store;
  store = createStore(
    createRootReducer(history),
    applyMiddleware(...middlewares)
  );

  return store;
};
