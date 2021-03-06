import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src/styles/theme';
import reset from '../src/styles/reset';
import { addDecorator } from '@storybook/react';
import { Global } from '@emotion/react';
import { MemoryRouter } from 'react-router'; // or "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={theme}>
    <Global styles={reset} />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(EmotionThemeProvider);
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
