import './App.css';
import { v4 as uuidv4 } from 'uuid';

import { Text } from './components/Text';
import { Generator } from './components/Generator';
// import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationPage } from './pages/RegistrationPage';
// import { Viewport } from './components/Viewport';
import { Counter } from './components/Counter';
// const DumbComponent = () => <p>Hello</p>;

function App() {
  return (
    <div className="App">
      {/* <Viewport /> */}
      <Counter />
      {/* <RegistrationPage /> */}
      {/* <Generator /> */}
      {/* <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text> */}
    </div>
  );
}

export default App;
