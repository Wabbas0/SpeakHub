// @flow
import React from "react";
import FilterParam from "../QueryBuilder/FilterParam";
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
        { label: "Newest", value: "created,desc" },
        { label: "Oldest", value: "created,asc" },
        { label: "Most commented", value: "comments,desc" },
        { label: "Least commented", value: "comments,asc" },
        { label: "Recently updated", value: "updated,asc" }
      ]}
      value={value}
      onChange={value => {
        const [sort, direction] = value.split(",");
        handleChange({ sort, direction });
      }}
      selectType="default"
      placeholder="Sort by"
      allowClear={false}
      style={{ width: 200 }}
      withPopupContainer={false}
    />
  </Skeleton>
);

export default Sort;
