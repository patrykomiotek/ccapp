import './App.css';
import { v4 as uuidv4 } from 'uuid';

import { Text } from './components/Text';
import { Generator } from './components/Generator';

const DumbComponent = () => <p>Hello</p>;

function App() {
  return (
    <div className="App">
      <Generator />
      <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text>
    </div>
  );
}

export default App;
