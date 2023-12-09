import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { checkboxSvg } from "./checkboxSvg";

type Props = CheckboxProps & {
  label: string;
  ref: ForwardedRef<HTMLInputElement>;
};

export const CheckboxComponent = (
  { label, value, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...rest}
          disableRipple
          sx={{
            cursor: "default",
            background: value
              ? `url("data:image/svg+xml,${encodeURIComponent(
                  checkboxSvg
                )}") center/contain no-repeat`
              : "",
            backgroundSize: "60% 60%",
            backgroundColor: value ? "secondary.main" : "white",
            height: "22px",
            width: "22px",
            borderRadius: "5.85px",
            border: "1px solid",
            borderColor: value ? "secondary.main" : "grey.300",
            marginRight: 1,
            "&:active": {
              borderColor: "grey.400",
            },
            "& .MuiSvgIcon-root": {
              display: "none", // Hide the default checkbox
            },
          }}
        />
      }
      label={label}
      ref={ref}
      sx={{
        cursor: "default",
        color: "text.secondary",
        "&.MuiFormControlLabel-root": {
          marginLeft: 0,
          marginRight: 0,
        },
        "& .MuiTypography-body1": {
          fontSize: "0.8125rem", //13px
        },
      }}
    />
  );
};

export const Checkbox = forwardRef(CheckboxComponent);
