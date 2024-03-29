// @flow
import React from "react";
import { Typography } from "antd";
import { Form, Button } from "antd";
import type { Query } from "./";
import FilterParam from "./FilterParam";
import Label from "../../containers/Label/LabelContainer";
import Author from "../../containers/Author/AuthorContainer";
import Assignee from "../../containers/Assignee/AssigneeContainer";

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
      <Form id="#mobile" style={{ position: "relative" }}>
        <Typography.Title className="search__title" level={4}>
          All Filters
        </Typography.Title>
        <Form.Item label="Labels">
          {/*Labels component}*/}

          <Label
            query={query}
            onChange={value =>
              this.handleChange({
                labels: value.length > 0 ? value.join() : []
              })
            }
          />
        </Form.Item>

        <Form.Item label="Author">
          <Author
            query={query}
            onChange={value => this.handleChange({ creator: value })}
          />
        </Form.Item>

        <Form.Item label="Assignee">
          <Assignee
            query={query}
            onChange={value => this.handleChange({ assignee: value })}
          />
        </Form.Item>

        <Form.Item id="#milestone" label="Milestone">
          <FilterParam
            selectType="default"
            onChange={value => this.handleChange({ milestone: value })}
            options={[
              { label: "Linked to a milestone", value: "*" },
              { label: "Not linked to a milestone", value: "none" }
            ]}
            value={query.milestone}
            label="Milestone"
            placeholder="Choose milestone"
            popup="milestone"
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
