import type { AppProps } from 'next/app';
import { StyleProvider } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
};

export default App;
