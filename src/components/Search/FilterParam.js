// @flow
import React from "react";
import { Select } from "antd";
const { Option } = Select;

const FilterParam = ({
  options,
  value,
  onChange,
  selectType,
  placeholder,
  label
}: {
  options: Array<string>,
  value?: Array<string> | string | typeof undefined,
  selectType: "default" | "multiple",
  onChange: (value: Array<string> | string) => void,
  placeholder: string,
  label: string
}) => (
  <Select
    mode={selectType}
    dropdownStyle={{ minWidth: 300 }}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    allowClear
  >
    <Option disabled value="disabled" label="disabled">
      {label}
    </Option>

    {options.map((label, i) => (
      <Option key={label + i} value={label} label={label}>
        {label}
      </Option>
    ))}
  </Select>
);

export default FilterParam;
