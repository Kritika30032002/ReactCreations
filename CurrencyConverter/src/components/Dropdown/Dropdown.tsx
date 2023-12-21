import React from "react";
import Select, { components } from "react-select";
import { currency } from "../../config/currency";
import { customStyles } from "./index";
const { Option } = components;

interface DropdownsProps {
  placeholder: string;
  handleChange: (selectedOption: any) => void;
  value: any;
}

const OptionComponent: React.FC<any> = (props) => {
  return (
    <Option {...props}>
      <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
      {props.data.label}
    </Option>
  );
};

const Dropdowns: React.FC<DropdownsProps> = (props) => {
  const { handleChange, placeholder, value } = props;

  const selectValue = currency.find((option) => option.value === value || option.label === value);

  return (
    <Select
      options={currency}
      onChange={handleChange}
      placeholder={placeholder}
      styles={customStyles}
      value={selectValue}
      components={{ Option: OptionComponent }}
    />
  );
};

export default Dropdowns;
