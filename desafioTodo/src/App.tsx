import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

import styles from './App.module.css';
import './global.css';

const tasks = [
  {
    id: 1,
    content: 'Web Developer',
    isComplete: true,
  },
];

function App() {
  return (
    <div>
      <Header />
      <div>
        <Tasks content={tasks} />;
      </div>
    </div>
  );
}

export default App;
