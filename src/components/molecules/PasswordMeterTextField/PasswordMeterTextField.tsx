import {
  ErrorOutline as ErrorOutlineIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import {
  Box,
  Input,
  InputLabel,
  InputProps,
  LinearProgress,
  Typography,
} from "@mui/material";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

type Props = InputProps & {
  label: string;
  isSuccess?: boolean;
  isError?: boolean;
  helperText?: string;
  ref: ForwardedRef<HTMLInputElement>;
};

const MeterTextField = (
  { id, label, value, helperText, isError, isSuccess, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [strength, setStrength] = useState(0);

  const calculateStrength = (password: string) => {
    const lengthScore = password.length > 8 ? 1 : 0;
    const uppercaseScore = /[A-Z]/.test(password) ? 1 : 0;
    const digitScore = /\d/.test(password) ? 1 : 0;
    const specialCharScore = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)
      ? 1
      : 0;

    const totalScore =
      lengthScore + uppercaseScore + digitScore + specialCharScore;

    return Math.min(Math.round((totalScore / 4) * 100), 100);
  };

  useEffect(() => {
    setStrength(calculateStrength(String(value)));
  }, [value]);

  return (
    <Box>
      <InputLabel
        htmlFor={id}
        color="secondary"
        sx={{ fontSize: "0.875rem", fontWeight: "bold", marginBottom: 1 }}
      >
        {label}
      </InputLabel>
      <Box position="relative">
        <Input
          {...rest}
          type="password"
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
          value={value}
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
      <Box marginTop={1.25}>
        <Box display="flex" gap={0.75}>
          <LinearProgress
            variant="determinate"
            value={strength >= 25 ? 100 : 0}
            sx={{
              flex: 1,
              backgroundColor: strength >= 25 ? "success.main" : "grey.100",
              "& .MuiLinearProgress-bar": {
                backgroundColor: strength >= 25 ? "success.main" : "grey.100",
              },
            }}
          />
          <LinearProgress
            variant="determinate"
            value={strength >= 50 ? 100 : 0}
            sx={{
              flex: 1,
              backgroundColor: strength >= 50 ? "success.main" : "grey.100",
              "& .MuiLinearProgress-bar": {
                backgroundColor: strength >= 50 ? "success.main" : "grey.100",
              },
            }}
          />
          <LinearProgress
            variant="determinate"
            value={strength >= 75 ? 100 : 0}
            sx={{
              flex: 1,
              backgroundColor: strength >= 75 ? "success.main" : "grey.100",
              "& .MuiLinearProgress-bar": {
                backgroundColor: strength >= 75 ? "success.main" : "grey.100",
              },
            }}
          />
          <LinearProgress
            variant="determinate"
            value={strength === 100 ? 100 : 0}
            sx={{
              flex: 1,
              backgroundColor: strength === 100 ? "success.main" : "grey.100",
              "& .MuiLinearProgress-bar": {
                backgroundColor: strength === 100 ? "success.main" : "grey.100",
              },
            }}
          />
        </Box>
        <Typography
          variant="body2"
          color="text.disabled"
          sx={{ marginTop: 1.5 }}
        >
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </Typography>
      </Box>
    </Box>
  );
};

export const PasswordMeterTextField = forwardRef(MeterTextField);
