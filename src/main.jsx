import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Theme from './styles/Theme.js';
import GlobalStyle from './styles/GlobalStyle.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights />
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
