import { Box, Input, InputLabel, InputProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

type Props = InputProps & {
  id: string;
  label: string;
  ref: ForwardedRef<HTMLInputElement>;
};

export const Field = (
  { id, label, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Box>
      <InputLabel
        htmlFor={id}
        color="secondary"
        sx={{ fontSize: "0.875rem", fontWeight: "bold", marginBottom: 1 }}
      >
        {label}
      </InputLabel>
      <Input
        {...rest}
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: "grey.300",
          "&.Mui-focused": {
            borderColor: "grey.400",
          },
        }}
        id={id}
        ref={ref}
      />
    </Box>
  );
};

export const TextField = forwardRef(Field);
