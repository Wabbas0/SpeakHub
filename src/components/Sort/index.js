// @flow
import React from "react";
import FilterParam from "../Search/FilterParam";
import { Skeleton } from "antd";

type Props = {
  value: string,
  handleChange: ({ query: string }) => void,
  loading: boolean
};

const Sort = ({ value, handleChange, loading }: Props) => (
  <Skeleton
    active
    title={false}
    loading={loading}
    paragraph={{ rows: 1, width: 200 }}
  >
    <FilterParam
      options={[
        "newest",
        "oldest",
        "most commented",
        "least commented",
        "recently updated"
      ]}
      value={value}
      onChange={value => handleChange({ sort: value })}
      selectType="default"
      placeholder="Sort by"
      allowClear={false}
      style={{ width: 200 }}
    />
  </Skeleton>
);

export default Sort;
