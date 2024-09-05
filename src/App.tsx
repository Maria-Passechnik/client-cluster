import './App.css';
import { QueueList } from './Components/QueueList';
import { QueueSelector } from './Components/QueueList/QueueSelector';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Queue Management System</h1>
      </header>
      <QueueList />
      <QueueSelector />
    </div>
  );
};

export default App;
