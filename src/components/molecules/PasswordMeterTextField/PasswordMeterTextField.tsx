import { Box, InputProps, LinearProgress, Typography } from "@mui/material";
import { ForwardedRef, forwardRef, useMemo } from "react";
import { TextField } from "@/components/atoms";

type Props = InputProps & {
  value: string;
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

  const strength = useMemo(
    () => (typeof value === "string" ? calculateStrength(value) : 0),
    [value]
  );

  return (
    <Box>
      <TextField
        type="password"
        id={id || ""}
        label={label}
        isError={isError}
        isSuccess={isSuccess}
        helperText={helperText}
        {...rest}
        ref={ref}
      />
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
