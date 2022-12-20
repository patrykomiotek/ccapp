import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { AuthPage } from '@pages/AuthPage';
import { GeneratorPage } from '@pages/GeneratorPage';
import { HomePage } from '@pages/HomePage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Menu } from '@molecules/Menu';
import { ProductsList } from '@components/ProductsList';

function App() {
  return (
    <div className="App">
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

      {/* <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text> */}
    </div>
  );
}

export default App;
