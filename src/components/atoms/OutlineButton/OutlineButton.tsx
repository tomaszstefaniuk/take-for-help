import { Box, ButtonProps, Button as MuiButton, Tooltip } from "@mui/material";
import React, { FC } from "react";

export const OutlineButton: FC<ButtonProps> = ({
  children,
  title,
  ...rest
}) => {
  return (
    <Tooltip title={title}>
      <Box>
        <MuiButton
          variant="outlined"
          sx={{
            paddingX: 3.75,
            paddingY: 1.1,
            border: "1px solid",
            borderColor: "grey.300",
            bgcolor: "white",
            "&:hover": {
              borderColor: "grey.300",
              bgcolor: "grey.100",
              color: "secondary.main",
            },
            "&:disabled": {
              color: "grey.300",
              borderColor: "grey.300",
              "& svg": {
                fill: "#DBDFE9",
              },
            },
          }}
          {...rest}
        >
          {children}
        </MuiButton>
      </Box>
    </Tooltip>
  );
};
