import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement) {
  throw new Error("Element with id 'root' not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <SpeedInsights />
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
