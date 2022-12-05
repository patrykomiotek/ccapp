import './App.css';

import { Text } from './components/Text';

const DumbComponent = () => <p>Hello</p>;

function App() {
  return (
    <div className="App">
      <Text>Today is Monday</Text>
      <Text>Hello</Text>
      <Text>Lorem</Text>
    </div>
  );
}

export default App;
