import { createTheme } from "@mui/material";
import { hexToRgba } from "@/utils";

const palette = {
  text: {
    primary: "#4B5675",
    secondary: "#071437",
    disabled: "#99A1B7",
  },
  primary: {
    main: "#4B5675",
  },
  secondary: {
    light: "#E9F3FF",
    main: "#1B84FF",
    dark: "#1565c0",
  },
  success: {
    light: "#DFFFEA",
    main: "#17C653",
  },
  error: {
    light: "#FFEEF3",
    main: "#F8285A",
  },
  action: {
    disabled: "#fff",
    disabledBackground: hexToRgba("#1B84FF", 0.65),
  },
  grey: {
    100: "#F9F9F9",
    200: "#F1F1F4",
    300: "#DBDFE9",
    400: "#C4CADA",
    500: "#99A1B7",
    600: "#78829D",
    700: "#4B5675",
    800: "#252F4A",
    900: "#071437",
  },
  divider: "#E4E6EF",
};

const borderRadius = "0.375rem";

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Inter, Helvetica, sans-serif",
    fontSize: 13,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    body2: {
      fontSize: "0.8125rem", // 13px
      fontWeight: 400,
      [`@media (max-width:${breakpoints.md}px)`]: {
        fontSize: "0.75rem", // 12px
      },
    },
    subtitle1: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      [`@media (max-width:${breakpoints.md}px)`]: {
        fontSize: "0.8rem", // 12.8px
      },
    },
    subtitle2: {
      fontSize: "0.77rem",
      fontWeight: 600,
    },
    h1: {
      fontSize: "1.825rem",
      fontWeight: 700,
      [`@media (max-width:${breakpoints.md}px)`]: {
        fontSize: "1.3rem", // 20.8px
      },
    },
    h2: {
      fontSize: "1.425rem", // 22.8px
      fontWeight: 700,
      [`@media (max-width:${breakpoints.md}px)`]: {
        fontSize: "1.125rem", // 18px
      },
    },
    button: {
      fontSize: "0.894rem",
    },
  },
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius,
          paddingTop: "0.575rem",
          paddingBottom: "0.575rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius,
          "&:before": {
            borderBottom: "unset !important",
          },
          "&:after": {
            borderBottom: "unset !important",
          },
        },
        input: {
          paddingTop: "0.625rem",
          paddingBottom: "0.625rem",
          paddingLeft: "0.8125rem",
          paddingRight: "2.6rem",
          fontWeight: 500,
          "&::placeholder": {
            color: "#99A1B7",
            opacity: 1,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "&:before": {
            borderColor: "#F1F1F4",
          },
          "&:after": {
            borderColor: "#F1F1F4",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 5,
          borderRadius,
        },
        bar: {
          borderRadius,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius,
          "&.MuiAlert-outlinedError": {
            color: "#F8285A",
            backgroundColor: "#FFEEF3",
            borderColor: "#F8285A",
          },
          "&.MuiAlert-standardSuccess": {
            color: "#17C653",
            backgroundColor: "#DFFFEA",
            borderColor: "#17C653",
            padding: "0.75rem",
          },
        },
      },
    },
  },
});
