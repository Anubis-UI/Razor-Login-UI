import React from "react";
import MuiTypography from "@mui/material/Typography";

const Typography = ({ variant, children, bold, mt, mb, ml, mr, sx, href }) => {
  return (
    <MuiTypography
      variant={variant}
      children={children}
      bold={bold}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      sx={sx}
      href={href}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
