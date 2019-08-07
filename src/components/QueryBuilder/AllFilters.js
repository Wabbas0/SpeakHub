// @flow
import React from "react";
import { Typography } from "antd";
import { Form, Button } from "antd";
import type { Query } from "./";
import FilterParam from "./FilterParam";
import Author from "../../containers/Author/AuthorContainer";

type Props = {
  query: Query,
  searchIn: string,
  onApply: (query: Query) => void
};

type State = { query: Query };

class AllFilters extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      query: props.query
    };
  }

  handleChange = (query: Query) => {
    this.setState(prevState => {
      return { query: { ...prevState.query, ...query } };
    });
  };

  render() {
    const { query } = this.state;
    const { searchIn, onApply } = this.props;
    return (
      <Form>
        <Typography.Title className="search__title" level={4}>
          All Filters
        </Typography.Title>
        <Form.Item label="Labels">
          {/*Labels component}*/}

          <FilterParam
            selectType="multiple"
            onChange={value => this.handleChange({ labels: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.labels}
            label="Labels"
            placeholder="Choose labels"
          />
        </Form.Item>

        <Form.Item label="Author">
          <Author
            query={query}
            onChange={value => this.handleChange({ creator: value })}
          />
        </Form.Item>

        <Form.Item label="Assignee">
          <FilterParam
            selectType="default"
            onChange={value => this.handleChange({ assignee: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.assignee}
            label="Assignee"
            placeholder="Choose Assignee"
          />
        </Form.Item>

        <Form.Item label="Milestone">
          <FilterParam
            selectType="default"
            onChange={value => this.handleChange({ milestone: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.milestone}
            label="Milestone"
            placeholder="Choose milestone"
          />
        </Form.Item>

        <Form.Item label="Projects">
          <FilterParam
            selectType="multiple"
            onChange={value => this.handleChange({ projects: value })}
            options={[]}
            value={query.projects}
            label="Projects"
            placeholder="Choose projects"
          />
        </Form.Item>

        {searchIn === "pulls" && (
          <Form.Item label={"Reviews"}>
            <FilterParam
              selectType="multiple"
              onChange={value => this.handleChange({ reviews: value })}
              options={[]}
              value={query.reviews}
              label="Reviews"
              placeholder="Choose reviews"
            />
          </Form.Item>
        )}

        <Form.Item>
          <Button icon="search" type="primary" onClick={e => onApply(query)}>
            Apply
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AllFilters;
