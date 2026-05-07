import Home from "./pages/Home.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";

function App() {
  const theme = useMemo(() => createTheme({
    palette: {
      mode: 'light', // You can change this to match system or a state
      primary: {
        main: '#4f46e5',
      },
      secondary: {
        main: '#64748b',
      },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
        },
      },
    },
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App

