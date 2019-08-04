// @flow
import React from "react";
import { Typography } from "antd";
import { Form, Button } from "antd";
import type { Query } from "./";
import FilterParam from "./FilterParam";

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
        <Typography.Title level={4}>All Filters</Typography.Title>
        <Form.Item label="Labels">
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
          <FilterParam
            selectType="default"
            onChange={value => this.handleChange({ author: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.author}
            label="Author"
            placeholder="Choose Author"
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

        <Form.Item label="Projects">
          <FilterParam
            selectType="multiple"
            onChange={value => this.handleChange({ projects: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.projects}
            label="Projects"
            placeholder="Choose projects"
          />
        </Form.Item>
        <Form.Item label="Milestones">
          <FilterParam
            selectType="multiple"
            onChange={value => this.handleChange({ milestones: value })}
            options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
            value={query.milestones}
            label="Milestones"
            placeholder="Choose milestones"
          />
        </Form.Item>

        {searchIn === "pulls" && (
          <Form.Item label={"Reviews"}>
            <FilterParam
              selectType="multiple"
              onChange={value => this.handleChange({ reviews: value })}
              options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
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
