import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: "#EC6724",
    },
    secondary: {
      main: "#EC6724",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#AAAAAA",
    },
    grey: {
      "300": "#D9D9D9",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EC6724",
    },
    secondary: {
      main: "#EC6724",
    },
  },
});
