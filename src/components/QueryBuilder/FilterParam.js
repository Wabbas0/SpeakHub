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
  label,
  allowClear,
  style,
  loading,
  withPopupContainer,
  popup
}: {
  options: Array<string>,
  value?: Array<string> | string | typeof undefined,
  selectType: "default" | "multiple",
  onChange: (value: Array<string> | string) => void,
  placeholder: string,
  label: string,
  allowClear?: boolean,
  style?: Object,
  loading?: boolean,
  withPopupContainer?: boolean
}) => (
  <Select
    showArrow
    mode={selectType}
    dropdownStyle={{ minWidth: 200 }}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    allowClear={allowClear || true}
    style={style}
    loading={loading}
    getPopupContainer={
      withPopupContainer ? () => document.getElementById("search") : null
    }
  >
    {options.length > 0 && (
      <Option
        disabled
        value="disabled"
        label="disabled"
        style={{ fontWeight: "bold" }}
      >
        {label}
      </Option>
    )}

    {options.map((option, i) => (
      <Option key={label + i} value={option.value} label={option.label}>
        {option.label}
      </Option>
    ))}
  </Select>
);

FilterParam.defaultProps = {
  withPopupContainer: true
};

export default FilterParam;
