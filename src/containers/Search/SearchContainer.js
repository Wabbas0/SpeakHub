import React from "react";
import { connect } from "react-redux";
import qs from "query-string";
import { withRouter } from "react-router-dom";
import SearchPage from "../../components/SearchPage";
import { queryChange, loadResults } from "./SearchRedux";

class Search extends React.Component {
  componentDidMount() {
    const { location, loadResults, match } = this.props;
    const query = qs.parse(location.search);
    loadResults(query, match.params);
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    const { location: nextlocation, loadResults, match } = nextProps;
    if (
      nextlocation.pathname !== location.pathname ||
      nextlocation.search !== location.search
    ) {

      const query = qs.parse(nextlocation.search);

      loadResults(query, match.params);
    }
  }

  render() {
    return (
      <SearchPage
        {...this.props.search}
        onQueryChange={this.props.queryChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.router.location,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    queryChange: change => dispatch(queryChange(change)),
    loadResults: (query, params) => dispatch(loadResults(query, params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search));
