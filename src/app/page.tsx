'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Optional: For React Query Devtools
import LandingPage from './pages/landingPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <LandingPage />
            <ReactQueryDevtools initialIsOpen={false} /> {/* Optional: React Query Devtools */}
        </QueryClientProvider>
    );
}

export default App;