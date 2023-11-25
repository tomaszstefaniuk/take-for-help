import { theme } from "@/styles/theme";
import { Box } from "@mui/material";
import { FC } from "react";

export const HeaderComponent: FC = () => {
  return (
    <Box
      sx={{ height: 94, borderBottom: `1px solid ${theme.palette.divider}` }}
    >
      Header
    </Box>
  );
};
