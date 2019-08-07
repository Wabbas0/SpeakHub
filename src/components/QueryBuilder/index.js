// @flow
import React from "react";
import { Typography } from "antd";
import { Form, Radio, Button, Badge, Row, Col } from "antd";
import FilterParam from "./FilterParam";
import AllFilters from "./AllFilters";
import Author from "../../containers/Author/AuthorContainer";
import Label from "../../containers/Label/LabelContainer";
import Assignee from "../../containers/Assignee/AssigneeContainer";

import "./query_builder.css";

export type Query = {
  state?: string,
  labels?: Array<string>,
  creator?: string,
  projects?: Array<string>,
  milestones?: Array<string>,
  assignee?: string,
  reviews?: Array<string>
};

type Props = {
  searchIn: string,
  query: Query,
  onChange: (query: Query) => void
};

type State = {
  filtersMenuIsOpen: boolean
};

class QueryBuilder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filtersMenuIsOpen: false
    };
  }

  handleChange = (query: Query) => {
    const { onChange } = this.props;

    onChange(query);
  };

  toggleFiltersMenu = () => {
    this.setState(prevState => {
      return { filtersMenuIsOpen: !prevState.filtersMenuIsOpen };
    });
  };

  getQueryLength = (query: Query): number => {
    let queryLength = 0;

    Object.keys(query).forEach(prop => {
      if (query[prop] && (query[prop] && query[prop].length > 0)) {
        ++queryLength;
      }
    });

    return queryLength;
  };

  clearAll = () => {
    const { onChange, query } = this.props;
    const newQuery: Query = {};

    Object.keys(query).forEach(param => {
      newQuery[param] = undefined;
    });

    onChange({ ...newQuery, state: "open" });
  };

  render() {
    const { searchIn, query } = this.props;
    const { filtersMenuIsOpen } = this.state;
    const {
      state,
      labels,
      creator,
      sort,
      direction,
      page,
      ...otherParams
    } = query;

    let unCommonParamsLength: number = this.getQueryLength(otherParams);
    let queryLength: number =
      unCommonParamsLength + this.getQueryLength({ state, labels, creator });

    return (
      <section id="search" className="search">
        <div className="search__container">
          <Typography.Title className="search__title" level={4}>
            Search
          </Typography.Title>
          <Form>
            <Form.Item>
              <Radio.Group
                value={query.state || "open"}
                defaultValue={"open"}
                buttonStyle="solid"
                onChange={({ target }) =>
                  this.handleChange({ state: target.value })
                }
              >
                <Radio.Button value="open">Open</Radio.Button>
                <Radio.Button value="closed">Closed</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Row type="flex" justify="center" gutter={7}>
              <Col
                order={
                  !query.labels || (query.labels && query.labels.length === 0)
                    ? 1
                    : 0
                }
                span={
                  unCommonParamsLength === 0 ||
                  !query.labels ||
                  (query.labels && query.labels.length === 0)
                    ? 24
                    : null
                }
              >
                <Form.Item>
                  <Label
                    query={query}
                    onChange={value =>
                      this.handleChange({
                        labels: value.length > 0 ? value.join() : []
                      })
                    }
                  />
                </Form.Item>
              </Col>

              <Col
                order={!query.creator ? 1 : 0}
                span={unCommonParamsLength === 0 || !query.creator ? 24 : null}
              >
                <Form.Item>
                  <Author
                    query={query}
                    onChange={value => this.handleChange({ creator: value })}
                  />
                </Form.Item>
              </Col>

              {query.assignee && (
                <Col>
                  <Form.Item>
                    <Assignee
                      query={query}
                      onChange={value => this.handleChange({ assignee: value })}
                    />
                  </Form.Item>
                </Col>
              )}

              {query.projects && query.projects.length > 0 && (
                <Col>
                  <Form.Item>
                    <FilterParam
                      selectType="multiple"
                      onChange={value => this.handleChange({ projects: value })}
                      options={[]}
                      label="Projects"
                      placeholder="Choose projects"
                    />
                  </Form.Item>
                </Col>
              )}

              {query.milestone && (
                <Col>
                  <Form.Item>
                    <FilterParam
                      selectType="default"
                      onChange={value =>
                        this.handleChange({ milestone: value })
                      }
                      options={[
                        { label: "Linked to a milestone", value: "*" },
                        { label: "Not linked to a milestone", value: "none" }
                      ]}
                      value={query.milestone}
                      label="Milestone"
                      placeholder="Choose milestone"
                    />
                  </Form.Item>
                </Col>
              )}

              {query.reviews && query.reviews.length > 0 && (
                <Col>
                  <Form.Item>
                    <FilterParam
                      selectType="multiple"
                      onChange={value => this.handleChange({ reviews: value })}
                      options={[]}
                      label="Reviews"
                      placeholder="Choose reviews"
                    />
                  </Form.Item>
                </Col>
              )}
            </Row>

            {queryLength > 1 && (
              <Form.Item>
                <Button type="link" onClick={this.clearAll}>
                  Clear {"  "} <Badge count={queryLength} offset={[3, 0]} />
                </Button>
              </Form.Item>
            )}

            <Form.Item>
              <Button
                icon="filter"
                type="dashed"
                onClick={this.toggleFiltersMenu}
              >
                All Filters
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div
          className={`search__filters ${
            filtersMenuIsOpen ? "search__filters--is-shown" : ""
          }`}
        >
          {filtersMenuIsOpen && (
            <AllFilters
              query={query}
              searchIn={searchIn}
              onApply={(query: Query) => {
                this.toggleFiltersMenu();
                this.handleChange(query);
              }}
            />
          )}
        </div>
      </section>
    );
  }
}

export default QueryBuilder;
