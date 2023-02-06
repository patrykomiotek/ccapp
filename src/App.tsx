import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools'

import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { AuthPage } from '@pages/AuthPage';
import { GeneratorPage } from '@pages/GeneratorPage';
import { HomePage } from '@pages/HomePage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Menu } from '@molecules/Menu';
// import { ProductsList } from '@components/ProductsList';
// import { ProductsList } from '@components/ProductsList/ProductsLists.redux';
import { ProductsList } from '@components/ProductsList/ProductsList.query';
import { store } from './root-store';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const App = () => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider>
              <ErrorBoundary fallback={<p>Error #2</p>}>
                <Router>
                  <Menu />
                  <Routes>
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/generator" element={<GeneratorPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </Router>
              </ErrorBoundary>
            </ThemeProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

        {/* <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text> */}
      </div>
    </Provider>
  );
}

export { App };
