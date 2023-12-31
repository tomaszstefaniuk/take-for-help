import { createTheme } from "@mui/material";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { hexToRgba } from "@/utils";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    linkContained: TypographyStyleOptions;
    linkTextLight: TypographyStyleOptions;
    linkTextDark: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    linkContained: TypographyStyleOptions;
    linkTextLight?: TypographyStyleOptions;
    linkTextDark?: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    linkContained: true;
    linkTextLight: true;
    linkTextDark: true;
  }
}

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
  tertiary: {
    light: "#F9F9F9",
    main: "#252F4A",
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
  qwe: {
    main: "#F8285A",
  },
};

const borderRadius = "0.375rem";

const linkTextStyles = {
  cursor: "pointer",
  color: palette.secondary.main,
  fontSize: "0.815rem", // 13px
  fontWeight: 500,
  padding: 0,
};

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
theme = createTheme(theme, {
  palette,
  typography: {
    fontFamily: "Inter, Helvetica, sans-serif",
    fontSize: 13,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    body2: {
      fontSize: "0.8125rem", // 13px
      fontWeight: 400,
      [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem", // 12px
      },
    },
    linkTextLight: {
      ...linkTextStyles,
      "&:hover": {
        opacity: 0.8,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem", // 12px
      },
    },
    linkTextDark: {
      ...linkTextStyles,
      "&:hover": {
        color: palette.secondary.dark,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem", // 12px
      },
    },
    linkContained: {
      fontSize: "0.894rem", // 14.3px
      fontWeight: 500,
      color: palette.tertiary.main,
      backgroundColor: palette.tertiary.light,
      borderRadius,
      cursor: "pointer",
      textDecoration: "none",
      textAlign: "center",
      display: "inline-block",
      lineHeight: "1.5rem",
      padding: "0.575rem 1rem",
      "&:hover": {
        color: palette.tertiary.main,
        backgroundColor: "#fcfcfc",
      },
    },
    subtitle1: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
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
      [theme.breakpoints.down("md")]: {
        fontSize: "1.3rem", // 20.8px
      },
    },
    h2: {
      fontSize: "1.425rem", // 22.8px
      fontWeight: 700,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem", // 18px
      },
    },
    button: {
      fontSize: "0.894rem", // 14.3px
      lineHeight: "1.5rem",
    },
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem", // 14px
          fontWeight: "bold",
          marginBottom: "0.5rem",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.8rem", // 12.8px
            marginBottom: "0.25rem",
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
