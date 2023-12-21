export const customStyles = {
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: "226px",
    backgroundColor: "#212529",
    borderRadius: "7px",
    padding: "0",
    color: "#fff",
    "&::-webkit-scrollbar": {
      width: "2.5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#2d3338",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "15px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#262b30" : "",
    cursor: "pointer",
    alignItems: "center",
    padding: "4px 0px 4px 10px",
  }),
  
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#262b30" : "#212529",
    padding: "4.8px",
    borderRadius: "7px",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "white",
    "&:hover": {
      color: "white",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
};
