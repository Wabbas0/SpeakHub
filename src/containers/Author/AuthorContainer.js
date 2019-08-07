import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterParam from "../../components/QueryBuilder/FilterParam";
import { loadAuthor } from "./AuthorRedux";

class Author extends React.Component {
  componentDidMount() {
    const { match, loadAuthor, authorData } = this.props;
    const { params } = match;

    if (authorData.length === 0) {
      loadAuthor(params.repoName, params.repoOwner);
    }
  }

  render() {
    const { query, authorData, onChange } = this.props;
    return (
      <FilterParam
        selectType="default"
        onChange={onChange}
        options={authorData}
        value={query.creator}
        label="Author"
        placeholder="Choose Author"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authorData: state.author.data,
    loading: state.author.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAuthor: (repoName, repoOwner) => {
      dispatch(loadAuthor(repoName, repoOwner));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Author));
