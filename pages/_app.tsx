import type { AppProps } from 'next/app';
import { StyleProvider } from '@/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StyleProvider>
          <Component {...pageProps} />
        </StyleProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
