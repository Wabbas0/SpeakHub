import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "../containers/Search/SearchRedux";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer
  });
