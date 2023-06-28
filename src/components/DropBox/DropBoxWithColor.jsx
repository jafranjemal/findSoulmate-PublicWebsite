// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import React from 'react'

// const DropBox = ({labelText, value, items , onChange , name}) => {
//   return (
//     <FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={value}
//     name={name}

//     onChange={onChange}

//   >
//     {/* <MenuItem value={""}>Choose {labelText}</MenuItem> */}

//     {items && items.length >0 && items.map(x=>(<MenuItem key={x} value={x.value}>{x.text}</MenuItem>))}
//   </Select>
// </FormControl>
//   )
// }

// export default DropBox

import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropBoxWithColor = ({ labelText, value, items, onChange, name }) => {
  const renderItems = () => {
    if (items && items.length > 0) {
      return items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          <span
            style={{
              marginRight: 10,
              width: 50,
              height: 20,
              backgroundColor: item.color || "#fdf4e6",
            }}
          ></span> 
          {item.text}
        </MenuItem>
      ));
    }
    return null;
  };

  const defaultValue = value || ""; // Set default value as empty string if value is undefined

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultValue === undefined ? "" : defaultValue}
        name={name}
        onChange={onChange}
      >
        <MenuItem value="">Choose {labelText}</MenuItem>
        {renderItems()}
      </Select>
    </FormControl>
  );
};

export default DropBoxWithColor;
