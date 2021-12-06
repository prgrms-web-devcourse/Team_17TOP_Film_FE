import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import { theme } from './styles/theme';
import './styles/font.css';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <div className="App">Hello</div>
    </ThemeProvider>
  );
}

export default App;
