import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from '@atoms/Text';
import { Generator } from '@components/Generator';
import { RegistrationForm } from '@components/RegistrationForm';
import { RegistrationPage } from '@pages/RegistrationPage';
// import { Viewport } from '@components/Viewport';
import { Counter } from '@components/Counter';
// const DumbComponent = () => <p>Hello</p>;
import { AuthInfo } from '@components/Auth';
import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { BuggyComponent } from '@components/ErrorBoundary/BuggyComponent';
import { ErrorBoundary } from '@components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider>
          {/* <AuthInfo /> */}
          {/* <Viewport /> */}

          <ErrorBoundary fallback={<p>Error #2</p>}>

          </ErrorBoundary>{/* <Counter /> */}
          {/* <Generator /> */}

          <ErrorBoundary fallback={<p>Error #1</p>}>
            <BuggyComponent />
            <RegistrationPage />
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
