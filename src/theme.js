import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    // fontFamily: ["Roboto", "IBM Plex Sans Thai", "sans-serif"].join(","),
    // fontFamily: ["Roboto", "K2D", "sans-serif"].join(","),
    fontFamily: ["Roboto", "Kodchasan", "sans-serif"].join(","),
    fontSize: 14,
  },
  palette: {
    background: {
      default: "rgb(230, 230, 230)",
    },
  },
});
