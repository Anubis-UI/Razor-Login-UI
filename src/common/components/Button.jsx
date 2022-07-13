import React from "react";
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({
  type = "button",
  variant = "contained",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  compact = false,
  startIcon,
  onClick,
  children,
  href,
  sx,
}) => {
  return (
    <MuiButton
      type={type}
      variant={variant}
      isLoading={isLoading}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={isLoading && <CircularProgress size={20} />}
      compact={compact}
      onClick={onClick}
      children={children}
      href={href}
      sx={{
        margin: 1,
        background: "#FCC986",
        color: "black",
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
