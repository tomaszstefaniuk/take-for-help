import {
  ErrorOutline as ErrorOutlineIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import { Box, Input, InputLabel, InputProps, Typography } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

type Props = InputProps & {
  id: string;
  label: string;
  isSuccess?: boolean;
  isError?: boolean;
  helperText?: string;
  ref: ForwardedRef<HTMLInputElement>;
};

const Field = (
  { id, label, helperText, isError, isSuccess, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Box>
      <InputLabel
        htmlFor={id}
        color="secondary"
        sx={{
          fontSize: { xs: "0.8rem", md: "0.875rem" }, //xs: 12.8px, md: 14px
          fontWeight: "bold",
          marginBottom: { xs: 0.5, md: 1 },
        }}
      >
        {label}
      </InputLabel>
      <Box position="relative">
        <Input
          {...rest}
          sx={{
            width: "100%",
            border: "1px solid",
            borderColor: isError
              ? "error.main"
              : isSuccess
                ? "success.main"
                : "grey.300",
            boxShadow: isError ? "0 0 0 0.25rem rgba(248, 40, 90, 0.25)" : "",
            "&.Mui-focused": {
              borderColor: isError
                ? "error.main"
                : isSuccess
                  ? "success.main"
                  : "grey.400",
              boxShadow: isError ? "0 0 0 0.25rem rgba(248, 40, 90, 0.25)" : "",
            },
          }}
          placeholder={label}
          id={id}
          ref={ref}
        />
        {isError && (
          <ErrorOutlineIcon
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "error.main",
            }}
          />
        )}
        {isSuccess && (
          <DoneIcon
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "success.main",
            }}
          />
        )}
      </Box>
      {isError && (
        <Typography variant="body2" color="error" marginTop={0.5}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export const TextField = forwardRef(Field);
