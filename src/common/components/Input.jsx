import React from "react";

// Mui
import TextField from "@mui/material/TextField";

const Input = ({
  id = "outlined-basic",
  variant = "outlined",
  label,
  sx,
  children,
}) => {
  return (
    <TextField
      id={id}
      sx={{ margin: 1, width: "430px", ...sx }}
      variant={variant}
      label={label}
    >
      {children}
    </TextField>
  );
};

export default Input;
