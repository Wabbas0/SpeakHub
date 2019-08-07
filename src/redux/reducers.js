import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "../containers/Search/SearchRedux";
import authorReducer from "../containers/Author/AuthorRedux";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    author: authorReducer
  });
