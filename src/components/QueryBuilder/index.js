// @flow
import React from "react";
import { Typography } from "antd";
import { Form, Radio, Button, Badge, Row, Col } from "antd";
import FilterParam from "./FilterParam";
import AllFilters from "./AllFilters";

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
      if (query[prop] !== undefined && query[prop].length > 0) {
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
    const { state, labels, creator, sort, ...otherParams } = query;

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
                  (query.labels && query.labels.length === 0)
                    ? 24
                    : null
                }
              >
                <Form.Item>
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
              </Col>

              <Col
                order={!query.creator ? 1 : 0}
                span={unCommonParamsLength === 0 || !query.creator ? 24 : null}
              >
                <Form.Item>
                  {/*Author component}*/}
                  <FilterParam
                    selectType="default"
                    onChange={value => this.handleChange({ creator: value })}
                    options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
                    value={query.creator}
                    label="Author"
                    placeholder="Choose Author"
                  />
                </Form.Item>
              </Col>

              {query.assignee && (
                <Col>
                  <Form.Item>
                    {/*Assignee component}*/}

                    <FilterParam
                      selectType="default"
                      onChange={value => this.handleChange({ assignee: value })}
                      options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
                      value={["Wg75"]}
                      label="Assignee"
                      placeholder="Choose Assignee"
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

              {query.milestone && query.milestone.length > 0 && (
                <Col>
                  <Form.Item>
                    {/*Milestone component}*/}

                    <FilterParam
                      selectType="default"
                      onChange={value =>
                        this.handleChange({ milestone: value })
                      }
                      options={["bug", "report", "v1", "v2", "v3", "v4", "v5"]}
                      value={["v1", "report"]}
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
