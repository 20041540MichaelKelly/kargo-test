'use client';
// Importing necessary modules from react-query and the LandingPage component
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Optional: For React Query Devtools
import LandingPage from './pages/landingPage';

// Creating a new QueryClient instance with default options
// staleTime and refetchInterval are set to 360000 milliseconds (or 6 minutes)
// refetchOnWindowFocus is set to false to prevent refetching when the window gains focus
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

// The main App component
const App = () => {
    return (
        // Providing the QueryClient instance to the app using the QueryClientProvider component
        // This allows any child components to use the react-query functionality
        <QueryClientProvider client={queryClient}>
            {/* Rendering the LandingPage component */}
            <LandingPage />
            {/* Optional: React Query Devtools component for debugging react-query */}
            {/* initialIsOpen is set to false to start with the devtools panel closed */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

// Exporting the App component as the default export
export default App;