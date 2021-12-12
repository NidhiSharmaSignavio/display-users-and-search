import './App.css';
import Home from './components/Home';
import UserProvider from './context_store/UserProvider';
function App() {
  return (
    <UserProvider>
      <div className='App'>
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;
