import { createTheme } from "@mui/material";

const palette = {
  text: {
    primary: "#4B5675",
    secondary: "#071437",
    disabled: "#99A1B7",
  },
  primary: {
    main: "#4B5675",
  },
  divider: "#E4E6EF",
};

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Inter, Helvetica, sans-serif",
    fontSize: 13,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    subtitle2: {
      fontSize: "0.77rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
