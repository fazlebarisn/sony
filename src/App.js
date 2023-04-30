import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Sony" age="32" />
      <Main/>
      <Sidebar/>
    </div>
  )
}

export default App;
