import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

export const TextBetweenLines: FC<Props> = ({ text }) => {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box bgcolor="grey.200" height="1px" width="100%"></Box>
      <Typography
        variant="subtitle2"
        minWidth="max-content"
        marginX={2.75}
        color="text.disabled"
        fontWeight="medium"
      >
        {text}
      </Typography>
      <Box bgcolor="grey.200" height="1px" width="100%"></Box>
    </Box>
  );
};
