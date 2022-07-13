import React from "react";
import Stack from "@mui/material/Stack";

const AuthFormBox = ({
  borderRadius = 5,
  flexDirection = "column",
  backgroundColor = "white",
  height = "calc(100vh - 457)",
  width = "450px",
  boxShadow = 3,
  padding = 2,
  children,
}) => {
  return (
    <Stack
      borderRadius={borderRadius}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      boxShadow={boxShadow}
      padding={padding}
    >
      {children}
    </Stack>
  );
};

export default AuthFormBox;
