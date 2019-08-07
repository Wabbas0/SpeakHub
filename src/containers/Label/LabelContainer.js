import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterParam from "../../components/QueryBuilder/FilterParam";

import { loadLabel } from "./LabelRedux";

class Label extends React.Component {
  componentDidMount() {
    const { match, loadLabel, labelData } = this.props;
    const { params } = match;

    if (labelData.length === 0) {
      loadLabel(params.repoName, params.repoOwner);
    }
  }

  render() {
    const { query, labelData, onChange, loading } = this.props;
    return (
      <FilterParam
        selectType="multiple"
        onChange={onChange}
        options={labelData}
        value={query.labels && query.labels.split && query.labels.split(",")}
        label="Labels"
        placeholder="Choose labels"
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    labelData: state.label.data,
    loading: state.label.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLabel: (repoName, repoOwner) => {
      dispatch(loadLabel(repoName, repoOwner));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Label));
