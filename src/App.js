import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-h1'>Hello!</h1>
        <Link to={`signup`} className='a'>ENTER</Link>
      </header>
    </div>
  );
}

export default App;
