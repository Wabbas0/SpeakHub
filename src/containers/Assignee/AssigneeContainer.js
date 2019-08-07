import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterParam from "../../components/QueryBuilder/FilterParam";

import { loadAssignee } from "./AssigneeRedux";

class Assignee extends React.Component {
  componentDidMount() {
    const { match, loadAssignee, assigneeData } = this.props;
    const { params } = match;

    if (assigneeData.length === 0) {
      loadAssignee(params.repoName, params.repoOwner);
    }
  }

  render() {
    const { query, assigneeData, onChange, loading } = this.props;

    return (
      <FilterParam
        selectType="default"
        onChange={onChange}
        options={assigneeData}
        value={query.assignee}
        label="Assignee"
        placeholder="Choose assignee"
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    assigneeData: state.assignee.data,
    loading: state.assignee.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAssignee: (repoName, repoOwner) => {
      dispatch(loadAssignee(repoName, repoOwner));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Assignee));
