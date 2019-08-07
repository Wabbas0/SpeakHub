import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "../containers/Search/SearchRedux";
import authorReducer from "../containers/Author/AuthorRedux";
import labelReducer from "../containers/Label/LabelRedux";
import assigneeReducer from "../containers/Assignee/AssigneeRedux";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    author: authorReducer,
    label: labelReducer,
    assignee: assigneeReducer
  });
