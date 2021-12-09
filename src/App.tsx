import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import { theme } from './styles/theme';
import './styles/font.css';
import Router from './routes/Router';
import { Link, useNavigate } from 'react-router-dom';
useNavigate;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
