import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";

import AppRoutes from "./routes";
import "./i18n";

import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StyledThemeProvider theme={lightTheme}>
        <CssBaseline />
        <GlobalStyle />

        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
