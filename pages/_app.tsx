import type { AppProps } from 'next/app';
import { StyleProvider } from '@/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

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
  const router: NextRouter = useRouter();

  useEffect(() => {
    storePathValues();
  }, [router.asPath]);

  const storePathValues: () => void = () => {
    const storage: Storage = globalThis.sessionStorage;
    const prevPath: string | null = storage.getItem('currentPath');

    if (!storage || !prevPath) return;

    storage.setItem('prevPath', prevPath);
    storage.setItem('currentPath', globalThis.location.pathname);
  };

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StyleProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </StyleProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
