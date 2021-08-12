import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Chats from './components/Chats';
import './Styles/css/app.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Chats />
    </div>
  );
}

export default App;
