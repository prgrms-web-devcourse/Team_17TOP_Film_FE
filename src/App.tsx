import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import { theme } from './styles/theme';
import './styles/font.css';
import Router from './routes/Router';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <UserProvider>
        <Router />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
