import './App.css';
import { v4 as uuidv4 } from 'uuid';

import { Text } from './components/Text';
import { Generator } from './components/Generator';
// import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationPage } from './pages/RegistrationPage';

// const DumbComponent = () => <p>Hello</p>;

function App() {
  return (
    <div className="App">
      <RegistrationPage />
      {/* <Generator /> */}
      {/* <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text> */}
    </div>
  );
}

export default App;
