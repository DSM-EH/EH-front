import global from './global';
import { theme } from './theme';
import { ReactNode } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

interface PropsType {
  children: ReactNode;
}

export const StyleProvider = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};
